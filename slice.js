/*Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words
like "the" and "of". */

//Solution:

function titleCase(str) {

  let arr = str.split(" ");

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].slice(0,1).toUpperCase() + arr[i].slice(1, arr[i].length).toLowerCase());
  }
   console.log(result.join(" "));
}
