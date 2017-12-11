'use strict';

class ListNode{
  //new LinkedList()...
  constructor(value){
    this.value = value;
    this.next = null;
    this.previous = null;
  }

  append(node){// the node you are appending to is this (EG result)

    if(!(node instanceof ListNode))
      throw new TypeError('<node> should be an instance of ListNode');
    
    // vinicio - we know we are at the last element if there is no next
    if(!this.next){
      this.next = node;
      node.previous = this;
    }
    else{
      this.next.append(node);// RECURSIVE!
    }
    return this;
  }
  //TODO: Add a method to remove a node and properly keep the list linked
  remove(node){
    // console.log(this);
    // console.log(node);
    if (!(node instanceof ListNode))
      throw new TypeError('<node> should be an instance of ListNode');
      
    if (this.next === node) {
      // if(!this.next.next) return this;
      //vinicio - here we know we need to remove the NEXT node
      this.next.next.previous = this;
      this.next = this.next.next;
    } else {
      this.next.remove(node);
    }
    if(!this.next){
      throw new TypeError('<node> should be and instance of linked list, cannot remove a single node from no list');
    }
    return this;

  }

//TODO: Add a 3RD method of choice (refer to array methods)
  

}

module.exports = ListNode;