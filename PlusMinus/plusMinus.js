function plusMinus(arr) {
  // Write your code here
  //establish counters for each return value
  let positiveCounter = 0
  let negativeCounter = 0
  let zeroCounter = 0
  
  //loop through array to find total number for each counter
  for (let i=0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveCounter++
    } else if (arr[i] < 0) {
        negativeCounter++
    } else {
        zeroCounter++
    }
  }
    console.log(positiveCounter / arr.length);
    console.log(negativeCounter / arr.length);
    console.log(zeroCounter / arr.length);
}

plusMinus([-4, 3, -9, 0, 4, 1])