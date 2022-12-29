function answerCheck(search, word) {
  return search.join("") === word;
}

function solution(word) {
  let answer = 0;
  const dicts = ["A", "E", "I", "O", "U"];
  let index = 0;
  let flag = false;

  const dfs = (search, length) => {
    if (flag) return;
    if (length > dicts.length) return;
    if (length !== 0) index += 1;
    if (search === word) {
      answer = index;
      flag = true;
    }

    // console.log('length : ', length);
    // console.log('index : ', index);
    // console.log(search);
    dicts.forEach((dict) => {
      dfs(search + dict, length + 1);
    });
  };

  dfs("", 0);
  return answer;
}
