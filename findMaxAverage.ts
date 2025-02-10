function findMaxAverage(nums: number[], k: number): number {
  let sum = 0,
    i = 0;

  while (i < k && i < nums.length) {
    sum += nums[i];
    i++;
  }

  if (k >= nums.length) {
    console.log(sum / nums.length);
    return sum / nums.length;
  }

  let maxSum = sum;
  while (i < nums.length) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = sum > maxSum ? sum : maxSum;
    i++;
  }

  console.log(maxSum / k);
  return maxSum / k;
}

findMaxAverage([1, 12, -5, -6, 50, 3], 4);
findMaxAverage([5], 1);
