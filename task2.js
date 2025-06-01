/* Task-2
Take a number if the number is odd multiply it by 2 and return the result. 
If the number is even divide it by two and return the result.
*/
function oddNumber(num1){
    if(num1 % 2 === 1){
        return num1 * 2;
    }
    return num1;
}

console.log("odd number: ", oddNumber(5));
console.log("----------------")

function evenNumber(num2){
    if(num2 % 2 === 0){
       return num2 / 2;
    }
    return num2;
}
console.log("Even Number ", evenNumber(10));

/**
 * Shortcut method:
 
  function oddNumber(num1) {
  if (num1 % 2 === 1) {
    return num1 * 2; // odd
  } else {
    return num1 / 2; // even
  }
}

console.log("Result with 5:", oddNumber(5));   // 10
console.log("Result with 10:", oddNumber(10)); // 5

 */
