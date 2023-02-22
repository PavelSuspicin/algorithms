//Helper functions and variable
function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}

function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

const myArr = [9, 8, 7, 6]

//bubleSort
function bubbleSort(arr, compare = defaultCompare) {
  const { length } = arr
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      // refer to note below
      if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

console.log(bubbleSort(myArr))
