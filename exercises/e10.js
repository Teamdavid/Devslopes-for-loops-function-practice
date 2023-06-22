// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  // This is tidier but the other answer I submitted was correct. These are string methods not array methods once again.
  let includesLetterArray = [];
  for(let account of array) {
    if(account.name) {
      for(let i = 0; i < account.name.length; i++) {
        if(account.name[i] === letter.toUpperCase() || account.name[i] === letter.toLowerCase()) {
          includesLetterArray.push(account.name);
        }
      }
    }
  }
  return includesLetterArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
