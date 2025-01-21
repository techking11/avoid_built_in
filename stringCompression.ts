function compress(chars: string[]): number {
  let write: number = 0;
  let read: number = 0;

  while (read < chars.length) {
    // chars.length = 6
    const currentChar = chars[read]; // a
    let count = 0;

    while (read < chars.length && chars[read] === currentChar) {
      // a
      read++; // 1
      count++; // 1
    }

    chars[write] = currentChar; // a
    write++; // 1

    if (count > 1) {
      const countStr = count.toString();
      for (const digit of countStr) {
        chars[write] = digit;
        write++;
      }
    }
  }
  return write;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
);
