function addToFront(arr, element) {
  // your code here
  arr.unshift(element);
  return arr
}

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift
