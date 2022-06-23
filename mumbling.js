

function accum(s) {
    let mumbleStr = ""
    for( i=0; i < s.length; i++){
      mumbleStr += 
        s[i].toUpperCase() 
        + s[i].slice(-1).toLowerCase().repeat(i) 
        + '-'
    }
     return mumbleStr.slice(0,-1)
   }