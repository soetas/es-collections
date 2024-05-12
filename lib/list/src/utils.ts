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
