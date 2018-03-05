/*Kata question:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.*/

//Solution:
function positiveSum(arr) {
   var filtered = arr.filter(item => {
      return item > 0;
   });

   if (filtered.length > 0) {
     return filtered.reduce((acc, curr) => {
       return acc + curr;
     })
   } else {
     return 0;
   }
}
