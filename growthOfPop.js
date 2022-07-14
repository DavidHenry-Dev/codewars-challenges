function nbYear(p0, percent, aug, p) {
    let totalYears = 0
      while( p0 < p) {
        totalYears ++
        p0 += Math.floor(p0 * (percent/100) + aug)  
      }
     return totalYears
    }