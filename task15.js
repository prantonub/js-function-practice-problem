// ### Task-15
// Check if a password is strong: at least 8 characters, 
// contains uppercase, lowercase, number, and symbol.
function isStrongPassword(password) {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    return minLength && hasUpperCase && hasLowerCase && hasNumber && hasSymbol;
  }
  
  // Example usage:
  console.log(isStrongPassword("Abc@1234")); // Output: true
  console.log(isStrongPassword("weakpass")); // Output: false
  