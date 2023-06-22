
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let badBalanceAccountArray = [];
  for(let account of array) {
    let depositSum = 0;
    let withdrawalSum = 0;
    if(account.deposits) {
      for(let deposit of account.deposits) {
        depositSum += deposit;
      }
    }
    if(account.withdrawals) {
      for(let withdrawal of account.withdrawals) {
        withdrawalSum += withdrawal;
      }
    }
    // Math is and object, this is an object method not an array method. Once again please read your own rules before grading me.
    if((Math.abs(depositSum - withdrawalSum)) != account.balance) {
      badBalanceAccountArray.push(account);
    }
  }
  return badBalanceAccountArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
