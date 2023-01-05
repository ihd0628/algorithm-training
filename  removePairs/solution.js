function solution(s) {
  let sArray = s.split("");
  const stack = [];

  for (let i = 0; i < sArray.length; i += 1) {
    if (stack[stack.length - 1] === sArray[i]) {
      stack.pop();
    } else {
      stack.push(sArray[i]);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
