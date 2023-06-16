/** product: calculate the product of an array of numbers. */

function product(nums) {
  let result = 1;

  function _multiply(nums, i) {
    if (nums.length === i) return; //base case
    result *= nums[i];
    _multiply(nums, i + 1);
  }

  _multiply(nums, 0);
  return result;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let longest = 0;

  function _compareLength(words, i) {
    //base case
    if (words.length === i) return;

    //recursion
    longest = words[i].length > longest ? words[i].length : longest;

    //progression
    _compareLength(words, i + 1);
  }

  _compareLength(words, 0);
  return longest;
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let result = "";

  function _everyOther(str, i) {
    //base case
    if (str.length <= i) return;

    //recursion

    result += str[i];

    //progression
    _everyOther(str, i + 2);
  }

  _everyOther(str, 0);

  return result;
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {
  let result = false;

  function _find(arr, val, i) {
    //base case
    if (arr.length === i) return;

    //recursion
    if (arr[i] === val) result = true;
    _find(arr, val, i + 1);
  }
  _find(arr, val, 0);

  return result;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let result = false;

  function _isPalindrome(str, i) {
    //base case
    if (str.length === 0) result = true;
    if (str.length / 2 <= i) return;
    //recursion
    if (str[i] === str[str.length - 1]) result = true;
    _isPalindrome(str, i + 1);
  }

  _isPalindrome(str, 0);
  return result;
}

/** revString: return a copy of a string, but in reverse. */
// "porcupine"
// pull off the first letter, and return the remaining letters
// build out a new string with the letters that are pulled off in each call
// once we are at the end, return an empty string

function revString(str) {
  // base case
  if (str === "") {
    return "";
  }

  // recursion
  return revString(str.slice(1)) + str[0];
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
//  ["duck", "cat", "pony"], "cat" => 1

function findIndex(arr, val, i = 0) {
  //base case
  if (arr.length === i) return -1;
  if (val === arr[i]) return i;

  //recursion
  return findIndex(arr, val, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

// iterate through the object
// check if the value of a key is a string, and if it is, push to an array
// if not, make a recursive call passing through the nested object to itself
function gatherStrings(obj) {
  let strings = [];

  function _gatherStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        _gatherStrings(obj[key]);
      } else if (typeof obj[key] === "string") {
        strings.push(obj[key]);
      }
    }
  }

  _gatherStrings(obj);
  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {
  // binarySearch([1,2,3,4], 1); => true
  // binarySearch([1,2,3,4,5], 1); => true

  if (arr.length === 0) return false;

  let midIndex = Math.floor(arr.length / 2);

  if (arr[midIndex] === val) return true;
  else if (val < arr[midIndex]) {
    arr = arr.splice(0, midIndex);
    return binarySearch(arr, val);
  } else {
    arr = arr.splice(midIndex + 1);
    return binarySearch(arr, val);
  }
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }

module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
