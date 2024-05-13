import { describe, it, expect } from 'vitest'
import ArrayList from '../arrayList'

const arrayList = new ArrayList<number>()
  
it('ArrayList::append method', ()=>{
  arrayList.append(34)
  arrayList.append(56)
  arrayList.append(90)

  expect(arrayList.size()).toBe(3)
  
})

it('ArrayList::insert method', ()=>{
  arrayList.insert(1, 77)
  
  expect(arrayList.size()).toBe(4)

  arrayList.insert(0, 82)
  
  expect(arrayList.size()).toBe(5)

  arrayList.insert(3, 22)
  
  expect(arrayList.size()).toBe(6)

  arrayList.insert(arrayList.size()-1, 12)

  expect(arrayList.size()).toBe(7)

})

it('ArrayList::removeAt method', ()=>{  
  const firstValue =  arrayList.removeAt(0)

  expect(firstValue).toBe(82)

})

it('ArrayList::reverse method', ()=>{
  arrayList.reverse()

})

it('ArrayList::sort method', ()=>{
  arrayList.sort()

})
