//typeof
let bankAccount:{
	money: number,
	deposit(value: number): void
} = { 
	money: 2000, 
	deposit(value: number) { 
		this.money += value; 
	} 
}; 
let myself:{
	name: string,
	bankAccount: typeof bankAccount,
	hobbies: string[] //hobbies: Array<string>
} = { 
	name: "John", 
	bankAccount: bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);

//Class
class BankAccount {
	money: number;
	constructor(money: number){
		this.money = money;
	}

	deposit(value: number): void{
		this.money += value;
	}
}

class Myself {
	name: string;
	bankAccount: BankAccount;
	hobbies: string[];

	constructor(name: string, bankAccount: BankAccount, hobbies: string[]){
		this.name = name;
		this.bankAccount = bankAccount;
		this.hobbies = hobbies;
	}
}

let bankAccount1 = new BankAccount(50000);
let myself1 = new Myself("John", bankAccount1, ["Violin", "Cooking"])
console.log(myself1);

//interface

interface IBankAccount{
	money: number;
	deposit(value: number):void;
}

let bankAccount2: IBankAccount = {
	money: 5000,
	deposit(value: number): void{
		this.money += value;
	}
}

interface IMySelf{
	name: string;
	bankAccount: IBankAccount;
	hobbies: string[]
}

let myself3: IMySelf = {
	name: "John",
	bankAccount: bankAccount2,
	hobbies: ["Violin", "Cooking"]
}



//abstract class
abstract class ABankAccount{
	constructor(public money: number){

	}
	abstract deposit(value: number):void;
}

let bankAccount3: ABankAccount = {
	money: 8000,
	deposit(value: number): void{
		this.money += value;
	}
}

