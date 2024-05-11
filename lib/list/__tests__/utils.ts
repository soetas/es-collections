import Stack from '../stack'

export function divMod(x:number, y:number) {
  return [Math.floor(x/y), x%y]
}

export function dec2bin(value:number) {
  const stack = new Stack<number>()
  let div = value, mod
  let result = '0b'  

  do {
    [ div, mod ] = divMod(div, 2)
    stack.push(mod)
  } while(div)
  
  while(!stack.isEmpty()) result += stack.pop()

  return result
}

