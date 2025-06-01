/**### Task-3
Write a function called make_avg() which will take an array of integers 
and the size of that array and return the average of those values. */
function make_avg(numbers, size) {
    if (numbers.length !== size) {
        console.log("Error: Array size doesn't match the given size.");
        return;
    }
    
    let sum = 0;
    for (let i = 0; i < size; i++) {
        sum = sum + numbers[i];
    }

    const average = sum / size;
    return average;
}

const numbers = [10, 20, 30, 40, 50];
const size = 5;
console.log("Average:", make_avg(numbers, size)); // Output: 30
