function wantCounter(wantItem, slicedDisList) {
  let count = 0;
  slicedDisList.forEach((disList) => {
    if (disList === wantItem) count += 1;
  });
  return count;
}

function solution(want, number, discount) {
  var answer = 0;
  for (let day = 0; day < discount.length; day += 1) {
    const slicedDisList = discount.slice(day, day + 10);
    let buyDayFlag = true;
    want.map((wantItem, index) => {
      buyDayFlag =
        buyDayFlag && wantCounter(wantItem, slicedDisList) >= number[index];
    });
    answer = buyDayFlag ? answer + 1 : answer;
  }
  return answer;
}
