function isSubsequence(s: string, t: string): boolean {
  let count = 0;
  let newStr = "";
  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      newStr += t[i];
      count++;
    }
  }
  console.log(s === newStr);
  return s === newStr;
}

isSubsequence("abc", "ahbgdc");
isSubsequence("axc", "ahbgdc");
isSubsequence("ace", "abcde");
isSubsequence("aec", "abcde");
