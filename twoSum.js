function twoSum(numbers, target) {
    // I need to return the index of two numbers that add up to the target parameter
    // I'll need use a loop and a conditional to add numbers together and see if they equal 'target'
    for( let i = 0; i < numbers.length; i++){
      for( let h = 1; h < numbers.length; h++){
        let sum = numbers[i] + numbers[h]
        if( sum == target)
         return [i,h]
        }  
      }
      return null
    }