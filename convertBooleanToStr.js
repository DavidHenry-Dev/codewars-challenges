// Implement a function which convert the given boolean value into its string representation.

// My solution 

function booleanToString(b){
    return (b ? 'true' : 'false')
  }

//   Notes: I felt this one was pretty easy. I wanted to do it with a ternary operator since I haven't utilized them very much. 

// Alternative solutions
function booleanToString(b){
    return b.toString();
  }


  function booleanToString(b){
    if(b){
        return "true";
    }
        return "false";
}