import { describe, it, expect } from 'vitest'
import HashMap from '../hashMap'

describe('', ()=>{
  it('', ()=>{
    const hashMap = new HashMap()

    hashMap.set('Stanley Knight', 'ce@facni.re')
    hashMap.set('Nettie Neal', 'vu@mid.jm')
    hashMap.set('Catherine Pierce', 'cum@varoro.at')
    
    console.log(hashMap.toString())
    console.log(hashMap.has('May Gray'))
    console.log(hashMap.has('Nettie Neal'))
    console.log(hashMap.get('Stanley Knight'))
    

  })

})