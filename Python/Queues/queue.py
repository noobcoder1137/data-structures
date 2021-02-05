class Queue:
    def __init__(self,capacity):
        self.storage = [None] * capacity
        self.head = 0
        self.tail = 0
        self.size = 0
        self.capacity = capacity
    
    def isFull(self):
        return self.capacity == self.tail

    def enqueue(self,data):
        if(self.isFull()):
            raise Exception("Queue is Full")
        self.storage[self.tail] = data
        self.tail += 1
        self.size += 1

    def dequeue(self):
        if(self.size == 0):
            return None
        data = self.storage[self.head]
        self.head += 1
        if(self.head == self.tail):
            self.head = 0
            self.tail = 0
        self.size -= 1
        return data