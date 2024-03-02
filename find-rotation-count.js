function findRotationCount(arr) {
    let lIdx = 0; 
    let rIdx = arr.length - 1; 
    if(arr[rIdx] > arr[lIdx]) return 0 
    while(arr[rIdx] < arr[lIdx]){
        let middleIdx = Math.floor((rIdx - lIdx)/ 2);
        if(arr[middleIdx] < arr[lIdx]) {
            rIdx = middleIdx - 1   
        } else if (arr[middleIdx] > arr[lIdx]){
            rIdx = middleIdx + 1
        }
        return (rIdx + 1);
    }
  
}

module.exports = findRotationCount


console.log(findRotationCount([15, 18, 2, 3, 6, 12])) // 2
console.log(findRotationCount([7, 9, 11, 12, 5])) // 4
console.log(findRotationCount([7, 9, 11, 12, 15])) // 0