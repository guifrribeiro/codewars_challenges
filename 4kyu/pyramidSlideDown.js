function longestSlideDown(pyramid) {
  return pyramid.reduceRight((last, current) =>
    current.map((v, i) => v + Math.max(last[i], last[i + 1]))
  )[0];
}