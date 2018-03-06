/*Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.*/

//Solution:

function bouncer(arr) {

  let truthy = [];

  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) != false) {
      truthy.push(arr[i]);
    }
  }
  return truthy.length > [] ? truthy: [];
}
