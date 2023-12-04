//s,t are range of house
//a = apple tree, b = orange tree
//apples/oranges are array with distances from tree (not always same length)

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  //establish counters for apples and oranges on the house
    let appleCount = 0
    let orangeCount = 0
    //set length of loop equal to higher length between apple or orange
    let loopLength 
    if(apples.length > oranges.length) {
        loopLength = apples.length
    } else {
        loopLength = oranges.length
    }
    //loop through both arrays simultaneously and find values 
    for (let i=0; i<loopLength; i++) {
        //function to check if fruit falls within s/t
        const fallsOnHouse = (start, end, treePosition, fruitPosition) => {
            if ((treePosition + fruitPosition) >= start && (treePosition + fruitPosition) <= end) {
                return true
            }
        }
        if (fallsOnHouse(s, t, a, apples[i])) {
            appleCount++;
        }
        if (fallsOnHouse(s, t, b, oranges[i])) {
            orangeCount++;
        }
    }
    console.log(appleCount);
    console.log(orangeCount);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])