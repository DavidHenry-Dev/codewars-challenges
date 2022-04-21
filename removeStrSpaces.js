// Simple, remove the spaces from the string, then return the resultant string.

// my solution

function noSpace(x){
    const noSpaces = x.replace(/\s/g, '')
    return noSpaces
   }

//    Notes: I knew I could use split and join to do this one but I wanted to try out something different. A quick google search lefad me to te replace() string method. I also learned about the \s metacharacter and the g global flag. Handy stuff
