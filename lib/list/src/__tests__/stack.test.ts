import { describe, it, expect } from 'vitest'
import Stack from '../stack'

const stack = new Stack<number>()

it('Stack::push', ()=>{
  stack.push(67)
  stack.push(90)
  stack.push(55)

  
})
