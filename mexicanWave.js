function wave(str){
    let strArr = []
    for(let i = 0; i < str.length; i++) {
      if(str[i] === " ") continue 
      else strArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)) 
     }
    return strArr
  } 