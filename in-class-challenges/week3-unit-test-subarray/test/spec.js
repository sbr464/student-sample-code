// subarray: Takes two arrays and returns true if the second array is contained within the first array.
describe("subarray", function() {

  it("should return true if second array is contained in first", function() {
    expect(subarray([1,2,3,4,5], [1,2,3])).toEqual(true);
    expect(subarray([1,2,3,4,5], [2,3,4])).toEqual(true);
    expect(subarray(['3rd', 'Jefferson St', 'Thomson St', '75th', '93rd'], ['Thomson St', '75th'])).toEqual(true);
    expect(subarray([1,2,3,4,5], [7,8,9])).toEqual(false);
  });

  it('should return false if only part of the second array is contained the first', function() {
    expect(subarray([1,2,3,4,5], [4,5,6])).toEqual(false);
  });

  it('should match only if subarray is in the same order.', function() {
    expect(subarray([1,2,3,4,5], [4,3,2])).toEqual(false);
  });

  it('should not match noncontiguous subarrays', function() {
  	expect(subarray([1,2,3,4,5], [1,2,5])).toEqual(false);
    expect(subarray(['3rd', 'Jefferson St', 'Thomson St', '33rd', '75th', '93rd'], ['Thomson St', '75th'])).toEqual(false);
  });

  it('should return true for empty subarrays', function() {
  	expect(subarray([1,2,3,4,5], [])).toEqual(true);
  });

});