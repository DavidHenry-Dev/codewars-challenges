function doubleChar(str) {
    //  1st solution
      
    //  let double = ''
    //  for(i=0; i < str.length; i++) {
    //    double += str[i].repeat(2)
    //  } 
    //  return double 
    
    //  2nd solution
       return str.split('').map( s => s.repeat(2)).join('')
      
    }