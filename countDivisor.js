function getDivisorsCnt(n){
    let recurseN = n
    let divisorCount = 0
      while( recurseN > 0){
       if(n % recurseN === 0){
         divisorCount++
       }
        recurseN--
      }
        return divisorCount
  }