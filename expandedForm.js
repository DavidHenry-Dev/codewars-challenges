function expandedForm(num) {
    const numStr = num.toString()
    return numStr
      .split('')
      .map( (n, ind) => {
       if( n !== '0' ){
         return n * Math.pow(10, (numStr.length - 1  - ind))
       }
     })
      .filter( n => { return n !== undefined } ).join(' + ')
   }