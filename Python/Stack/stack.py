class Stack:
    def __init__(self,size):
        self.storage = [None] * size
        self.top = -1

    def push(self,data):
        if(self.isFull()):
            raise Exception("Stack is Full")
        else:
            self.top += 1
            self.storage[self.top] = data
    
    def pop(self):
        if(self.top == -1):
            return None
        else:
            data = self.storage[self.top]
            self.top -= 1
            return data

    def getSize(self):
        return self.top + 1
    
    def peek(self):
        return self.storage[self.top]
    
    def isFull(self):
        return self.getSize() == len(self.storage)

