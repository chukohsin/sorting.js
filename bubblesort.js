"use strict";

function bubbleSort(arr){
  for(let i = 0; i < arr.length-1; i++){
    for(let k = 0; k < arr.length-1; k++ ){
      if(arr[k] > arr[k+1]) {
        let temp = arr[k];
        arr[k] = arr[k+1];
        arr[k+1] = temp;
      }
    }
  }
  return arr;
}

function swap(arg1, arg2){
  let temp = arg1;
  arg1 = arg2;
  arg2 = temp;
}
