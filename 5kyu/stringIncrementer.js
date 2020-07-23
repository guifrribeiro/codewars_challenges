function incrementString (str) {
  const ending = str.match(/[0-9]*$/)[0];
  
  if (ending === '') return str + '1';
  
  const strWithoutNum = str.replace(/[0-9]*$/, '');
  const number = (parseInt(ending) + 1);
  
  let zeros = ending.match(/^0*/)[0];
  
  if (number % 10 === 0 || number === 1) zeros = zeros.substr(1);
  
  return strWithoutNum + zeros + number;
}