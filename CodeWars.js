function twoSum(numbers, target) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
        
      if (numbers[i] + numbers[j] === target) {
        
       
        result=[i,j]
       
        return  result
      } 
    }
  }
}

console.log(twoSum([2,7,3,2], 4));
