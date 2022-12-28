function getFactors(findFactors) {
  const factors = [];
  let factor = 1;
  while (factor <= findFactors) {
    if (findFactors % factor === 0) {
      factors.push(factor);
    }
    factor += 1;
  }
  return factors;
}

function solution(brown, yellow) {
  var answer = [];
  const totalCarpetCount = brown + yellow;
  const factors = getFactors(totalCarpetCount);
  const factorsCount = factors.length;
  if (factorsCount % 2 !== 0) {
    answer = [
      factors[Math.floor(factorsCount / 2)],
      factors[Math.floor(factorsCount / 2)],
    ];
  } else {
    for (
      let index = factorsCount - 1;
      index > factorsCount / 2 - 1;
      index -= 1
    ) {
      if (
        yellow / (factors[index] - 2) ===
        totalCarpetCount / factors[index] - 2
      ) {
        answer = [factors[index], totalCarpetCount / factors[index]];
      }
    }
  }
  return answer;
}
