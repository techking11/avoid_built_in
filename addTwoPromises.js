/**
 * @param {Promise} promises1
 * @param {Promise} promises2
 * @returns {Promise}
 */

/**
 * addTwoPromises(promises1.resolve(2), promises2.resolve(2))
 * .then(console.log) // 4
 */

const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

const addTwoPromises = async function (promise1, promises2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
};

addTwoPromises(promise1, promise2).then(console.log);
