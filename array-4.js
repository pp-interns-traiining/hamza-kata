/*Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.*/

//Solution:

function largestOfFour(arr) {

  let largest = [];

  for (let i = 0; i < arr.length; i++) {
    largest.push(arr[i].sort((a, b) => {
      return b - a;
    }).shift());
  }
  return largest;

}
