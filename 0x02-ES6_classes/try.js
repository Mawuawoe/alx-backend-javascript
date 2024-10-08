#!/usr/bin/node

const a = 'string';
const d = 1;

console.log(typeof(a));
console.log(typeof(d));

class Currency {
    constructor(code, name) {
      this.code = code;
      this.name = name;
    }
  
    get code() {
      return this._code;
    }
  
    set code(value) {
      if (typeof value !== 'string') {
        throw new TypeError('code must be a string');
      }
      this._code = value;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = value;
    }
  
    displayFullCurrency() {
      return `${this.name} (${this.code})`;
    }
  }

const dollar = new Currency('$', 'Dollars');

console.log(typeof(dollar));
console.log(dollar instanceof Currency);
