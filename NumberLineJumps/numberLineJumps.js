function kangaroo(x1, v1, x2, v2) {
  let result = "";
  //if kangaroo is ahead and moving faster, return no
  if (x2 > x1 && v2 >= v1) {
    result = "NO";
  //if the difference in their starting position divides evenly by the difference in the speed, they will meet  
  } else if ((x2 - x1) % (v1 - v2) == 0) {
    result = "YES";
  } else {
    result = "NO";
  }
  return result;
}

kangaroo(0, 3, 4, 2);
