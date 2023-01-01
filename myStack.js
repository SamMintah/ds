class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value){
       const newNode = new Node(value) 
       if(this.length === 0) {
        this.top = newNode
       } else {
        newNode.next = this.top
        this.top = newNode
       }
       this.length++
       return this
    }

    pop(){
        if(this.length === 0) return undefined
        let temp = this.top
        this.top = this.top.next
        temp.next = null

        this.length--
        return temp
    }
}


let myStack = new Stack(11)
myStack.push(23)
myStack.push(22)
myStack.push(6)
console.log(myStack.pop())
console.log(myStack.pop())