const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
/*
bitcoin.createNewBlock(2389, 'IASD897ASD', '9878DASND');
bitcoin.createNewTransaction(30, 'sender', 'recipient')
bitcoin.createNewBlock(123123, '09HD8128', '97YD881N');
*/
bitcoin.createNewTransaction(30, 'sender', 'recipient')
bitcoin.createNewBlockTest(2389);
bitcoin.createNewBlockTest(2390);

console.log(bitcoin.chain.tail)