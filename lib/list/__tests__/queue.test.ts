import { describe, it, expect } from 'vitest'
import { Queue, PriorityQueue } from '../queue'

describe('', ()=>{
  it('', ()=>{
    const queue = new Queue<number>()

    queue.enqueue(61)
    queue.enqueue(56)
    queue.enqueue(90)

   

  })
})


describe('', ()=>{
  it('', ()=>{
    const queue = new PriorityQueue<number>()

    queue.enqueue(61)
    queue.enqueue(56, 6)
    queue.enqueue(16, 9)
    queue.enqueue(100, 0)
    queue.enqueue(90, 10)
    queue.enqueue(56)
    queue.enqueue(33, 9)
    queue.enqueue(70, 3)
    queue.enqueue(99)

    expect(queue.size()).toBe(9)

  })

})