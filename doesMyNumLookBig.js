function narcissistic(value) {
    const toString = value.toString().split('')
    let isNarcissist = toString.reduce((sum, curr) => sum += Math.pow(curr, toString.length), 0)
      return isNarcissist === value ? true : false
    }