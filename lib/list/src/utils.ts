import Stack from './stack'

export function dec2bin(value:number) {
  const stack = new Stack<number>()    


}

export function isPalindrome(value:string) {
  const stack = new Stack<string>()  

  for(let i = 0; i < value.length; i++) {
    stack.push(value[i])
  }

  console.log(stack.toString())
  


}

export function createDoubleDimArray<T>(rows:number, cols:number, fillValue:T) {
  const arr:T[][] = []

  for(let i = 0; i < rows; i++) arr.push([])
    
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      arr[i][j] = fillValue
    }
  }

  return arr
}
