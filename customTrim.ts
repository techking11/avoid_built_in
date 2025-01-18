// main.ts

interface String {
  customTrim(): string;
}

String.prototype.customTrim = function (): string {
  let start: number = 0;
  let end: number = this.length - 1;
  // remove leading whitespace
  while (start <= end && this[start] == " ") {
    start++;
  }
  // remove trailing space
  while (end >= start && this[end] == " ") {
    end--;
  }
  // if there are no non-space character, return the empty string
  if (start > end) return "";
  // return the subthising with trimmed spaces
  let result: string = "";
  while (start <= end) {
    result += this[start];
    start++;
  }
  return result;
};

let newString: string = "           Hello World  ";
console.log(newString.customTrim());
