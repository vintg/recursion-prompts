/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n<0){ 
    return null;
  } else if (n===0){ 
    return 1; 
  } else {
    return n*factorial(n-1);
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var copy = array.slice(0);
  if (copy.length>0){
    return copy.shift() + sum(copy);
  } else{
    return 0;
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var copy = array.slice(0);
  if(copy.length>0){
    var val = copy.shift();
    if (Array.isArray(val)) {
      return arraySum(val) + arraySum(copy);
    } else {
      return val + arraySum(copy);
    }
  }
  return 0;
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n===0){ return true; }
  var x = Math.abs(n)-2;
  if (x>=0) {
    return isEven(x);
  } else {
    return (x===0);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n===0){ return 0; }
  if (n>1){
    return n-1 + sumBelow(n-1);
  } else if(n<1) {
    return n+1 + sumBelow(n+1);
  } else {
    return 0;
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  if(x > y){
    return range(y,x).reverse();
  } else {
    if (x+1<y){
      return [x+1].concat(range(x+1,y));
    } else {
      return [];
    }
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp > 0){
    return base * exponent(base, exp-1);
  } else if (exp<0){
    return 1/(base * (exponent(base, -exp-1)));
  } else {
    return 1;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if(n>1){
    return powerOfTwo(n/2);
  } else {
    return n===1;
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  var copy = string;
  if(copy.length>1){
    return copy[copy.length-1] + reverse(copy.substr(0,copy.length-1));
  } else {
    return copy[0];
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {  
  var string = string.toLowerCase();
  if (string.length<2){
    return true;
  } else {
    if (string[0] === string[string.length-1]) {
      return palindrome(string.substring(1,string.length-1)); 
    } else{ 
      return false;
    }
  } 
};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1     // 5 - 2 = 3 - 2 = 1 
// modulo(17,5) // 2
// modulo(22,6) // 4    // -275, -274 -> -275 - (-274) = -1 
//(-275, -274) -> -275 -(-274) = -1
 // -1 , -274
 //-79, 82 should return 
 ////-79, 82 - > modulo(-79+82, 82) -> modulo(3, 82)
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x < y && x >= 0) { 
    return x;
  } 
  if (x < 0 && y < 0 && x > y) {
    return x;
  }
   if (x < 0 && y < 0 && x < y) { 
    return modulo(x - y, y);
  }
   if (x < 0 && y > 0 ){ 
    if(x<-y) { 
      return modulo(x + y, y); 
    } else if(x===-y) {
      return 0;
    }
    else{
      return x;
    }
  }
  if (x > 0 && y < 0 ) { 
    return modulo(x + y, y);
  }
  return modulo(x - y, y);  
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (y === 0 || x === 0) {
    return 0;
  }
  if (x > 0 && y < 0) { 
    return - x + multiply(x, y + 1); 
  }
  if (x < 0 && y < 0) { 
    return -x + multiply(x, y + 1); 
  }
  return x + multiply(x, y - 1); 
};
  
  
// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// x === 0, should return 0
// y === 0, should return NaN
// result should be rounded down
// 5, 2 -> 5 - 2 -> 3 -2 -> 1 should return 2.5 -> 2
// anytime x < y , return 0;

var divide = function(x, y) {
  if (y ===0){
    return NaN;
  }
  if(x===0){
    return 0;
  }

  if (x < 0 && y > 0){  
    if(-x < y){  
      return 0; 
    } else{ 
      return x + divide(x+y,y); 
    }
  } else if (x > 0 && y < 0){ 
    if (x<-y){
      return x;
    } else{
      return x - divide(x+y,y);
    }
  } else if (x <0 && y <0){ 
    if (x > y){
      return 0;
    } else {
      return x + divide (x-y,y);
    }
  } else{  
   if(x>y){
      if(x-y>0){
      return 1 + divide(x-y, y);
      } else {
        return divide(x-y,y);
      } 
    } else if(x<y){
      return 0;
    } else {
      return 1;
    } 
  }
};
// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
/*
  check for biggest and smallest number
  base case: if bigegest % smallest === 0 then return smallest as the GCD
  else recursively modulo the smallest number with the remainder until we get to base case
*/
var gcd = function(x, y) {
  if(x<0 || y<0 ){return null;}
  if(y>x){ 
    var temp = x;
    x = y;
    y= temp;
  }
  if (x%y >0){
    var rem = x%y;
    return gcd(y, rem);
  } else if (x%y===0){
    return y;
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
/*
check str1.length and str2.length, short circuit to false if they are not the same
check the first letter in the str1 and str2
  if they are equal then recursively slice the next letter in both string
    else return false
*/
var compareStr = function(str1, str2) {
  if (str1[0] === str2[0] && str1.length>0) {
    return compareStr(str1.slice(1), str2.slice(1));
  } else if (str1[0] !== str2[0]){
    return false;
  } else{
    return true;
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// write str.split() using recursion;
// base case str.length === 0 ; return [];
// else str[0].concat(createArray(str.slice(1)))
var createArray = function(str) {
  if (str.length <= 1) {
    return [str[0]]; //
  } else {
    return [str[0]].concat(createArray(str.slice(1)));
  }
};

// 17. Reverse the order of an array
// base case (array.length === 0) return []
// [array[array.length - 1]].concat(reverseArr(array.slice(-1));


var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length - 1)));
  }

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
// base case : if (length === 0) return [];
// else recursively call [value].concat(buildList(value, length -1))
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  } else {
    return [value].concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
/*
  basecase: when n === 0 return [];
  when n is multiple of 3 push 'Fizz'
  when n is mulitplie of 5 push 'Buzz'
  when n is multiple of both 3 and 5 psuh 'FizzBuzz'
  else push n as string
*/
var fizzBuzz = function(n) {
  if (n === 0) {
    return [];
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return fizzBuzz(n - 1).concat('FizzBuzz');
  } else if (n % 3 === 0) {
    return fizzBuzz(n - 1).concat('Fizz');
  } else if (n % 5 === 0) {
    return fizzBuzz(n - 1).concat('Buzz');
  }
  return fizzBuzz(n - 1).concat(n.toString());
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
/*
base case if (array.length === 0) return 0
check if (array[0] === value) 
  if true, increment the count
  return countOccurrence(array.slice(1), value)
*/
var countOccurrence = function(array, value) {
  if (array.length>1) {
    return (array[0] === value) + countOccurrence(array.slice(1),value);  
  } else{
    return (array[0] === value);
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
// base case: if (array.length === 1) { return callback(array)}
// apply callback on first element in the array and recusively call rmap with the rest of the elements
var rMap = function(array, callback) {
  if (array.length === 1) {
    return [callback(array[0])];
  } else {
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var prop in obj) {
    if(prop === key) {
      count++;
    } 
    if (typeof obj[prop] === 'object') {
      count += countKeysInObj (obj[prop], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var prop in obj) {
    if(obj[prop] === value) {
      count++;
    } 
    if (typeof obj[prop] === 'object') {
      count += countValuesInObj (obj[prop], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// var obj = {e:{x:'y'},t:{r:{e:'r'},p:{y:'r'}},y:'e', 'u':'e'}; -> obj['u'] = 'e'
// replaceKeysInObj(input, 'y', 'u') -> should return {e:{x:'y'},t:{r:{e:'r'},p:{u:'r'}},u:'e'};
// test for 'should mutate the input Object' says it should return {x: 'y'}
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    } 
    if (key === oldKey) {
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
   }
  return obj;
}

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  if (n < 1) {
    return null;
  }
  if (n === 1) {  //base case for fib sequence as well as creating an array
    return [0, 1];
  } 
  var arr = fibonacci(n - 1); // recursively calling

  return [...arr, arr[n - 1] + arr[n - 2]]; //return the sum of the previous two num and the any existing array
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
// note: the fibo num is the sum of the previous two, the index represents the fibo num
var nthFibo = function(n) {
  if (n < 0) {
    return null;
  }
  if (n === 1) {
    return 1;
  }
  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  if (array.length === 0) {
    return [];
  } 
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
   if (array.length === 0) {
    return [];
  } 
  var str = '';
  str+= array[0][0].toUpperCase() + array[0].slice(1);
  return [str].concat(capitalizeFirst(array.slice(1)));
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sumEven = 0;
  for (var key in obj) {
    if (obj[key] % 2 === 0) {
       sumEven += obj[key];
    }
    if (typeof obj[key] === 'object') {
      sumEven += nestedEvenSum(obj[key]);
    }
  }
  return sumEven;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (Array.isArray(array[0])) {
    return flatten(array[0]).concat(flatten(array.slice(1)));
  } 
  return [array[0]].concat(flatten(array.slice(1)))
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var obj = obj === undefined ? {} : obj;
  if (str.length === 0) {
    return obj;
  }
  if (!obj[str[0]]) {
    obj[str[0]] = 1;
  } else {
    obj[str[0]]++;
  }
  return letterTally(str.slice(1), obj);
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  if(list.length>0){
    if( list[0] !== list[1]){
      return [list[0]].concat(compress(list.slice(1)));
    } else{
      return compress(list.slice(1));
    }
  } else{
    return [];
  }
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length === 0) {
    return array;
  } 
  return [array[0].concat([aug])].concat(augmentElements(array.slice(1), aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  if(array.length>1){
    if(array[0]===0){
      if(array[1]!==0 ){
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
      } else{
        return minimizeZeroes(array.slice(1));
      }
    } else{
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    } 
  }
  return [array[0]];
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (array.length === 0) {
    return [];
  }
  if (array[0] < 0) {
    array[0] = - array[0];
  } 
  if (array[1] > 0) {
    array [1] = - array[1];
  }
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var nums = ['zero','one','two','three','four','five','six','seven','eight','nine'];

  if (str.length>1){
    if(parseInt(str[0])){
      return nums[str[0]] +  numToText(str.slice(1)) ;
    } else {
      return str[0] +  numToText(str.slice(1));
    }
  }
  return (typeof(str[0])==='number')? nums[str[0]]: str[0];
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
