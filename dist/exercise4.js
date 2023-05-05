"use strict";
let baseObject = {
    width: 0,
    length: 0
};
let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); // 10
//Class
class BaseObject {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends BaseObject {
    constructor(width, height) {
        super(width, height);
    }
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle1 = new Rectangle(5, 2);
console.log(`Interitance Result: ${rectangle1.calcSize()}`);
//abstract
class BaseObject1 {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
}
class Rectangle1 extends BaseObject1 {
    constructor(width, length) {
        super(width, length);
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle2 = new Rectangle1(5, 2);
console.log(`Abstract Result: ${rectangle2.calcSize()}`);
class Rectangle3 {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle3 = new Rectangle(5, 2);
console.log(`Interface Result: ${rectangle3.calcSize()}`);
