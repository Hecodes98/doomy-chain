//Implement the linked List data structure for mannage the chain of the blockchain

/*
    -We need only a header and tail pointer
*/

function Chain(){
    this.head = null;
    this.tail = null;
    this.size = 0;
}

Chain.prototype.add = function(Block) {
    if(this.head === null){
        this.head = this.tail = Block;
    }else{
        let current = this.tail;
        current.next = Block;
        this.tail = current.next;
    }
    this.size++;
}

module.exports = Chain;