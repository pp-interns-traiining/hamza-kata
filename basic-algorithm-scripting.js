/*Return the length of the longest word in the provided sentence.

Your response should be a number.*/

//Solution:

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > sum) {
//       sum = arr[i].length;
//     }
//   }
//   return sum;

  let result = 0;
  arr.sort((a,b) => {
	return  b.length - a.length;
  });
  result = arr.shift().length;
  console.log(result)
  return result;
}
