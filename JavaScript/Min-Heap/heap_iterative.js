class MinHeap{
    constructor(){
        this.storage = [];
        this.size = 0;
    }

    getLeftChildIndex(index){
        return 2 * index + 1;
    }

    getRightChildIndex(index){
        return 2 * index + 2;
    }
    // check if this rounds down
    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size;
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size;
    }

    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index){
        return this.storage[this.getLeftChildIndex(index)];
    }

    rightChild(index){
        return this.storage[this.getRightChildIndex(index)];
    }

    parent(index){
        return this.storage[this.getParentIndex(index)];
    }

    isFull(){
        return this.size == this.capacity;
    }
    
    swap(index1,index2){
        let temp = this.storage[index1];
        this.storage[index1] = this.storage[index2];
        this.storage[index2] = temp;
    }

    insert(data){
        this.storage[this.size] = data;
        this.size += 1;
        this.heapifyUp();
    }
    
    heapifyUp(){
         let index = this.size - 1;
         while(this.hasParent(index) && 
                 this.parent(index) > this.storage[index]){
            this.swap(this.getParentIndex(index),index);
            index = this.getParentIndex(index);
         }
    }
    
    removeMin(){
        if(this.size == 0)
            throw new Error("Empty Heap");
        let data = this.storage[0];
        this.storage[0] = this.storage[this.size - 1];
        this.size -= 1;
        this.heapifyDown();
        return data;
    }   

    heapifyDown(){
        let index = 0;
        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index))
                smallerChildIndex = this.getRightChildIndex(index);
            if(this.storage[index] < this.storage[smallerChildIndex])
                break;
            else
                this.swap(index,smallerChildIndex);
            index = smallerChildIndex;
        }
    }     
}