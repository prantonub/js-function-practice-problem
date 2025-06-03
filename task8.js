/**Write a function called is_multiple_of_five() that takes a number and 
 * returns True if it's a multiple of 5, otherwise False. */ 
function is_multiple_of_five(num) {
    return num % 5 === 0;
  }
  
  console.log(is_multiple_of_five(10)); // Output: true
  console.log(is_multiple_of_five(7));  // Output: false
  