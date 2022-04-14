// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//Notes
/* I wanted to use a ternary operator at first but decided to use an if statement to better lay out my logic. I also learned to can simply put a - in front num to return a negative value instead of using an algorithm like num - (num * 2)  */


function makeNegative(num) {
  if ( num > 0 ) {
        return -num
    }
    else {
        return num;
    }
}