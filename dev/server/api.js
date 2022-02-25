const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Blockchain = require('../blockchain/blockchain');

const bitcoin = new Blockchain();   

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }))

app.get('/blockchain', function(req,res){
    bitcoin.createNewTransaction(30, 'sender', 'recipient')
    bitcoin.createNewBlockTest(2389);
    res.send(bitcoin);
});

app.post('/transaction', function(req,res){
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ note : `Transaction will be added in block ${blockIndex}` });
});

app.get('/mine', function(req, res){

})

app.listen(3000, function(){
    console.log('listening on port 3000...');
});