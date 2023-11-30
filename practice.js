function staircase(n) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    
    let step = "";

    for (let j = n; j > 0; j--) {
      if (j > i + 1) {
        step += " "
      } else {
        step += "#"
      }
    }
    console.log(step);
  }
}

staircase(6)
