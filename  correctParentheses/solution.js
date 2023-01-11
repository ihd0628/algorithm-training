function solution(s) {
  var answer = true;

  const sArray = s.split("");
  const basket = [];

  while (sArray.length !== 0) {
    const poped = sArray.pop();
    if (poped === "(") {
      if (basket[0] === ")") {
        basket.shift();
      } else {
        basket.unshift(poped);
      }
    } else if (poped === ")") {
      basket.unshift(poped);
    }
  }
  return !basket.length;
}
