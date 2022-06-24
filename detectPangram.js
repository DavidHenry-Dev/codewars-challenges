function isPangram(string){
    const str = string.toLowerCase()
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
       return alphabet.every( s => str.includes(s)) ? true : false
  }