// Allow one function call
function once(fn) {
  let call = false;
  return function (...args) {
    if (!call) {
      call = true;
      return fn(...args);
    }
    return undefined;
  };
}

function three(a, b, c) {
  return a + b + c;
}

const calls = [
  [1, 2, 3],
  [2, 4, 5],
];

const one = once(three)(...calls);
