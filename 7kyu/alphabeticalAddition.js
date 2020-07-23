function addLetters(...letters) {
  if (letters.length === 0) return 'z';
  
  const numbers = letters.map(charToNumber);
  const total = numbers.reduce((acc, num) => acc + num, 0);
  
  return numberToChar(total);
}

function charToNumber(char) {
  return char.charCodeAt(0) - 96;
}

function numberToChar(number) {
  if (number % 26 === 0) return 'z';
  
  return String.fromCharCode((number % 26) + 96);
}
