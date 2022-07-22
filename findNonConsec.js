function firstNonConsecutive (arr) {
    for( i = 0; i < arr.length - 1; i++){
      const nextNum = arr[i + 1]
      if(nextNum - arr[i] !== 1){
         return nextNum;
       }
     }
     return null
   }