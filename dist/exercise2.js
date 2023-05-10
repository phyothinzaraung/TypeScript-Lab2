"use strict";
//typeof
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
//Class
class BankAccount {
    constructor(money) {
        this.money = money;
    }
    deposit(value) {
        this.money += value;
    }
}
class Myself {
    constructor(name, bankAccount, hobbies) {
        this.name = name;
        this.bankAccount = bankAccount;
        this.hobbies = hobbies;
    }
}
let bankAccount1 = new BankAccount(50000);
let myself1 = new Myself("John", bankAccount1, ["Violin", "Cooking"]);
console.log(myself1);
let bankAccount2 = {
    money: 5000,
    deposit(value) {
        this.money += value;
    }
};
//abstract class
class ABankAccount {
    constructor(money) {
        this.money = money;
    }
}
let bankAccount3 = {
    money: 8000,
    deposit(value) {
        this.money += value;
    }
};
