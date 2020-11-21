class Account{
    constructor(id, name, balance){
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
  
    static totalbalance(...accounts){
      let sum = 0;
      //console.log(accounts.balance);
      
      for(let i of accounts){
        sum += i.balance;
      }
      console.log( `Total balance in the bank is: ${sum}`);
      //document.getElementById("result").innerHTML = sum;
      
    }
  }
  
  class SavingAccount extends Account{
    constructor(id, name, balance, interest){
      super(id, name, balance);
      this.interest = interest;
    }
  }
  
  class CurrentAccount extends Account{
    constructor(id, name, balance, cash_credit){
      super(id, name, balance);
      this.cash_credit = cash_credit;
    }
  }
  
const saving1 = new SavingAccount(101, "Raj", 2000, 5.8);
const current1 = new CurrentAccount(201, "Rohan", 30000, 8);
const saving2 = new SavingAccount(102, "Dia", 20000, 6);
const current2 = new CurrentAccount(202, "Sia", 3500, 7);
const saving3 = new SavingAccount(103, "Rohit", 25000, 5.9);
const current3 = new CurrentAccount(203, "Rahul", 3000, 9);

const result =Account.totalbalance(saving1, saving2, saving3, current1, current2, current3);
console.log(saving1, saving2, saving3, current1, current2, current3);
  
 