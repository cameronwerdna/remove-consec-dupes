const removeConsecutiveDuplicates = s => {
    s = s.split(' ')
    return s.filter((item, index) => item !== s[index+1]).join(' ')
  }

console.log(removeConsecutiveDuplicates('alpha beta gamma delta alpha beta gamma delta')) // => alpha beta gamma delta alpha beta gamma delta
console.log(removeConsecutiveDuplicates('alpha alpha beta gamma delta delta delta gamma gamma')) // => alpha  alpha beta gamma delta gamma
console.log(removeConsecutiveDuplicates('alpha beta delta alpha gamma beta gamma beta gamma delta delta')) // => alpha beta delta alpha gamma beta gamma beta gamma delta