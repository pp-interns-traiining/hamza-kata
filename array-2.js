/* Given and array of integers (x), return the array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

//Solution:

function maps(x){
  return x.map(item => item + item);
}
