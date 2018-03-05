/*For example, if this array were passed as an argument:

["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed
to your function, albeit with the 'geese' removed. Note that all of the strings will be in the
same case as those provided, and some elements may be repeated. */

//Solution:

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter(item => {
    if (item !== geese) {
      return item;
    }
  });
};
