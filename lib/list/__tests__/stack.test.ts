import { describe, it, expect } from 'vitest'
import Stack from '../stack'
import { dec2bin } from './utils'

describe('', ()=>{
  it.skip('', ()=>{
    const stack = new Stack<number>()

    stack.push(67)
    stack.push(56)
    stack.push(34)

    expect(dec2bin(100)).toBe('0b1100100')
    expect(dec2bin(8926735618367191)).toBe('0b11111101101101101000110011001100010010101111011010111')
    expect(dec2bin(49891726152)).toBe('0b101110011101110001110101001101001000')

  })
})
