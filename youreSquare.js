var isSquare = function(n){
    const numSqrd = Math.sqrt(n)
    if( n % numSqrd === 0 || n === 0) return true
    else return false
  }