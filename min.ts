function min(...nums: number[]): number {
  let min: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || min > nums[i]) {
      min = nums[i];
    }
  }
  console.log(min);
  return min;
}

// for min: min > nums[i]
// for max: min < nums[i]

min(8, 3, 2, 5, 10, 7);
min(3, 4, 5, 8, 9, 3, 2);
min(10, 11);
min(800, 900, 700, 300, 500);
