class BinarySearchTree{ 
    constructor(){ 
        this.root = null; 
    } 

    inorder(){
        if(this.root)
            this.root.inorder(this.root);
    }
    
    preorder(){
        if(this.root)
            this.root.preorder(this.root);
    }

    postorder(){
        if(this.root)
            this.root.postorder(this.root);
    }


    find(data){
        if(this.root)
            return this.root.find(data);
        return false;
    }

    insert(data){
        if(this.root)
            this.root.insert(data);
        else
            this.root = new Node(data);
    }

    delete(data){
        if(this.root)
            this.root = this.root.delete(data);
    }

    findHeight(){
        if(this.root)
            return this.root.findHeight(this.root);
        return -1;
    }

} 

class Node { 
    constructor(data){ 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 

    findHeight(currentNode){
        if(currentNode == null)
            return -1;
        let leftHeight = this.findHeight(currentNode.left);
        let rightHeight = this.findHeight(currentNode.right);
        return Math.max(leftHeight,rightHeight) + 1;
    }


    find(data){
        if(this.data == data)
            return true;
        else if(data < this.data && this.left != null)
            return this.left.find(data);
        else if(data > this.data && this.right != null)
            return this.right.find(data);
        return false;
    }

    inorder(currentNode){
        if(currentNode){
            this.inorder(currentNode.left);
            console.log(currentNode.data);
            this.inorder(currentNode.right);
        }
    }

    preorder(currentNode){
        if(currentNode){
            console.log(currentNode.data);
            this.preorder(currentNode.left);
            this.preorder(currentNode.right);
        }
    }

    postorder(currentNode){
        if(currentNode){
            this.postorder(currentNode.left);
            this.postorder(currentNode.right);
            console.log(currentNode.data);
        }
    }

    

    insert(data){
        if(this.data == data)
            throw new Error("Data already exist within tree");
        else if(this.data > data){
            if(this.left)
                this.left.insert(data);
            else
                this.left = new Node(data);
        }
        else{
            if(this.right)
                this.right.insert(data);
            else
                this.right = new Node(data);
        }
    }

    // recursive version
    // findMin(){
    //     if(this.left)
    //         return this.left.findMin();
    //     else
    //         return this.data;
    // }

    findMin(){
        let current = this;
        while(current.left)
            current = current.left;
        return current.data;
    }



    delete(data){
        if(data < this.data && this.left)
            this.left = this.left.delete(data);
        else if (data > this.data && this.right)
            this.right = this.right.delete(data);
        else{
            if(this.data == data){
                if(this.right && this.left){
                    let minVal = this.right.findMin();
                    this.data = minVal;
                    this.right = this.right.delete(minVal);
                }
                else if(this.left)
                    return this.left;
                else if(this.right)
                    return this.right;
                else
                    return null;
            } 
        }
        return this;
    }
} 

