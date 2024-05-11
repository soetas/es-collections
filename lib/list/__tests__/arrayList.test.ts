import { describe, it, expect } from 'vitest'
import ArrayList from '../arrayList'

describe('', ()=>{
  it('', ()=>{
    const arrayList = new ArrayList<number>()

    arrayList.append(61)
    arrayList.append(12)
    arrayList.append(90)
    arrayList.append(55)
    arrayList.append(18)

    arrayList.insert(0, 99)
    arrayList.insert(5, 10)
    arrayList.insert(3, 100)
    
    arrayList.remove(99)
    arrayList.remove(18)

    arrayList.reverse()
    arrayList.sort()

  

    

  })
})

