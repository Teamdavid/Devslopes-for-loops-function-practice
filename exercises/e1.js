
// EXERCISE 1
// Return an array of numbers in 1..10
// getFirstTenNumbers() => [1, 2, 3, ... , 10]

export function getFirstTenNumbers() {
  // Your code goes here...
  let numArray = [];
  for(let i = 1; i <= 10; i++) {
    numArray.push(i);
  }
  
  return numArray;

  // This was already in the assingment when i opened it which confused me as none of the others had placeholder code ready.
  // return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
