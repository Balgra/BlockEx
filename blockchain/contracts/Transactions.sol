// SPDX-License-Identifier: UNLICENSED
//vanzare cumparare idee pe smart contracts.
pragma solidity ^0.8.0;
//fist class for transactions
contract Transactions{
   uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keywork);

    struct TransferStruct{
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }


    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}