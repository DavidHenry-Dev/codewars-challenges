function getMiddle(s){
    const strArr = s.split('')
     return strArr.length % 2 == 0 ? 
       (strArr[(strArr.length/2) - 1] + strArr[strArr.length/2]) : strArr[(strArr.length - 1) / 2]
     }