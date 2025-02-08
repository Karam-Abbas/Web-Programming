function createBankAccount(initial_deposit) {
  let temp = initial_deposit;  
  return (account_obj = {
    balance: temp,
    history: [],
    deposit: function (amount) {
      this.balance += amount;
      this.history.push(`+${amount}`);
    },
    withdraw: function (amount) {
      this.balance -= amount;
      this.history.push(`-${amount}`);
    },
    getBalance: function () {
      return this.balance;
    },
    getHistory: function () {
      return this.history;
    },
    resetAccount: function () {
      this.balance = temp;
      this.history = [];
    },
    // getAccountSummary: () => {
    //   console.log(`${this.balance}`);
    //   console.log(`${this.amount}`);
    // },  
    // this doesn't work because the arrow function doesn't have its own this, it takes this of the outer lexical scope like in out case global scope. To fix this we will use simple function instead of  arrow function.
    getAccountSummary:function(){
        console.log(`Balance: ${this.balance}`);
        console.log(`History: ${this.history}`);
      }
  });
}

// Main:
let a = createBankAccount(10000);
a.deposit(2000);
a.withdraw(7000);
console.log(a.getBalance());
console.log(a.getHistory());
a.getAccountSummary()
a.resetAccount()
console.log(a.getBalance());
console.log(a.getHistory());
