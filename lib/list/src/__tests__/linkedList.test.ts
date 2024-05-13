import { it, expect } from 'vitest'
import LinkedList from '../linkedList'

const linkedList = new LinkedList<number>()

it('LinkedList::append method', ()=>{
  linkedList.append(78)
  linkedList.append(51)
  linkedList.append(90)

  expect(linkedList.size()).toBe(3)

})

it('LinkedList::insert method', ()=>{
  linkedList.insert(1, 81)
  
  expect(linkedList.size()).toBe(4)

  linkedList.insert(0, 100)
  
  expect(linkedList.size()).toBe(5)

  linkedList.insert(linkedList.size()-1, 40)

  expect(linkedList.size()).toBe(6)

})

it('LinkedList::removeAt method', ()=>{
  linkedList.removeAt(0)

  expect(linkedList.size()).toBe(5)

  linkedList.removeAt(linkedList.size()-1)

  expect(linkedList.size()).toBe(4)

  linkedList.removeAt(2)

  expect(linkedList.size()).toBe(3)
})

it('LinkedList::sort method', ()=>{
  linkedList.sort()


})
