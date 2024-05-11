import { describe, it, expect } from 'vitest'
import ArrayList from '../arrayList'

const arrayList = new ArrayList<number>()
  
it('test ArrayList::append method', ()=>{
  arrayList.append(34)
  arrayList.append(56)
  arrayList.append(90)

  console.log(arrayList.toString())

})

it('test ArrayList::insert method', ()=>{
  arrayList.insert(1, 77)
  console.log(arrayList.toString())

  arrayList.insert(0, 12)
  console.log(arrayList.toString())

  arrayList.insert(arrayList.size(), 21)
  console.log(arrayList.toString())

})

it('test ArrayList::append method', ()=>{
 

})
