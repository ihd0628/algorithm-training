function getWinRank(winNumber) {
  if (winNumber >= 2) {
    return 7 - winNumber;
  } else {
    return 6;
  }
}

function getCatchCount(lottos, win_nums) {
  let catchCount = 0;

  lottos.forEach((number) => {
    if (number !== 0) {
      catchCount = win_nums.includes(number) ? (catchCount += 1) : catchCount;
    }
  });

  return catchCount;
}

function getZeroCount(lottos) {
  let zeroCount = 0;

  lottos.forEach((number) => {
    if (number === 0) {
      zeroCount += 1;
    }
  });

  return zeroCount;
}

function solution(lottos, win_nums) {
  const zeroCount = getZeroCount(lottos);
  const catchCount = getCatchCount(lottos, win_nums);
  return [getWinRank(catchCount + zeroCount), getWinRank(catchCount)];
}
