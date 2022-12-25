function solution(survey, choices) {
  var answer = "";

  const charactor = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach((item, index) => {
    if (choices[index] < 4) charactor[item[0]] += 4 - choices[index];
    if (choices[index] > 4) charactor[item[1]] += choices[index] - 4;
  });

  answer += charactor.R >= charactor.T ? "R" : "T";
  answer += charactor.C >= charactor.F ? "C" : "F";
  answer += charactor.J >= charactor.M ? "J" : "M";
  answer += charactor.A >= charactor.N ? "A" : "N";

  return answer;
}
