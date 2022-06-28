var uniqueInOrder=function(iterable){
    let toArr = iterable instanceof Array ? iterable : iterable.split('');
    let orderUnq =  toArr.filter((v,i) => {
       return toArr[i] != toArr[i + 1]
    })
    return orderUnq
  }