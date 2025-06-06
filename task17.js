// ### Task-17
// Returns True if a single character is uppercase, else False.
function isUppercase(char) {
    return char.length === 1 && char === char.toUpperCase() && char !== char.toLowerCase();
}
  
  // Example usage:
  console.log(isUppercase('A')); // Output: true
  console.log(isUppercase('a')); // Output: false

  