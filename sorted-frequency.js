function sortedFrequency(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length-1;
    let middleIdx = Math.floor((arr.length - 1 )/ 2);
    // if((arr[leftIdx] === val) && (arr[rightIdx] === val)) return (console.log(hello);)   
 if((arr[leftIdx] < val) && (arr[rightIdx] < val)) return -1

 while((arr[leftIdx] < val) && (arr[rightIdx] > val) && (arr[middleIdx] === val)){
    leftIdx ++
    console.log(leftIdx);
    rightIdx --
    console.log(rightIdx);
    // if((arr[leftIdx] === val) && (arr[rightIdx] === val)) return )   
    middleIdx = Math.floor((rightIdx - leftIdx)/ 2);
        console.log(middleIdx)
 }
 while((arr[leftIdx] < val) && (arr[rightIdx] === val) && (arr[middleIdx] < val)){
    if(leftIdx === middleIdx) return 1
            console.log("hello");
            leftIdx = middleIdx + 1
            console.log("imp" , leftIdx);
            middleIdx = Math.floor((rightIdx - leftIdx)/ 2)
 }

 while((arr[leftIdx] === val) && (arr[rightIdx] > val) && (arr[middleIdx] > val)){
    if(leftIdx === middleIdx) return 1
            console.log("hello");
            rightIdx = middleIdx - 1
            console.log("imp" , rightIdx);
            middleIdx = Math.floor((rightIdx - leftIdx)/ 2)
 }
  return (rightIdx - leftIdx)
//  let middleIdx = Math.floor((rightIdx - leftIdx)/ 2)
}

module.exports = sortedFrequency

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)) // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1