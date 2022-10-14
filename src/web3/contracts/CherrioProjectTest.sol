// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CherrioProjectTest {
    uint8 public counter;

    constructor() {
        counter = 0;
    }

    function increment() external {
        counter += 1;
    }
}
