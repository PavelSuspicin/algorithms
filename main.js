function pairwise(arr, arg) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {}
  }
  return result.reduce((sum, num) => sum + num, 0)
}
pairwise([1, 4, 2, 3, 0, 5], 7)
