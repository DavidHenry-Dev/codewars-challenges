function sumDigits(number) {
    let sum = 0
    const numStr = Math.abs(number).toString()
    for( let i=0; i < numStr.length; i++) {
    sum += +numStr[i]
      }
    return sum
  }