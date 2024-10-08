#!/usr/bin/node
class Base {
    constructor() {
        console.log(this.constructor);
    }
}

class Sub extends Base {
    constructor() {
        super();
        console.log(this.constructor)
    }
}

const i1 = new Sub();
const i2 = new Base();
