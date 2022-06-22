function replace(s){
    let noVowels = ""
    let str = s.split('')
    const vowels = "aeiouAEIOU"
    
     str.forEach(s => {
        vowels.includes(s) ? noVowels += '!' : noVowels += s
        })
      return noVowels
    }