// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

/**
 * @title Owner
 * @dev Set & change owner
 */
contract Owner {
    address private owner;

    // event for EVM logging
    event OwnerSet(address indexed oldOwner, address indexed newOwner);

    // modifier to check if caller is owner
    modifier isOwner() {
        // If the first argument of 'require' evaluates to 'false', execution terminates and all
        // changes to the state and to Ether balances are reverted.
        // This used to consume all gas in old EVM versions, but not anymore.
        // It is often a good idea to use 'require' to check if functions are called correctly.
        // As a second argument, you can also provide an explanation about what went wrong.
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    /**
     * @dev Set contract deployer as owner
     */
    constructor() {
        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        emit OwnerSet(address(0), owner);
    }

    /**
     * @dev Change owner
     * @param newOwner address of new owner
     */
    function changeOwner(address newOwner) public isOwner {
        emit OwnerSet(owner, newOwner);
        owner = newOwner;
    }

    /**
     * @dev Return owner address
     * @return address of owner
     */
    function getOwner() external view returns (address) {
        return owner;
    }
}

interface ICherrioProjectActivator {
    function sendReward() external;
}

contract CherrioProject is Owner {
    address public admin;
    address public cherrioProjectActivator;
    string public tokenURI;
    uint256 public startedAt;
    uint256 public deadline;
    uint256 public endedAt;
    uint256 public goal;
    uint256 public raisedAmount;
    uint256 public minimumDonation;
    uint public totalDonations;
    uint public totalDonors;
    uint public duration;
    Stages public stage;
    uint public numRequests;

    struct Request {
        string description;
        uint256 value;
        address recipient;
        bool completed;
        uint numberOfVoters;
        mapping(address => bool) voters;
    }

    enum Stages {
        Pending,
        Active,
        Ended,
        Locked
    }

    mapping(address => uint256) public donations;
    mapping(uint => Request) public requests;

    modifier isAdmin {
        require(msg.sender == admin);
        _;
    }

    modifier atStage(Stages _expectedStage) {
        require(stage == _expectedStage);
        _;
    }

    modifier canActivate(address _address) {
        require(_address == admin || _address == cherrioProjectActivator);
        _;
    }

    event Donation(address donor, uint256 value);
    event ProjectActivated(uint256 startedAt, uint256 deadline);
    event ProjectEnded();
    event CreateSpendingRequest(string description, address recipient, uint256 value);
    event VoteForRequest(uint index, uint numberOfVoters);
    event MakePayment(uint index, uint256 value);

    constructor(uint256 _goal, uint _duration, string memory _tokenURI) {
        goal = _goal;
        duration = _duration;
        tokenURI = _tokenURI;
        stage = Stages.Pending;
        minimumDonation = 0.00001*(10**18);
        admin = _convertFromTronInt(0x41f66a0abfd2c31f169855a83fc8da5d68775f6814);
        cherrioProjectActivator = _convertFromTronInt(0x41a6dd2d61a7784ec796e5152110a3e62baaea5d6a);
    }

    receive() external payable {
        donate();
    }

    function donate() public payable atStage(Stages.Active) {
        //require(msg.value >= minimumDonation);
        require(block.timestamp <= deadline);

        if (donations[msg.sender] == 0) {
            totalDonors++;
        }

        donations[msg.sender] += msg.value;
        raisedAmount += msg.value;
        totalDonations++;

        emit Donation(msg.sender, msg.value);

        if (raisedAmount >= goal) {
            stage = Stages.Ended;
            endedAt = block.timestamp;
            ICherrioProjectActivator(cherrioProjectActivator).sendReward();

            emit ProjectEnded();
        }
    }

    function activate() external atStage(Stages.Pending) canActivate(msg.sender) {
        stage = Stages.Active;
        startedAt = block.timestamp;
        deadline = startedAt + (duration * 1 days);

        emit ProjectActivated(startedAt, deadline);
    }

    function getCurrentTime() external view returns(uint256){
        return block.timestamp;
    }

    function getRefund() external {
        require(block.timestamp > endedAt);
        require(raisedAmount <= goal);
        require(donations[msg.sender] > 0);

        payable(msg.sender).transfer(donations[msg.sender]);
        donations[msg.sender] = 0;
    }

    function setMinimumDonation(uint _value) public isAdmin{
        minimumDonation = _value*(10**18);
    }

    function createSpendingRequest(string memory _description, address _recipient, uint256 _value) public isOwner {
        Request storage r = requests[numRequests++];
        r.description = _description;
        r.recipient = _recipient;
        r.value = _value;
        r.numberOfVoters = 0;
        r.completed = false;

        emit CreateSpendingRequest(_description, _recipient, _value);
    }

    function voteForRequest(uint index) external {
        Request storage request = requests[index];
        require(donations[msg.sender] > 0);
        require(request.voters[msg.sender] == false);

        request.voters[msg.sender] = true;
        request.numberOfVoters++;

        emit VoteForRequest(index, request.numberOfVoters);
    }

    function makePayment(uint index) external isAdmin {
        Request storage request = requests[index];
        require(request.completed == false);
        require(request.numberOfVoters >= totalDonors / 2);
        //more or equal than 50% voted
        payable(request.recipient).transfer(request.value);
        request.completed = true;

        emit MakePayment(index, request.value);
    }

    function getRequests() external view returns (string[] memory descriptions, uint256[] memory amounts, address[] memory recipients, bool[] memory completed, uint[] memory numberOfVoters){
        string[] memory description = new string[](numRequests);
        uint256[] memory value = new uint256[](numRequests);
        address[] memory recipient = new address[](numRequests);
        bool[] memory complete = new bool[](numRequests);
        uint[] memory voters = new uint[](numRequests);

        for (uint i = 0; i < numRequests; i++) {
            Request storage request = requests[i];
            description[i] = request.description;
            value[i] = request.value;
            recipient[i] = request.recipient;
            complete[i] = request.completed;
            voters[i] = request.numberOfVoters;
        }
        return (description, value, recipient, complete, voters);
    }

    function getRequest(uint index) external view returns (string memory description, uint256 amount, address recipient, bool completed, uint numberOfVoters){
        Request storage request = requests[index];

        return (request.description, request.value, request.recipient, request.completed, request.numberOfVoters);
    }

    function _convertFromTronInt(uint256 tronAddress) internal pure returns(address){
        return address(uint160(tronAddress));
    }
}
