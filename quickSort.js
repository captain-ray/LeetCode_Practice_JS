//https://www.youtube.com/watch?v=PgBzjlCcFvc visualization of quick sort



//select the last element of the array as the pivot, put the values smaller than the pivot to the left and put the bigger values to the right.
let quickSort = function (arr, begin, end) {
    if (begin >= end) return;

    let pivotIndex = partition(arr, begin, end);

    quickSort(arr, begin, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
}

function partition(arr, begin, end) {
    let pivot = arr[end];

    let i = begin - 1; //index of smaller part
    let j;
    for (j = begin; j <= end - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    temp = arr[i + 1];
    arr[i + 1] = arr[end];
    arr[end] = temp;

    return i + 1;
}




//test
let arr = [3, 6, 2, 5, 4];
quickSort(arr, 0, arr.length - 1);
console.log(arr);


