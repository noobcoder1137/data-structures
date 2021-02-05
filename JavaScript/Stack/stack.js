class Stack{
    constructor(){
        this.storage = [];
        this.top = -1;
    }

    push(data){
        this.top++;
        this.storage[this.top] = data;
    }

    pop(){
        if(this.top === -1)
            return null;
        else{
            let data = this.storage[this.top];
            this.top--;
            return data;
        }
    }
}