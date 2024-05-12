import { createDoubleDimArray } from './utils'

export default class SparseArray<T> {
  private items:[number, number, number|T][] = [[0, 0, 0]]

  constructor()
  constructor(iter:Iterable<Iterable<T>>)
  constructor(iter?:Iterable<Iterable<T>>) {
    if(!iter) return 
    
    let rows = 0, cols = 0, total = 0

    for(const values of iter) {
      cols = 0 
      rows++
      for(const val of values) {
        cols++
        if(val !== 0) {
          total++
          this.items.push([rows-1, cols-1, val])
        }
      }
    }

    this.items[0][0] = rows
    this.items[0][1] = cols
    this.items[0][2] = total
  }

  get value() {
    return this.items
  }

  get raw() {
    const rows = this.items[0][0]
    const cols = this.items[0][1]

    const array = createDoubleDimArray(rows, cols, 0)

    for(const [ x, y, value ] of this.items.slice(1)) {
      array[x][y] = value as number
    }

    return array
  }
}
