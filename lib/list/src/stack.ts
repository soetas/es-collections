import type { Node } from '../types'

export default class Stack<T> {
  private top: Omit<Node<T>, 'data'> = { next:null }
  private length = 0

  constructor()
  constructor(iter:Iterable<T>)
  constructor(length:number, fillValue:T) 
  constructor(iterOrLength?:number|Iterable<T>, fillValue?:T) {}

  push(item:T) {
    this.top.next = { data:item, next:this.top.next }
    this.length++
  }

  pop() {
    if(!this.top.next) return
    this.top.next = this.top.next.next
    this.length--
  }

  peek() {
    return this.top.next?.data
  }

  isEmpty() {
    return this.top.next === null
  }

  size() {
    return this.length
  }

  toString() {
    const items:T[] = [ ]
    let node = this.top.next

    while(node) {
      items.unshift(node.data)
      node = node.next
    }

    return `Stack { ${items.join(', ')} }`
  }
}

