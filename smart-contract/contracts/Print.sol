// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

contract Print {

    address nftOwner; //= 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    string ownerName;
    uint16 remainingPrints;

    modifier onlyOwner() {
        require(msg.sender == nftOwner, "NOT OWNER");
        _;
    }

    constructor(string memory ownerName_) {
        nftOwner = msg.sender;
        ownerName = ownerName_;
        remainingPrints = 1000;
    }

    function getPrints () public view onlyOwner() returns (uint16) {
        return remainingPrints;
    }

    function printPage () public onlyOwner() {
        if (remainingPrints > 0) {
            remainingPrints = remainingPrints - 1;
            // return string(abi.encode("Print successful, ", ownerName, " has ", remainingPrints, " left."));
            // return ("Printed successfully", remainingPrints, ownerName);
            // return stringToBytes32("Print Successful");
        }
        // return string(abi.encodePacked("Error! ", ownerName, " does not have anymore prints available."));
        // return ("Error", remainingPrints, ownerName);
        // return stringToBytes32("Error!");
    }

}