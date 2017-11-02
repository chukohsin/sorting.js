
describe('Bubble Sort', function(){
  beforeEach(function(){
  	spyOn(window, "swap").and.callThrough();
  });




  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('sorts an array of strings', function(){
  	expect(bubbleSort(["grace", "hopper", "bootcamp", "fullstack"])).toEqual(["bootcamp", "fullstack", "grace", "hopper"]);
  	expect(window.swap.calls.count()).toEqual(4);
  });

  it('sorts an array of numbers and any length', function(){
  	expect(bubbleSort([2,1,7,8])).toEqual([1,2,7,8]);
  	expect(window.swap.calls.count()).toEqual(1);
  });



});



// beforeAll(function () {
//   spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it('getting to the center of tootsiepop involves exactly three licks', function () {
//   tootsiepop.getToCenter();
//   expect(tootsiepop.lick.calls.count()).toEqual(3);
// });
// ...
