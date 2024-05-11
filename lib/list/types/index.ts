export interface List<T> {
  init():void
  get(index:number):T
  set(index:number, item:T):void
  indexOf(item:T):number
  insert(index:number, item:T):void
  remove(item:T):void
  removeAt(index:number):T
  clone():List<T>
  clear():void
  isEmpty():boolean
  size():number
  toString():string
}

export type Node<T> = {
  data: T
  next: Node<T>|null
  prev?: Node<T>|null
}
