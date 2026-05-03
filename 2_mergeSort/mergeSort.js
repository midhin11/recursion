function mergeSort(arr) {
    if(arr.length === 0 || arr.length === 1) {
        return arr;
    }
    let mid = Math.trunc(arr.length/2);
    let left = mergeSort(arr.slice(0, mid)); 
    let right = mergeSort(arr.slice(mid)); 
    return merge(left, right);
}

function merge(left, right) {
    let i = 0, j = 0;
    let mergedArr = [];
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            mergedArr.push(left[i++])
        } else mergedArr.push(right[j++]);
    }
    mergedArr = mergedArr.concat(left.slice(i)).concat(right.slice(j));
    
    return mergedArr;
}

// console.log(mergeSort([105, 79, 100, 110]));

export { mergeSort }