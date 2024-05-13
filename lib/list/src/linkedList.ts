import type { Node } from '../types'

export default class LinkedList<T> {
  private head: Omit<Node<T>, 'data'> = { next:null } 
  private length: number = 0

  private isIllegal(index:number) {
    return index < 0 || index >= this.length
  }

  constructor()
  constructor(iterable:Iterable<T>)
  constructor(length:number, fillValue:T)
  constructor(lengthOrIterable?:number|Iterable<T>, fillValue?:T) {
    if(fillValue !== undefined) {
      for(let i = 0; i < (lengthOrIterable as number); i++) {
        this.head.next = { data:fillValue, next:this.head.next }
        this.length++
      }
    } else if(lengthOrIterable) {
      let temp = this.head
      for(const item of lengthOrIterable as Iterable<T>) {
        const node = { data:item, next:null }
        temp.next = node
        temp = node
        this.length++
      }
    }
  }

  append(item:T) {
    if(!this.head.next) this.head.next = { data:item, next:null }
    else {
      let node = this.head.next

      while(node.next) node = node.next
      
      node.next = { data:item, next:null}
    }
    this.length++
  }

  insert(index:number, item:T) {
    if(this.isIllegal(index)) throw ''

    if(index === 0) {
      const next = this.head.next
      this.head.next = { data:item, next:next }
    } else {
      let i = 0, node = this.head

      while(node.next) {
        if(i++ === index-1) {
          const next = node.next.next
          node.next.next = { data:item, next}
          break
        } 
        node = node.next
      }
    }

    this.length++
  }
  
  remove(item:T) {
    if(this.indexOf(item) === -1) {}

    let node = this.head

    while(node.next) {
      if(node.next.data === item) {
        node.next = node.next.next
        break
      }
      node = node.next
    }

    this.length--
  }

  removeAt(index:number) {
    const item = this.get(index)
    item && this.remove(item)
  }

  set(index:number, item:T) {
    let i = 0, node = this.head

    while(node.next) {
      if(i++ === index) node.next.data = item
      node = node.next
    }
  }

  get(index:number) {
    if(this.length === 0 || index < 0 || index >= this.length) {}

    let i = 0, node = this.head

    while(node.next) {
      if(i++ === index) return node.next.data
      node = node.next
    }
  }

  indexOf(item:T) {
    if(this.head.next === null) return -1
    let index = 0, node = this.head

    while(node.next) {
      if(node.next.data === item) return index
      node = node.next
      index++
    }

    return index >= this.length ? -1 : index
  }
 
  reverse() {
    let prev:Node<T>|null = null
    let next:Node<T>|null = null
    let current = this.head.next
    
    while(current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head.next = prev 
  }

  traverse() {}

  clear() {
    let temp, node = this.head.next

    while(node) {
      temp = node
      temp = null
      node = node.next
      this.length --
    }
   
    this.head.next = null
  }

  isEmpty() {
    return this.head.next === null
  }

  size() {
    return this.length
  }

  sort() {
    const len = this.size()
    
    for(let i = 0,current=this.head.next; i < len-1; i++, current=current!.next) {
      for(let j = i+1, next=current?.next; j < len; j++, next=next?.next) {
        if(current!.data > next!.data) {
          const temp = current!.data
          current!.data = next!.data
          next!.data = temp
        }
      }
    }
  }

  toString() {
    const items:T[] = []

    let node = this.head

    while(node.next) {
      items.push(node.next.data)
      node = node.next
    }

    return `LinkedList { ${items.join(', ')} }`
  }
}
