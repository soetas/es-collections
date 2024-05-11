import type { Node } from '../types'

export default class Stack<T> {
  private top: Omit<Node<T>, 'data'> = { next:null }
  private bottom:Node<T>|null = null

  constructor()
  constructor(iter:Iterable<T>)
  constructor(length:number, fillValue:T) 
  constructor(iterOrLength?:number|Iterable<T>, fillValue?:T) {}

  push(item:T) {
    this.top.next = { data:item, next:this.top.next }
  }

  pop() {
    if(!this.top.next) return
    this.top.next = this.top.next.next
  }

  peek() {
    return this.top.next?.data
  }

  isEmpty() {
    return this.top.next === null
  }

  size() {
    
  }

  toString() {
    
  }
}

