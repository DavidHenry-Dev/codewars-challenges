function minValue(values){
    return +values.sort().filter( (v, i) => values.indexOf(v) === i).join('')
    
  }