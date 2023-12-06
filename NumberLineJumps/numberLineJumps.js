function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  //if second kangaroo is ahead and moving faster, return NO
  if (x2 >= x1 && v2 > v1) {
    return "NO"
    //if first kangaroo ahead and moving faster, return NO
  } else if (x1 >= x2 && v1 > v2) {
    return "NO"
    //if theyre moving at same speed, will never meet, return NO
  } else if (v1 === v2) {
    return "NO"
    //if one kangaroo is moving faster and don't intersect after x jumps, return NO
  } else {
    return "YES"
  }
}
