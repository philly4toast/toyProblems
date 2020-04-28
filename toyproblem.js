//toy problem 04/28

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5


//toy problem 04/28

// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5˚

var differenceProductSum = (number) => {
  if (typeof number !== 'number'){
    return 'not a number'
  }
var numString = number.toString();
var numberArr = numString.split('')

var sum = 0;
var product = 1;
for (var i = 0; i < numberArr.length; i++){
  sum+=Number(numberArr[i]);
  product*=numberArr[i];
}

return product - sum;

} 




var assertEqual = (actual, expected)=>{
  console.log(actual === expected ? 'test passed' : 'FAILED TEST. Expected ' + expected + ', but got ' + actual + '.')
}



let example1 = 4321;
var expected1 = 14;
var actual1 = differenceProductSum(example1)
assertEqual(actual1, expected1)


let example2 = 'blam';
var expected2 = 'not a number';
var actual2 = differenceProductSum(example2)
assertEqual(actual2, expected2)

