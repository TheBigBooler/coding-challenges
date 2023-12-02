// function staircase(n) {
//   // Write your code here
//   for (let i = 0; i < n; i++) {
    
//     let step = "";

//     for (let j = n; j > 0; j--) {
//       if (j > i + 1) {
//         step += " "
//       } else {
//         step += "#"
//       }
//     }
//     console.log(step);
//   }
// }

// staircase(6)
//staircase challenge done



// function miniMaxSum(arr) {
//   // Write your code here
//   //sort array
//   arr.sort()
//   //sum array
//   const total = arr.reduce((prev, current) => prev + current);

//   console.log(total - arr[4], total - arr[0]);
//   return (total-arr[4], total-arr[0])
// }

// miniMaxSum([1, 3, 5, 7, 9])
// miniMaxSum challenge done!