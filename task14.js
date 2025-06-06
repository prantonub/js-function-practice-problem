// ### Task-14
// Take a list and return the smallest number.
function findSmallestNumber(arr) {
    if (arr.length === 0) {
      return "List is empty.";
    }
    return Math.min(...arr);
  }
  
  console.log(findSmallestNumber([5, 2, 9, 1, 7])); // Output: 1
  