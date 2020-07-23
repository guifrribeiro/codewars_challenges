var findMissing = function (list) {
  const dif1 = list[1] - list[0];
  const dif2 = list[list.length - 1] - list[list.length - 2];
  
  let step = undefined;
  
  if (dif1 < 0) {
    step = Math.max(dif1, dif2);
  } else {
    step = Math.min(dif1, dif2);
  }
  
  for (let i = 0; i < list.length; i++) {
    const innerStep = list[i + 1] - list[i];
    
    if (innerStep !== step) {
      return list[i] + step;
    }
  }
}