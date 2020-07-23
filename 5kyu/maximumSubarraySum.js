var maxSequence = function(arr){
  if (arr.every(n => n < 0)) return 0;
  
  let max = -Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const subArr = arr.slice(i, j + 1);
      const subArrTotal = subArr.reduce((acc, num) => acc + num, 0);
      
      if (subArrTotal > max) {
        max = subArrTotal;
      }
    }
  }
  
  return max;
}