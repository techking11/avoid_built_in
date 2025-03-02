// memoize fn never call same input twice

let callCount = 0;

function memoize(fn) {
  // check passed params
  let passObj = {};

  return function (...args) {
    if (args.length > 0) {
      // console.log(args);
      const objKey = JSON.stringify(args);

      // check same args
      if (!(objKey in passObj)) {
        const objVal = fn(...args);
        passObj[objKey] = objVal;
        callCount += 1;

        return objVal;
      } else {
        return passObj[objKey];
      }
    } else {
      return callCount;
    }
  };
}

const sum = (a, b) => {
  return a + b;
};
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

let values = [[2, 2], [2, 2], [], [1, 2], []];
// let values = [[2], [3], [2], [], [3], []];
// let values = [[5], []];

const memoizeFn = memoize(sum);
values.map((val) => console.log(memoizeFn(...val)));
