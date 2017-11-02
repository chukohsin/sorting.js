"use strict";

function bubbleSort(arr){
  for(let i = 0; i < arr.length-1; i++){
    for(let k = 0; k < arr.length-1; k++ ){
      if(arr[k] > arr[k+1]) {
        arr = swap(arr, k, k+1);
        console.log(arr);
      }
    }
  }
  return arr;
}

function swap(arr, index1, index2){
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  return arr;
}
