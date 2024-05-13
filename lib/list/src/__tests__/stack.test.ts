import { describe, it, expect } from 'vitest'
import Stack from '../stack'

const stack = new Stack<number>()

it('Stack::push method', ()=>{
  stack.push(67)
  stack.push(90)
  stack.push(55)

  console.log(stack.toString())
  
})

it('Stack::pop method', ()=>{
  stack.pop()
  
  console.log(stack.toString())

})

it('Stack::clear method', ()=>{
  
})
