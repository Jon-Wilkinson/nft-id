// SPDX-License-Identifier: MIT

pragma solidity >=0.8.9 <0.9.0;

contract Print {

    address nftOwner; //= 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    string ownerName;
    int remainingPrints;

    modifier onlyOwner() {
        require(msg.sender == nftOwner, "NOT OWNER");
        _;
    }

    constructor(string memory ownerName_) {
        nftOwner = msg.sender;
        ownerName = ownerName_;
        remainingPrints = 1000;
    }

    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
        return 0x0;
    }

    assembly {
        result := mload(add(source, 32))
    }
}

    function printPage () public view onlyOwner() returns (bytes32) {
        if (remainingPrints > 0) {
            // remainingPrints = remainingPrints - 1;
            // return string(abi.encodePacked("Print successful, ", ownerName, " has ", remainingPrints, " left."));
            return stringToBytes32("Print Successful");
        }
        // return string(abi.encodePacked("Error! ", ownerName, " does not have anymore prints available."));
        return stringToBytes32("Error!");
    }

}