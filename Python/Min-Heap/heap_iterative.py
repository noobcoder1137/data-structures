class MinHeap:
    def __init__(self,capacity):
        self.storage = [0] * capacity
        self.capacity = capacity
        self.size = 0
    
    def getLeftChildIndex(self,index):
        return 2 * index + 1

    def getRightChildIndex(self,index):
        return 2 * index + 2

    def getParentIndex(self,index):
        return (index - 1) // 2

    def hasLeftChild(self,index):
        return self.getLeftChildIndex(index) < self.size

    def hasRightChild(self,index):
        return self.getRightChildIndex(index) < self.size

    def hasParent(self,index):
        return self.getParentIndex(index) >= 0
    
    def leftChild(self,index):
        return self.storage[self.getLeftChildIndex(index)]
    
    def rightChild(self,index):
        return self.storage[self.getRightChildIndex(index)]
    
    def parent(self,index):
        return self.storage[self.getParentIndex(index)]
    
    def isFull(self):
        return self.size == self.capacity 

    def swap(self,index1,index2):
        temp = self.storage[index1]
        self.storage[index1] = self.storage[index2]
        self.storage[index2] = temp
    
    def removeMin(self):
        if(self.size == 0):
            raise Exception("Empty Heap")
        data = self.storage[0]
        self.storage[0] = self.storage[self.size - 1]
        self.size -= 1
        self.heapifyDown()
        return data
    
    def heapifyDown(self):
        index = 0
        while(self.hasLeftChild(index)):
            smallerChildIndex = self.getLeftChildIndex(index)
            if(self.hasRightChild(index) and self.rightChild(index) < self.leftChild(index)):
                smallerChildIndex = self.getRightChildIndex(index)
            if(self.storage[index] < self.storage[smallerChildIndex]):
                break
            else:
                self.swap(index,smallerChildIndex)
            index = smallerChildIndex
    
    def insert(self,data):
        if(self.isFull()):
            raise Exception("Heap is Full")
        self.storage[self.size] = data 
        self.size += 1
        self.heapifyUp()

    def heapifyUp(self):
        index = self.size - 1
        while(self.hasParent(index) and 
              self.parent(index) > self.storage[index]):
            self.swap(self.getParentIndex(index),index)
            index = self.getParentIndex(index)
