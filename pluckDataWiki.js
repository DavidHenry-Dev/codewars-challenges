// Don't you just love Wikipedia lists?

// In this Kata, you'll write a function that extracts pieces of data and stores them in an Array.

// The function will accept two parameters:

// data An Array of Objects
// property A String representing the property from which to pluck data
// An Array should be returned, containing the value extracted for each Object contained in the data Array.

// My solution
function pluck(data, property) {
    return data.map(item => item[property]);
  }

// Notes: This one took me a few minutes to realize what it was asking for, but once it clicked I knew that had to loop through the object in some way to retrieve the values 