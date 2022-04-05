// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

// ***** Notes/What I learned ******
/* For the most part, my logic was 90% on the right track. I knew I needed to loop through the array and use the modulo operator to return the even numbers. What got me was returning the values in the order they were given and my syntax was just a little off. It seems a lot of others agreed that the wording wasn't the best for this exercise. I also learned how handy the filter() method can be. For my solution I just needed to use an empty array literal to push the even numbers into and return that. The vagueness of the excerise simply said to return the values and I didn't realize putting them into an array was an acceptable answer */


// My solution (Just needed to add an empty array)

function noOdds( values ){
    // Return all non-odd values
    var evenNums = [];
    for(var i=0; i<values.length;i++){
        if(values[i]%2 == 0){
          evenNums.push(values[i]);
        }
    }
    

// Alternative with filter method

function noOdds(values){
    function isEven(number){
    return number%2 == 0;
    }
    
    return values.filter(isEven);
  }