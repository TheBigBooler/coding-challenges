function subsetA(arr) {
    //establish return array 
    const returnArr = []
    //sort array first, highest to lowest
    arr.sort((a, b) => b - a)

    //establish reducer for array and counters
    let subsetBTotal = arr.reduce((prev, current) => prev + current);
    let subsetATotal = 0    
        // loop to shift numbers to returnArr from original array
        while(subsetBTotal >= subsetATotal) {
            //take first element from array and add it to return array, then update counters
          const removeFirstElement = arr.shift();
          returnArr.unshift(removeFirstElement);
                subsetBTotal -= removeFirstElement;
                subsetATotal += removeFirstElement;
        }
        // console.log(arr);
        // console.log(subsetATotal);
        // console.log(subsetBTotal);
        // console.log(returnArr)
        return returnArr
}

const testArray = [5, 7, 18, 9, 4, 10]

subsetA(testArray);