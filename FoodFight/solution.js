function solution(food) {
  const halfAnswer = [];
  const foodCount = food.map((item) => Math.floor(item / 2));
  foodCount.map((count, index) => {
    for (let i = 0; i < count; i += 1) {
      halfAnswer.push(index);
    }
  });
  return halfAnswer.join("") + "0" + halfAnswer.reverse().join("");
}
