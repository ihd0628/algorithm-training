function solution(s) {
  var answer = "";

  const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const textList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let stage = "";

  for (let i = 0; i < s.length; i += 1) {
    stage += s[i];
    if (numberList.includes(s[i])) {
      stage = "";
      answer += s[i];
    }
    if (textList.includes(stage)) {
      answer += textList.indexOf(stage);
      stage = "";
    }
  }

  return Number(answer);
}
