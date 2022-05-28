// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


function towerBuilder(nFloors) {
    let arr = []
      for (let i = 1; i <= nFloors; i++) {
          let str = ' '.repeat(nFloors - i);
          let star = '*'.repeat(i * 2 - 1);
          arr.push(str + star + str)
       }
      return arr
      }