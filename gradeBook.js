// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let scoreAvg = (s1 + s2 + s3) / 3
    if(scoreAvg >= 0 && scoreAvg < 60){ 
      return "F"
    } else if (scoreAvg >= 60 && scoreAvg < 70){
      return "D"
    } else if (scoreAvg >= 70 && scoreAvg < 80){
      return "C"
    } else if (scoreAvg >= 80 && scoreAvg < 90){
      return "B"
    } else { return "A"}                  
                                             
  }