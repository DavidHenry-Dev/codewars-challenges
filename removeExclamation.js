function removeExclamationMarks(s) {
    return s.split('').filter( el => el.replace('!', '')).join('')
  }
  
  // Notes: Pretty easy one. I knew I could use a for loop and the string replace method,
  // but I wanted to practice chaining array methods. 
       