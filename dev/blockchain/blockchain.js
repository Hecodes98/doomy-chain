const Block = require('./block')
const Chain = require('./chain')
const sha256 = require('sha256');
//Here we going to build our entire blockchain data structure

function Blockchain(){
    this.chain = [];//new Chain(); // All of the block that we create and that we mine will be stored in this array as a chain
    this.pendingTransactions = []; // All the transaction's that are created before they are placed into a block and mined
    this.createNewBlock(100, '0', '0'); // Genesis Block
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash){
    const NEWBLOCK = {
        index: this.chain.length+1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };
    this.pendingTransactions = [];
    this.chain.push(NEWBLOCK);

    return NEWBLOCK;
}

Blockchain.prototype.createNewBlockTest = function(){
    const NEWBLOCK = new Block().setIndex(this.chain.size)
                                .setNonce(2390)
                                .setTransactions(this.pendingTransactions)
                                .setPreviousBlock(this.chain.tail)
                                .setPreviousHash('holasoledad')
                                .setHash()
                                .build();
    this.pendingTransactions = [];
    this.chain.add(NEWBLOCK);

    return NEWBLOCK;
}

Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length -1]
}
/*
Blockchain.prototype.getLastBlockTest = function(){
    return this.chain.tail
}
*/
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
        amount,
        sender,
        recipient
    }
    this.pendingTransactions.push(newTransaction); 

    return this.getLastBlock()['index'] + 1;
}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

Blockchain.prototype.proofOfWork = function(previousBlockhash, currentBlockData){ 
    // ==> repeteadly hash block until it finds correct hash  => '0000XXXXXXXXXXXXXXXXXXXX'
    let nonce = 0;
    let hash = this.hashBlock(previousBlockhash, currentBlockData, nonce);
    while(hash.substring(0,4) !== '0000'){
        nonce+=1;
        hash = this.hashBlock(previousBlockhash, currentBlockData, nonce);
    }
    console.log(hash);
    return nonce;
}

module.exports = Blockchain;