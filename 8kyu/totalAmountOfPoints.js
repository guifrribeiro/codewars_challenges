function points(games) {
  return games.reduce((acc, game) => {
    const [x, y] = game.split(':').map(Number);
    
    if (x > y) {
      acc += 3;
    } else if (x === y) {
      acc += 1;
    }
    
    return acc;
  }, 0);
}