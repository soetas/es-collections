import { describe, it, expect } from 'vitest'
import SparseArray from '../sparseArray'
import { createDoubleDimArray } from '../utils'

const array = createDoubleDimArray(6, 7, 0)

array[0][3] = 22
array[0][6] = 15
array[1][1] = 11
array[1][5] = 17
array[2][3] = -7

const sparseArray = new SparseArray<number>(array)

it('', ()=>{
  


})

