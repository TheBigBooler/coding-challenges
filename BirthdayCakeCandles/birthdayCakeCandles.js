function birthdayCakeCandles(candles) {
  // Write your code here
  //establish counter and max height variable
  let totalCandles = 0
  let maxHeight = 1
  for (let i = 0; i < candles.length; i++) {
    //if height at index is less than max, continue
    if (candles[i] < maxHeight) {
        continue
    }
    //if height at index is greater than current maxHeight, replace maxHeight and reset totalCandle counter
    else if (candles[i] > maxHeight) {
        totalCandles = 1
        maxHeight = candles[i]
    //if the height is equal to max height, increment counter
    } else {
        totalCandles+=1
    }
  }
  console.log(totalCandles)
  return totalCandles
}

birthdayCakeCandles([1,1,1,1,1,1,1,1,1,1,1,1,1])
