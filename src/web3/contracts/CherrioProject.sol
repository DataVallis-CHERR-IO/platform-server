// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface ICherrioProjectActivator {
    function sendReward() external;
}

contract CherrioProject {
    address public admin;
    address public cherrioProjectActivator;
    uint256 public minimumDonation;
    uint256 public startedAt;
    uint256 public endedAt;
    uint256 public goal;
    uint256 public raisedAmount;
    uint public totalDonors;
    uint public duration;
    Stages public stage;
    uint numRequests;

    struct Request {
        string description;
        uint value;
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
    mapping(uint => Request) requests;

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

    event Donation(address donor, uint256 amount);
    event StageChanged(Stages stage);

    constructor(uint _duration, uint256 _goal) {
        duration = _duration;
        goal = _goal;
        stage = Stages.Pending;
        minimumDonation = 0.00000001*(10**18);
        admin = 0x78b881eB26Db03B49239DB7cd7b2c92f95d9D63C;
        cherrioProjectActivator = 0x7442311a691B65191648e27A71b05F398cf06A8B;
    }

    receive() external payable {
        donate();
    }

    function donate() public payable atStage(Stages.Active) {
        require(msg.value >= minimumDonation);
        require(block.timestamp <= endedAt);

        if (donations[msg.sender] == 0) {
            totalDonors++;
        }

        donations[msg.sender] += msg.value;
        raisedAmount += msg.value;

        emit Donation(msg.sender, msg.value);

        if (raisedAmount >= goal) {
            stage = Stages.Ended;
            ICherrioProjectActivator(cherrioProjectActivator).sendReward();

            emit StageChanged(stage);
        }
    }

    function activate() external atStage(Stages.Pending) canActivate(msg.sender) {
        stage = Stages.Active;
        startedAt = block.timestamp;
        endedAt = startedAt + (duration * 1 days);

        emit StageChanged(stage);
    }

    function getCurrentTime() public view returns(uint256){
        return block.timestamp;
    }

    function getRefund() public {
        require(block.timestamp > endedAt);
        require(raisedAmount <= goal);
        require(donations[msg.sender] > 0);

        payable(msg.sender).transfer(donations[msg.sender]);
        donations[msg.sender] = 0;
    }

    function createSpendingRequest(string memory _description, address _recipient, uint _value) public isAdmin {
        Request storage r = requests[numRequests++];
        r.description = _description;
        r.value = _value;
        r.recipient = _recipient;
        r.numberOfVoters = 0;
        r.completed = false;
    }

    function voteForRequest(uint index) public {
        Request storage request = requests[index];
        require(donations[msg.sender] > 0);
        require(request.voters[msg.sender] == false);

        request.voters[msg.sender] = true;
        request.numberOfVoters++;
    }

    function makePayment(uint index) public isAdmin {
        Request storage request = requests[index];
        require(request.completed == false);
        require(request.numberOfVoters > totalDonors / 2);
        //more than 50% voted
        payable(request.recipient).transfer(request.value);
        request.completed = true;
    }
}
