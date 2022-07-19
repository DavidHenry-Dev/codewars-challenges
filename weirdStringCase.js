function toWeirdCase(string){
    const strArr = string
                   .split(' ')  // splits string into arr of seperate words
                   .map( (v)=> [...v]  // converts each word into a separate array of single letters
                   .map( ( val, ind ) => { return ind % 2 ? val.toLowerCase() : val.toUpperCase()}) // capitalize or lowercase letters based on their index
                   .join('')) // joins the single letter arrays back into an array of words
                   .join(' ') // joins the array of words back into a single string
    return strArr
  }