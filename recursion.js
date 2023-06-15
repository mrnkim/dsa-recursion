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
/*  "hello"
      "h" + "llo"
              l + "o"
                    o + ""


*/
function everyOther(str) {
  // basecase
  // str.slice to a non existent value always returns an empty string
  if (str === "") {
    return "";
  }

  //recursion
  // slice off the rest and jump by 2
  return str[0] + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */
// ["duck", "cat", "pony"], "porcupine";

//    find(["cat", "pony"], "porcupine")
//         find(["pony"], "porcupine")
//             false

function find(arr, val) {
  //base case
  if (val === arr[0]) return true;
  if (arr.length === 1) return false;

  //recursion
  return find(arr.slice(1), val);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
//"taccat"
//isPalindrome("acca")
//isPalindrome("cc")
//isPalindrome("")
//true

function isPalindrome(str) {
  //base case
  if (str[0] !== str[str.length - 1]) return false;
  if (str.length <= 1) return true;

  //recursion
  return isPalindrome(str.slice(1, str.length - 1));
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

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // binarySearch([1,2,3,4], 1); => true

  //[1,2], 1 => true
  //[3,4]
  let middle = Math.floor((left + right) / 2);
  //base case
  if (arr[middle] === val) return true;

  //recursion
  if (val < arr[middle]) {
    return binarySearch(arr, val, left, right);
  }
  if (right - left <= 1) return false;
  return binarySearch(arr, val, middle, right);
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
