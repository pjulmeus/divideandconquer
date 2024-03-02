function findRotatedIndex(arr, val) {
 let lIdx = 0; 
 let rIdx = arr.length  - 1;
 let middleIdx = Math.floor((rIdx - lIdx)/ 2);
 if (arr[middleIdx] < val) return -1 
 while(arr[lIdx] < val){
    let middleIdx = Math.floor((rIdx - lIdx)/ 2);
    // console.log(middleIdx);
    if(arr[middleIdx] === val) return middleIdx
        lIdx ++
        rIdx = middleIdx - 1
    if(arr[rIdx] === val) return rIdx
 }

 while(arr[lIdx] > val){
    let middleIdx = Math.floor((rIdx - lIdx)/ 2) + 1;
    console.log("mid", middleIdx);
    if(arr[middleIdx] === val) return middleIdx
        rIdx --
        lIdx = middleIdx + 1
    if(arr[rIdx] === val) return rIdx
    if(arr[lIdx] === val) return lIdx
 }
  return -1
}

module.exports = findRotatedIndex


console.log(findRotatedIndex([3,4,1,2],4)) // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)) // 6
console.log(findRotatedIndex([37,44,66,102,10,22],14)) // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1