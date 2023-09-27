const two_sum = (nums, target) => {
    //sort the array
    const arrayCopy = nums.slice()
    const sortedArray = arrayCopy.sort((a, b) => a - b)
    //two-pointer approach
    let leftPointer = 0
    let rightPointer = nums.length - 1
    let num1
    let num2
    for (let i = 0; i <= nums.length; i++) {
        // console.log(sortedArray[leftPointer], sortedArray[rightPointer])
        if (sortedArray[leftPointer] + sortedArray[rightPointer] == target) {
            num1 = sortedArray[leftPointer];
            num2 = sortedArray[rightPointer];
            break;
        } else if (sortedArray[leftPointer] + sortedArray[rightPointer] < target) {
            leftPointer++
        } else {
            rightPointer--
        }
    }
    //find the correct indices of the original array
    const firstIndex = nums.findIndex((number) => number == num1);
    // const secondIndex = nums.findLastIndex((number) => number == num2)
    // leetcode doesn't recognize findLastIndex method :( in the case of a duplicate number in the array
    const reversedArray = nums.reverse();
    //also doesn't like the toReversed() method so as not to mutate original array
    const secondIndex = reversedArray.findIndex((number) => number == num2);
    //return the indices
    return [firstIndex, (nums.length - 1 - secondIndex)]
}

console.log(two_sum([2,8,3,9,6,24,11], 10))