function shortcut (string) {
    const vowels = 'aeiou'.split('')
    const strArr = string.split('')
    return strArr.filter(vowl => !vowels.includes(vowl)).join('')
    }