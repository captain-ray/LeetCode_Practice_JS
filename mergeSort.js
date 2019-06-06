let mergeSort= function(arr){
    if(arr.length===1) return arr;

    let midIndex=Math.floor(arr.length/2);

    let left=mergeSort(arr.slice(0,midIndex));
    let right=mergeSort(arr.slice(midIndex));

    return merge(left,right);

}

function merge(left,right){
    let i=0,j=0;
    let result=[];
    while(i<left.length&&j<right.length){
        if(left[i]<=right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    if(i===left.length){
        while(j<right.length){
            result.push(right[j]);
            j++;
        }
    }

    if(j===right.length){
        while(i<left.length){
            result.push(left[i]);
            i++;
        }
    }
    return result;
}


//test
let arr=[4,2,5,3,8,4,2,4,3,2,4,6,8,9 ];
console.log(mergeSort(arr));