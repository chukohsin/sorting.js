describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 5, 3, 8])).toEqual([[1, 2], [5, 3, 8]]);
    expect(split([3,5,7,8])).toEqual([[3, 5], [7, 8]]);
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([3,5,6,8], [1,7])).toEqual([1,3,5,6,7,8]);
  });
});


describe('Merge Sort', function(){
  it('is able to sort an array using merge sort', function(){
    expect(mergeSort([8,4,6,8,9,2,4,5])).toEqual([2,4,4,5,6,8,8,9]);
  });
});