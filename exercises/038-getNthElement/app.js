function getNthElement(array, n) {
  // your code here
  for (i of array) {
    if (i == array[n]){
      return i
    }
  }
}

var output = getNthElement([1, 3, 5], 0);
console.log(output); 