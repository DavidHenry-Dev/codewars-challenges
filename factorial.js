function factorial(n){
    if( n < 0 || n > 12 ) throw new RangeError('n is not bewtween 0 and 12')
    return n > 1 ? n * factorial(n - 1) : 1
  }