function pipeFix(numbers){
    let pipeArr = []
    const min = Math.min(...numbers)
    const max = (Math.max(...numbers))
    
    for(let i = min; i <= max; i++){
      pipeArr.push(i)
    }
   return pipeArr
  }