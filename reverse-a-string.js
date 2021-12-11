// Part B: reverse-a-string
// Given any string, write a function that returns the string in reverse. 

const { type } = require("express/lib/response")

// Test cases: initialString, palindrome, anagram, empty string, isnt a string
const testarr = ['hello','racecar','listen','a','', 43, NaN, undefined, null]

var reverseString = function(input) {
  if(input == undefined)
  {
    return -1
  }
  else if (typeof(input) !== 'string')
  {
    input = input.toString()
  }

  let arr = input.split('') 
  let i = 0 
  let j = input.length - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr.join('')
  };  

function tester(input)
{
  input.forEach(element => {
    console.log(reverseString(element))
  });
}

tester(testarr);
