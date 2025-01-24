function maxArea(height: number[]): number {
  let i: number = 0;
  let j: number = height.length - 1;
  let maxArea: number = 0;

  while (i < j) {
    let area = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(maxArea, area);

    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  console.log(maxArea);
  return maxArea;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([1, 1]);
