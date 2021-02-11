class CircularQueue{
    constructor(capacity){
        this.storage = [];
        this.head = 0;
        this.tail = 0;
        this.size = 0;
        this.capacity = capacity;
    }

    isFull(){
        return this.capacity === this.size;
    }

    enqueue(data){
        if(this.isFull())
            throw new Error("Queue is full");
        this.storage[this.tail] = data;
        this.tail = (this.tail + 1) % this.capacity;
        this.size++;
    }

    dequeue(){
        if(this.size === 0)
            return null;
        let data = this.storage[this.head];
        this.head = (this.head + 1) % this.capacity;
        this.size--;
        return data;
    }
}