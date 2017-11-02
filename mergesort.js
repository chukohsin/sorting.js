function split(arr) {
	var middle = parseInt(arr.length/2);
	return [arr.slice(0, middle), arr.slice(middle, arr.length)];
}

function merge(arr1, arr2) {
	var merged = [];
	while(arr1.length && arr2.length){
		if(arr1[0] < arr2[0]) {
			merged.push(arr1.shift());
		} else {
			merged.push(arr2.shift());
		}
	}
	if(arr1.length) merged = merged.concat(arr1);
	if(arr2.length) merged = merged.concat(arr2);
	return merged;
}

function mergeSort(arr) {
	var splited = split(arr);
	if(arr.length < 2) {
		return arr;
	}
	return merge(mergeSort(splited[0]), mergeSort(splited[1]));
}