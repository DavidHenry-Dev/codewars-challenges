// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// NOTES
/* I knew the solution involved looping through each name's length and then using a conditional to check if the length of a name equaled 4. I was orignally going to use a for loop but then I remembered the filter() method and wanted to give that a shot instead. I figured it out prett quickly. Super handy method in my opinion! */

// My Solution

function friend(friends){
    return friends.filter(name => name.length === 4)
  }

// Alternative 

function friend(friends){
    let closeFriends = [];
    for(let i = 0; i < friends.length; i++){
      if (friends[i].length === 4){
        closeFriends.push(friends[i]);
      };
    };
    return closeFriends;
  }