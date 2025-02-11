// Maximum number of vowels in a substring of given length

function maxVowels(s: string, k: number): number {
  const vowels = ["a", "e", "i", "o", "u"];
  let maxCount = 0,
    currentCount = 0;

  function isVowel(char: string): boolean {
    for (let i = 0; i < vowels.length; i++) {
      if (char === vowels[i]) return true;
    }
    return false;
  }

  for (let i = 0; i < k; i++) {
    if (isVowel(s[i])) currentCount++;
  }

  maxCount = currentCount;

  for (let i = k; i < s.length; i++) {
    if (isVowel(s[i])) currentCount++;
    if (isVowel(s[i - k])) currentCount--;

    maxCount = currentCount > maxCount ? currentCount : maxCount;
  }

  console.log(maxCount);
  return 0;
}

maxVowels("abciiidef", 3);
maxVowels("aeiou", 2);
maxVowels("leetcode", 3);
maxVowels("tryhard", 4);
maxVowels("weallloveyou", 7);
