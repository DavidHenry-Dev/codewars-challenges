// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// My Solution

function unluckyDays(year){
    let count = 0;
      for (var month=0; month<12; month++) {
          let date = new Date(year,month,13);
          if(date.getDay() == 5){
            count++;
         }
      }
      return count;  
  }