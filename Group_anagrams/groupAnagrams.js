var groupAnagrams = function (strs) {
//break up array to sort each string, then join it back together as a sorted word
//create a hash map to save values of sorted words, then add the word to matching value
//need to learn more about hash map
    if(!strs) {
        return []
    } else if(strs.length=1) {
        return strs
    } else {
        console.log(strs)
    }
   
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs)