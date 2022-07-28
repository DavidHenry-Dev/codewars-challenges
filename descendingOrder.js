function descendingOrder(n){
    const descend = n.toString().split('').sort((a,b) => {
     return +b - +a
    }).join('')
    return +descend
   }