//starter code//
class Account {
  constructor(acctNum acctHolder, address, balance) {
    this.acctNum = acctNum;
    this.acctHolder = acctHolder;
    this.address = address;
    this.balance = balance;

  //part 2. create 3 methods: getbalance, withdraw, and deposit
    getbalance()
      return(balance);
      console.log(this.balance);
    withdraw(amount)
      if(amount > balance {
      return false;
    }
      else {
      balance = balance - amount;
      return true;
    }
    console.log (amount - this.balance);
  }
  deposit(amount){
    console.log (amount + this.balance);
  };
  };

  //part 3 create 2 subclasses in the account class, checking and savings, which will inherit properties from account parent class//

  class Checking extends Account {
    constructor (minBalance, balance) {
      super(balance);
      this.minBalance = minBalance; 
      if (minBalance < 50){
        return true
        console.log("You are  below the minumum balance.");
      }
      else {
        return false
       console.log("Congrats, you have more than the minimum balance in your account");
      }
    }
      
  class Savings extends Account {
    constructor(balance) {
      super(balance);
      this.accumulateinterest = accumulateInterest;
      accumulateInterest = getBalance() * accumulateInterest /100;
      deposit(this.accumulateinterest);
    }
  }

amount = 20
minBalance = 50
accumulateInterest = .10


