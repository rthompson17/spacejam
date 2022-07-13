class BankAccount {
 constructor(ownerName, balance){
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = this.GenerateAcctNum();  
    this.open = false; 
 }
 deposit(depositAmount){
     this.balance += depositAmount;
     console.log('depositMoney...');
 }
 withdraw(withdrawAmount){
    this.balance -= withdrawAmount;
    console.log('withdrawMoney...');
}

 GenerateAcctNum(){
    return Math.floor(Math.random() * 10000)
    }


}

const accountTotal = new BankAccount("John", 0) // new is to instantiate -- just means "creating an object"
accountTotal.withdraw(59) // this can test the method
console.log(accountTotal)

class CheckingAccount extends BankAccount {
    constructor(ownerName, balance, overdraftEnabled) {
        super(ownerName, balance);
        this.overdraftEnabled = overdraftEnabled;
    }
withdraw(account, withdrawAmount){   // this is the method to implement overdraft(){}
    if(this.overdraftEnabled && withdrawAmount > this.balance){
        account.withdraw(withdrawAmount)
        this.balance -= withdrawAmount
        return console.log('you overdrafted by ${this.balance}');
    } 
    else if(!this.overdraftEnabled && withdrawAmount > this.balance){
        return console.log('insufficient funds')
    }
    else{
        account.withdraw(withdrawAmount)
        this.balancce -= withdrawAmount
    }
}
}

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance) {
        super(ownerName, balance)
        this.overdraftEnabled
    }
    toString(){
        return 'bankAccount (' + this.acctNum + ') has a negative balance of ' + 
            this.balance + ' and it owned by ' + this.ownerName + ' and cannot withdraw funds at this time.';
    }
}



const bank = new BankAccount('Matt', 1000)
const checking = new CheckingAccount('Matt', 2000, false)
const savings = new SavingsAccount('Matt', 2500)





// toString() {
//     return 'Vehicle (' + this.vin + ') is a ' +
//       this.make + ' model ' + this.model;
//   }


///////////////////// SAMPLE ANSWER FOR PEOPLE CLASS HIERARCHY /////////////////



// /*--- Class Heirarchy ---*/

// class Person {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
//     sayHello() {
//       console.log(`Hello, I'm ${this.firstName} ${this.lastName} `);
//     }
//   }
  
//   class Employee extends Person {
//     constructor(firstName, lastName, company, wage) {
//       super(firstName, lastName);
//       this.company = company;
//       this.wage = wage;
//       this.active = true;
//     }
//     receiveRaise(newWage) {
//       this.wage = newWage;
//     }
//     terminate() {
//       this.active = false;
//     }
//   }
  
//   class Manager extends Employee {
//     constructor(firstName, lastName, company, wage, department) {
//       super(firstName, lastName, company, wage);
//       this.department = department;
//     }
//     giveRaise(employee, newWage) {
//       employee.receiveRaise(newWage);
//       console.log(`${employee.firstName}'s wage increased to ${newWage}`);
//     }
//   }
  
//   class Worker extends Employee {
//     constructor(firstName, lastName, company, wage, manager) {
//       super(firstName, lastName, company, wage);
//       this.manager = manager;
//       this.onBreak = false;
//     }
//     takeBreak(mins) {
//       this.onBreak = true;
//       console.log(`${this.firstName} is on break`);
//       setTimeout(() => {
//         this.onBreak = false;
//         console.log(`${this.firstName} is back from break`);
//       }, mins * 1000 * 60);
//     }
//   }
  
//   /*--- Instances --*/
  
//   var person = new Person('Jim', 'Clark');
//   console.log('Person:', person.sayHello());
  
//   var employee = new Employee('Katie', 'Clark', 'PWC', '$50K/Yr');
//   console.log('Employee:', employee);
//   employee.receiveRaise('$100K/Yr');
//   console.log('Employee post raise:', employee);
//   employee.terminate();
//   console.log('Employee quit:', employee);
  
//   var manager = new Manager('Bill', 'Lumbergh', 'Initech', 'Too Much', 'Software');
//   console.log('Manager:', manager);
  
//   var worker = new Worker('Peter', 'Gibbons', 'Initech', 'Not Enough', manager);
//   console.log('Worker:', worker);
//   worker.takeBreak(0.5);
  
//   manager.giveRaise(worker, 'Finally Enough!');
//   console.log('Worker - got raise from boss:', worker);
  
  
