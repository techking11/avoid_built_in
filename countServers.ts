function countServers(grid: number[][]): number {
  let rows = grid.length;
  let cols = grid[0].length;

  let rowsCount = new Array(rows).fill(0);
  let colsCount = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      rowsCount[i]++;
      colsCount[j]++;
    }
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1 && (rowsCount[i] > 1 || colsCount[j] > 1)) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
}

countServers([
  [1, 0],
  [0, 1],
]); // Output: 0

countServers([
  [1, 0],
  [1, 1],
]); // Output: 3

countServers([
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
]); // Output: 4
