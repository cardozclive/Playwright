function countCharacterOccurrences(str) {
    const charCount = {};
  
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    return charCount;   
  
  }
  
  const stringValue = 'Clive';
  const characterCounts = countCharacterOccurrences(stringValue);
  
  console.log(characterCounts);

  console.log('*********************')

  const str = 'Clive';
const charCount = {};

for (const char of str) {
    const lowerChar = char.toLowerCase();
    if (charCount[lowerChar]) {
        charCount[lowerChar]++;
    } else {
        charCount[lowerChar] = 1;
    }
}

console.log(charCount);