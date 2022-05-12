function getAllElementsButLast(array) {
    // your code here
    return array.slice(0,3)
}
var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]
