const sequenceSum = (begin, end, step) => {
    let seqSum = 0
    while(begin <= end){
      seqSum += begin
      begin += step
    }
      return seqSum
    }