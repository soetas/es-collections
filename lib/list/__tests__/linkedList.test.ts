import { describe, it, expect } from 'vitest'
import { LinkedList, DoublyLinkedList, CircularLinkedList, StaticLinkedList } from '../linkedList'

describe('', ()=>{
  it('', ()=>{
    const linkedList = new LinkedList<number>()

    linkedList.append(67)
    linkedList.append(56)
    linkedList.append(12)
    linkedList.append(56)
    linkedList.append(77)
    linkedList.append(12)

    linkedList.set(0, 99)
    linkedList.set(3, 100)
    linkedList.set(5, 82)
    
    linkedList.insert(0, 12)
    linkedList.insert(6, 67)
    linkedList.insert(3, 29)

    linkedList.remove(12)
    linkedList.remove(82)
    linkedList.remove(99)
    linkedList.remove(100)

    linkedList.removeAt(0)
    linkedList.removeAt(3)

    expect(linkedList.size()).toBe(3)

    const linkedList2 = new LinkedList(['apple', 'melon', 'banana'])

    console.log(linkedList2.toString())

    linkedList2.reverse()

    console.log(linkedList2.toString())

  })
})

describe('', ()=>{
  it('', ()=>{
    const doublyLinkedList = new DoublyLinkedList<number>()

    doublyLinkedList.append(56)
    doublyLinkedList.append(10)
    doublyLinkedList.append(34)
    doublyLinkedList.append(89)
    doublyLinkedList.append(70)

    doublyLinkedList.insert(2, 12)
    doublyLinkedList.insert(0, 99)
    doublyLinkedList.insert(6, 66)

    doublyLinkedList.remove(99)
    doublyLinkedList.remove(70)
    doublyLinkedList.remove(12)

    expect(doublyLinkedList.size()).toBe(5)

    const d2 = new DoublyLinkedList([78, 10, 28, 89, 69])

    console.log(d2.toString(true))
   
  })

})

describe('', ()=>{
  it('', ()=>{
    const staticLinkedList = new StaticLinkedList()





  })

})

describe('', ()=>{
  it('', ()=>{
    const circularLinkedList = new CircularLinkedList([78, 10, 32])


    

  })
})