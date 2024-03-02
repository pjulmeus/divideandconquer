// arr is already sorted
//find the middleIdx 
//if the middle idx is 

function countZeroes(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length-1;
    let middleIdx = Math.floor((arr.length - 1 )/ 2);
    if (arr[leftIdx] === 0) return arr.length;
    if (arr[rightIdx] === 1) return 0;
    while((arr[leftIdx] === 1) || (arr[rightIdx] === 1)){
        let middleIdx = Math.floor((rightIdx - leftIdx)/ 2);
        console.log("mid", middleIdx);
        let middleVal = arr[middleIdx]
        console.log("midval", middleVal);
        if(middleVal === 1){
            leftIdx = middleIdx + 1
            console.log("left", leftIdx);
        } else if(middleVal === 0 && arr[leftIdx] === 1){
            leftIdx + 1
            console.log("middle", leftIdx);
        }
            console.log("arr", arr.length)
            console.log("what", leftIdx + 1);;
            return ((arr.length) - (leftIdx+1))
    }

}

console.log(countZeroes([0,0,0]));
console.log(countZeroes([1,1,1,1]));
console.log(countZeroes([1,1,1,1,0,0]));
console.log(countZeroes([1,0,0,0,0]));
module.exports = countZeroes