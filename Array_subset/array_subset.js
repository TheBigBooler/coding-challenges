function subsetA(arr) {
    //establish return array with integer as to not cause error with reduce function
    const returnArr = [0]
    //sort array first, highest to lowest
    arr.sort((a, b) => b - a)

    //establish reducer for array
    // const subsetATotal = returnArr.reduce((prev, current) => prev + current);
    // const subsetBTotal = arr.reduce((prev, current) => prev + current);
        
        // loop to shift numbers to returnArr from original array
        while(true) {
          //establish reducer for array
          const subsetATotal = returnArr.reduce(
            (prev, current) => prev + current
            );
          const subsetBTotal = arr.reduce(
            (prev, current) => prev + current
            );
            if (subsetBTotal > subsetATotal){
          const removeFirstElement = arr.shift();
          returnArr.unshift(removeFirstElement);
            } else {
                break
            }
          console.log(arr);
          console.log(subsetATotal);
          console.log(subsetBTotal);
        }
        //remove intial 0
        returnArr.pop();
        return returnArr
}

const testArray = [5, 7, 18, 9, 4, 10]

subsetA(testArray);