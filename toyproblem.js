

// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

 

// Example 1:

// Input: num = 14
// Output: 6
// Explanation: 
// Step 1) 14 is even; divide by 2 and obtain 7. 
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3. 
// Step 4) 3 is odd; subtract 1 and obtain 2. 
// Step 5) 2 is even; divide by 2 and obtain 1. 
// Step 6) 1 is odd; subtract 1 and obtain 0.
// Example 2:

// Input: num = 8
// Output: 4
// Explanation: 
// Step 1) 8 is even; divide by 2 and obtain 4. 
// Step 2) 4 is even; divide by 2 and obtain 2. 
// Step 3) 2 is even; divide by 2 and obtain 1. 
// Step 4) 1 is odd; subtract 1 and obtain 0.
// Example 3:

// Input: num = 123
// Output: 12

// Constraints:

// 0 <= num <= 10^6


var numberOfSteps  = function(num) {
  var count = 0;
    if (num < 0 || 1000000 < num) {
      return "Unacceptable number"
    }
    var currentNum = num;

    while (currentNum > 0){
      if (currentNum % 2 === 0){
        currentNum = currentNum / 2
        count++;
      }else if ( currentNum % 2 === 1){
        currentNum = currentNum-1;
        count++
      }
    }
  return count;
};


var assertEqual = (actual, expected, testName) => {
  console.log(actual === expected ? 'passed ' + testName : 'Failed ' + testName + '. Expected ' + expected + ', but got ' + actual + '.')
} 

var num1 = 14;
var exp1 = 6;
var act1 = numberOfSteps(num1);
assertEqual(act1, exp1, 'initial test of simple number 14')

var num2 = 123;
var exp2 = 12;
var act2 = numberOfSteps(num2);
assertEqual(act2, exp2, 'second test of 123')

var num3 = 8;
var exp3 = 4;
var act3 = numberOfSteps(num3);
assertEqual(act3, exp3, 'third test of 8')

var num4 = -233;
var exp4 = "Unacceptable number";
var act4 = numberOfSteps(num4);
assertEqual(act4, exp4, 'testing a negative number')

var num5 = 100000000;
var exp5 = "Unacceptable number";
var act5 = numberOfSteps(num5);
assertEqual(act5, exp5, 'testing a number too large')

