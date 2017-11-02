describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts an array of strings', function(){
  	expect(bubbleSort(["grace", "hopper", "bootcamp", "fullstack"])).toEqual(["bootcamp", "fullstack", "grace", "hopper"]);
  });

  it('sorts an array of numbers and any length', function(){
  	expect(bubbleSort([2,1,7,8])).toEqual([1,2,7,8]);
  	expect(bubbleSort([8,3])).toEqual([3,8]);
  });
});

