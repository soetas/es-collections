import { describe, it, expect } from 'vitest'
import Queue from '../queue'

const queue = new Queue<number>()

it('', ()=>{
  queue.enqueue(67)
  queue.enqueue(90)
  queue.enqueue(41)


})
