function removeFromBackOfNew(arr) {
  // your code here
  arr.pop()
  return arr
}
var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]
