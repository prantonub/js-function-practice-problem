// ### Task- 18
// Takes a list and returns the reversed list.
function reverseList(arr) {
    return arr.slice().reverse(); // slice() to avoid modifying the original array
}
console.log(reverseList([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
  