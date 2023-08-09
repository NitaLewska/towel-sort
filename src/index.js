
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = []
  if (!matrix) {
    return res
  }
  matrix.map((a, i) => i%2 == 0 ? res.push(...a) : res.push(...a.reverse()))
  return res
}
