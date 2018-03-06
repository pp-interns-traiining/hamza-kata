/*Check if a string (first argument, str)
ends with the given target string (second argument, target).*/

//Solution:

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(-target.length) === target ;
}
