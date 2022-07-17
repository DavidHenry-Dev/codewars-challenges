function reverseLetter(str) {
    const alpbt = 'abcdefghijklmnopqrstuvwxyz'.split('') 
    const strArr = str.split('').reverse('')  
    
    return strArr.map ( v => {return alpbt.includes(v) ? v : ''} ).join('')
      
    }