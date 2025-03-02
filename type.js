/**
 * Primitive Types: Number, String, Boolean, undefined, null, Symbol, BigInt
 * Reference Types: Object, Array, Function, Date, RegExp, Error
 *
 * It was once said, “JavaScript is the only language developers don’t
 * learn to use before using it.”
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
// variable don't have type, value have type

typeof b; // Reference error: b is not defined
// is not defined, and underfine is different :)
// if undeclared in browser, itd be nice

// numeric syntax // base-10 decimals literally
var a = 0.43;
var b = 42; // if 0, optional
var e = 5e10; // 5 * 10^10
// it works 43 .toFixed(3), (43).toFixed(3) but 43.toFixed(3) has error
// strict or non-stict
console.log(a + b);
