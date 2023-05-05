let baseObject = { 
	width: 0, 
	length: 0 
}; 
let rectangle = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function() { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10

//Class
class BaseObject{
	width: number;
	length: number;

	constructor(width: number, length: number){
		this.width = width;
		this.length = length;
	}
}

class Rectangle extends BaseObject{

	constructor(width: number, height: number){
		super(width, height);
	}

	calcSize(): number {
		return this.width * this.length;
	}
}

let rectangle1: Rectangle = new Rectangle(5, 2);
console.log(`Interitance Result: ${rectangle1.calcSize()}`);

//abstract
abstract class BaseObject1{
	width: number;
	length: number;

	constructor(width: number, length: number){
		this.width = width;
		this.length = length;
	}

	abstract calcSize(): number;

}

class Rectangle1 extends BaseObject1{
	constructor(public width: number, public length: number){
		super(width, length);
	}

	calcSize(): number {
		return this.width * this.length;
	}
}

let rectangle2: Rectangle1 = new Rectangle1(5,2);
console.log(`Abstract Result: ${rectangle2.calcSize()}`);

//Interface
interface IBaseObject{
	width: number;
	length: number;

	calcSize(): number;
}

class Rectangle3 implements IBaseObject{
	width: number;	
	length: number;

	constructor(width: number, length: number){
		this.width = width;
		this.length = length;
	}

	calcSize(): number {
		return this.width * this.length;
	}
}

let rectangle3: Rectangle = new Rectangle(5, 2);
console.log(`Interface Result: ${rectangle3.calcSize()}`);