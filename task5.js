/*### Task-5 
Write a function called odd_even() which takes an integer value and 
tells whether this value is even or odd. If even return `Even`. If odd return `Odd`*/
function odd_even(number) {
    if (number % 2 === 0) {
      return "Even Number";
    } else {
      return "Odd Number";
    }
  }
  
  console.log(odd_even(10)); // Output: Even
  console.log(odd_even(7));  // Output: Odd 

/*Another method without using return

function odd_even(number){
    if (number % 2 === 1) {
        console.log(number, "is an Odd Number");
    } else if (number % 2 === 0) {
        console.log(number, "is an Even Number");
    }
}
odd_even(10);  // Output: 10 is an Even Number

*/

