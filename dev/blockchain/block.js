const sha256 = require('sha256');

class Block {
    constructor() {
        this.index = 0;
        this.timestamp = Date.now();
        this.transactions = [];
        this.nonce = 0;
        this.hash = '0';
        this.previousHash = '0';
        this.previousBlock = null; //test
    }
    setIndex(index) {
        this.index = index+1;
        return this;
    }
    setTransactions(transactions) {
        this.transactions = transactions;
        return this;
    }
    setNonce(nonce) {
        this.nonce = nonce;
        return this;
    }
    setPreviousBlock(Block){
        this.previousBlock = Block;
        return this;
    }
    setPreviousHash() {
        if(this.previousBlock !== null){
            console.log("entry")
            this.previousHash = this.previousBlock.hash;
        }
        return this;
    }
    setHash() {
        this.hash = this.generateHashCode();
        return this;
    }
    generateHashCode() {
        console.log(this.previousHash)
        const dataAsString = this.previousHash + this.nonce.toString() + JSON.stringify(this.transactions);
        return sha256(dataAsString);
        //return "hashesito";
    }
    build() {
        return {
            index: this.index,
            timestamp: this.timestamp,
            transactions: this.transactions,
            nonce: this.nonce,
            previousHash: this.previousHash,
            hash: this.hash,
        };
    }
}

module.exports = Block;
