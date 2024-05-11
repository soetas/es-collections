export class Queue<T> {
  private items:T[] = []
  private front = 0
  private rear = 0

  constructor(private cap:number=Number.MAX_SAFE_INTEGER) {}

  enqueue(item:T) {
    if(this.isFull()) throw new Error()
    this.items[this.rear] = item
    this.rear = (this.rear + 1) % this.cap
  }
  
  dequeue() {
    if(this.isEmpty()) throw new Error('')
    const item = this.items[this.front]
    this.front = (this.front + 1) % this.cap
    return item
  }

  first() {}

  last() {}

  isEmpty() {
    return this.front === 0 && this.rear === 0
  }

  isFull() {
    return (this.rear + 1) % this.cap === this.front
  }

  size() {
    
  }

  toString() {
    
  }
}

export class PriorityQueue<T> {
  private items:[T, number][] = []

  enqueue(item:T, priority:number=Number.MIN_SAFE_INTEGER) {
    const index = this.items.findIndex(([_, _priority])=>_priority < priority)

    if(index === -1) this.items.push([item, priority])
    else this.items.splice(index, 0, [item, priority]) 
  }

  dequeue() {
    return this.items.shift()![0]
  }

  front() {
    return this.items[0][0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  toString() {
    return `PriorityQueue { ${this.items.map(item=>`[${item[0]}, ${item[1]}]`).join(', ')} }`
  }
}

