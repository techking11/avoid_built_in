"use strict";

/*
| Algorithms
| partition array according to given pivot
| order elements in array
| if less than pivot, go to left
| if greater than pivot, go to right
| if equal with pivot, go between left and right
*/

/**
 *
 * @param {number[]} nums
 * @param {number} pivot
 * @returns {number[]}
 */

var pivotArray = function (nums, pivot) {
  let leftArr = [];
  let rightArr = [];
  let middleArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) leftArr.push(nums[i]);
    else if (nums[i] > pivot) rightArr.push(nums[i]);
    else middleArr.push(nums[i]);
  }

  return [...leftArr, ...middleArr, ...rightArr];
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
console.log(pivotArray([-3, 4, 3, 2], 2));
