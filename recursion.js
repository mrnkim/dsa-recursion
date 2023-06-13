/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) {
    return 1;
  }
  if (nums.length === 1) {
    return nums[0];
  }

  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
// ["hello", "hi", "hola"]
// ("hello".length), longest(["hi", "hola"])
//       5          ("hi".length), longest ["hola"]
//                      2        ("hola".length), longest []
//                                      4            0

function longest(words) {
  //base case
  if (words.length === 0) {
    return 0;
  }

  //recursion
  return words[0].length > longest(words.slice(1))
    ? words[0].length
    : longest(words.slice(1));
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

function gatherStrings(obj) {}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {}

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
