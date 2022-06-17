function positiveSum(arr) {
    const sumPosNum = arr.reduce((sum, num) => {
      if( num > 0 ) sum += num
      return sum 
    }, 0)
    return sumPosNum
  }