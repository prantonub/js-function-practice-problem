/**
 * Write a function called reverse_string() which takes a string as a parameter and 
 * returns the reversed version of that string.
 */
function reverse_string(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(reverse_string("Pranto Islam")); //output: malsI otnarP
  