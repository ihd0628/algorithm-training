function solution(k, score) {
  const answer = [];
  const jundang = [];

  for (let day = 0; day < score.length; day += 1) {
    if (jundang.length < k) {
      jundang.push(score[day]);
      jundang.sort((a, b) => a - b);
    } else if (score[day] > jundang[0]) {
      jundang[0] = score[day];
      jundang.sort((a, b) => a - b);
    }
    answer.push(jundang[0]);
  }
  return answer;
}
