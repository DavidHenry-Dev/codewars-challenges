// Description:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Notes
// I knew I had to use split().reverse().join() to get the solution, or at least close to it. But after checcking it out in the console log, it didn't seem quite right. That's when it hit me. So I tried it again with split(" ") and got the desired result. Almost kind of silly that it works. Next time I'll have to try using Map.


// my solution
function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }


// alternative solution
function reverseWords(str) {
    return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
  }