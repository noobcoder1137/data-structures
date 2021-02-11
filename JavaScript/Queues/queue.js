class Queue{
    constructor(){
        this.storage = [];
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    enqueue(data){
        this.storage[this.tail] = data;
        this.tail++;
        this.size++;
    }

    dequeue(){
        if(this.size === 0)
            return null;
        let data = this.storage[this.head];
        this.head++;
        if(this.head === this.tail){
            this.head = 0;
            this.tail = 0;
        }
        this.size--;
        return data;
    }
}