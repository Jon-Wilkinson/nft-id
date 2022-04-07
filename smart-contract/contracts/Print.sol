// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

contract Print {

    address nftOwner; //= 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    bytes32 ownerName;
    int remainingPrints;

    modifier onlyOwner() {
        require(msg.sender == nftOwner, "NOT OWNER");
        _;
    }

    constructor(bytes32 ownerName_) {
        nftOwner = msg.sender;
        ownerName = ownerName_;
        remainingPrints = 1000;
    }

    function printPage () public onlyOwner() returns (string memory) {
        if (remainingPrints > 0) {
            remainingPrints = remainingPrints - 1;
            return string(abi.encodePacked("Print successful, ", ownerName, " has ", remainingPrints, " left."));
        }
        return string(abi.encodePacked("Error! ", ownerName, " does not have anymore prints available."));
    }

}