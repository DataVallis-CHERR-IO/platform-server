// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

///**
// * @title SafeMath
// * @dev Math operations with safety checks that throw on error
// */
//library SafeMath {
//    function mul(uint256 a, uint256 b) internal pure returns(uint256) {
//        uint256 c = a * b;
//        assert(a == 0 || c / a == b);
//
//        return c;
//    }
//
//    function div(uint256 a, uint256 b) internal pure returns(uint256) {
//        // assert(b > 0); // Solidity automatically throws when dividing by 0
//        uint256 c = a / b;
//
//        // assert(a == b * c + a % b); // There is no case in which this doesn't hold
//        return c;
//    }
//
//    function sub(uint256 a, uint256 b) internal pure returns(uint256) {
//        assert(b <= a);
//
//        return a - b;
//    }
//
//    function add(uint256 a, uint256 b) internal pure returns(uint256) {
//        uint256 c = a + b;
//        assert(c >= a);
//
//        return c;
//    }
//}
//
///**
// * @title Owner
// * @dev Set & change owner
// */
//contract Owner {
//    address private owner;
//
//    // event for EVM logging
//    event OwnerSet(address indexed oldOwner, address indexed newOwner);
//
//    // modifier to check if caller is owner
//    modifier isOwner() {
//        // If the first argument of 'require' evaluates to 'false', execution terminates and all
//        // changes to the state and to Ether balances are reverted.
//        // This used to consume all gas in old EVM versions, but not anymore.
//        // It is often a good idea to use 'require' to check if functions are called correctly.
//        // As a second argument, you can also provide an explanation about what went wrong.
//        require(msg.sender == owner, "Caller is not owner");
//        _;
//    }
//
//    /**
//     * @dev Set contract deployer as owner
//     */
//    constructor() {
//        console.log("Owner contract deployed by:", msg.sender);
//        owner = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
//        emit OwnerSet(address(0), owner);
//    }
//
//    /**
//     * @dev Change owner
//     * @param newOwner address of new owner
//     */
//    function changeOwner(address newOwner) public isOwner {
//        emit OwnerSet(owner, newOwner);
//        owner = newOwner;
//    }
//
//    /**
//     * @dev Return owner address
//     * @return address of owner
//     */
//    function getOwner() external view returns (address) {
//        return owner;
//    }
//}

interface ICherrioProjectTest {
    function counter() external view returns (uint8);
    function increment() external;
}

contract CherrioProjectLock {
//    using SafeMath for uint256;

    address cherrioProjectTest;
//    uint256 private pool;

    constructor(address counterAddress) {
        cherrioProjectTest = counterAddress;
    }

//    struct Project {
//        Stages stage;
//        bool flag;
//        uint256 lockSize;
//        uint256 lockedAmount;
//        mapping(address => uint256) lockers;
//    }
//
//    enum Stages {
//        Pending,
//        InProgress,
//        Ended
//    }
//
//    Stages public stage;
//
//    mapping(address => Project) public projects;

    function counterIncrement() external {
        ICherrioProjectTest(cherrioProjectTest).increment();
    }

//    function addProject(address _address, uint256 _lockSize, Stages _stage) external isOwner {
//        require(!projects[_address].flag);
//
//        projects[_address].flag = true;
//        projects[_address].stage = _stage;
//        projects[_address].lockSize = _lockSize;
//        projects[_address].lockedAmount = 0;
//    }
//
//    function lock(address _address) public {
//        require(projects[_address].flag);
//        require(projects[_address].stage != Stages.Ended);
//
//        if (projects[_address].lockers[msg.sender] > 0) {
//            projects[_address].lockers[msg.sender] += msg.value;
//        } else {
//            projects[_address].lockers[msg.sender] = msg.value;
//        }
//
//        projects[_address].lockedAmount += msg.value;
//
//        if (projects[_address].lockedAmount >= projects[_address].lockSize) {
//            projects[_address].stage = Stages.Ended;
//        }
//    }
}
