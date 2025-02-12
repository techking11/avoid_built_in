/**
 * Primitive Types: Number, String, Boolean, undefined, null, Symbol, BigInt
 * Reference Types: Object, Array, Function, Date, RegExp, Error
 */

// Output: object -> legal issue in js -> null means no object
console.log(typeof null); // output: object

// function length
function a(b, c) {}
console.log(a.length); // output: 2 -> 2 parameters -> length 2

// array is reference type -> object -> reference types are object
console.log(typeof [1, 2, 3]); // output: object

var d;
console.log(typeof d); // output: underfined
