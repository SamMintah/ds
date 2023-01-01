export class LinkedList {
  constructor() {
    this.head = null; // First element of the list
    this.tail = null; //last element of the list
  }

  //method to add element through the tail
  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  //method to add element through the head
  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }


  //insert after method
  insertAfter(value , afterValue) {
    const existingNode= this.find(afterValue);

    if(existingNode){
        const newNode = { value: value, next: existingNode.next};
        existingNode.next = newNode ; 
    }
  }

  //method to find element
  find(value){
    if (!this.head) {
        return null;
      }

      let curNode = this.head;

    while(curNode){
        if(curNode.value === value){
            return curNode;
        }
        curNode = curNode.next;
    }
    return null;
  }

  //method to delete element
  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;

    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  //delete head method

  deleteHead (){
    if (!this.head) {
      return null;
    }
    const deletedItem = this.head;

    if(this.head.next){
      this.head = this.head.next;
    }else{
      this.head = null;
      this.tail = null;
    }
    return deletedItem;
  }

  toArray() {
    const element = [];

    let curNode = this.head;
    while (curNode) {
      element.push(curNode);
      curNode = curNode.next;
    }
    return element;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append("sam");
LinkedList1.delete("sam");
LinkedList1.append("grandpa");
LinkedList1.append(244871370);
LinkedList1.prepend("second");
LinkedList1.prepend("first here");
// LinkedList1.prepend("first here");

// console.log(LinkedList1.toArray());

// const grandpa = [0,244871370] ;
LinkedList1.find("sam");
LinkedList1.find("grandpa");
// LinkedList1.delete(244871370);

// console.log(LinkedList1.toArray());

LinkedList1.insertAfter(100,"grandpa")
console.log(LinkedList1.toArray());
