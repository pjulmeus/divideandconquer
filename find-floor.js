function findFloor(arr, val) {
  let lIdx = 0;
  let rIdx = arr.length - 1; 
  if (arr[lIdx] > val) return -1
  if (arr[rIdx] < val) return arr[rIdx]
  while(arr[lIdx] < val && arr[rIdx] > val ){
    let middleIdx = Math.floor((rIdx - lIdx)/ 2);
    if(arr[middleIdx] > val){
        rIdx = middleIdx -1
    } else if (arr[middleIdx] > val){
        lIdx = middleIdx + 1
    }
  }
   if(arr[rIdx] < val) return arr[rIdx]
   if(arr[lIdx] < val) return arr[lIdx]
}

module.exports = findFloor


console.log(findFloor([1,2,8,10,10,12,19], 9)) // 8
console.log(findFloor([1,2,8,10,10,12,19], 20)) // 19
console.log(findFloor([1,2,8,10,10,12,19], 0)) // -1