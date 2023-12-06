function diagonalDifference(arr) {
  // Write your code here
  //establish variables
  let rightToLeft = 0
  let leftToRight = 0
  //loop through array, adding values to respective diagonal
  for (let i = 0; i < arr.length; i ++) {
    //left to right diagonal
    leftToRight += arr[i][i]
    //right to left diagonal, start at opposite index
    const rightIndex = arr.length - i - 1
    rightToLeft += arr[i][rightIndex]
  }
  //find absolute difference
  const findAbsolute = (value1, value2) => {
    if (value1 > value2) {
        return value1 - value2
    } else {
        return value2 - value1
    }
  }
  return findAbsolute(leftToRight, rightToLeft)
}

diagonalDifference([[1,3,5], [5,3,1], [10,9,8]])
