function solution(common) {
  var answer = 0;
  const commonLength = common.length;
  if (common[2] - common[1] === common[1] - common[0]) {
    return common[commonLength - 1] + common[1] - common[0];
  }
  if (common[2] / common[1] === common[1] / common[0]) {
    return common[commonLength - 1] * (common[1] / common[0]);
  }
}
