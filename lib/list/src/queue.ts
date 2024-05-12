export default class Queue<T> {
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

  first() {
    return this.items[0]
  }

  last() {
    return this.items[this.items.length-1]
  }

  isEmpty() {
    return this.front === 0 && this.rear === 0
  }

  isFull() {
    return (this.rear + 1) % this.cap === this.front
  }

  size() {
    return this.items.length
  }

  toString() {
    return `Queue { ${this.items.join(', ')} }`
  }
}
