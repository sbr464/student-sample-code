// describe('toEqual', function() {
// 	it('should...', function() {
// 		expect({a:1, b:undefined}).toEqual({a:1});
// 	})
// })

describe("zip", function() {

	it('should return an empty object if passed empty arrays', function() {
    expect( zip([], []) ).toEqual({});
	});

  it("should return an object, consisting of keys from the first array argument, and values from the second array argument", function() {

    expect( zip(['city', 'name', 'age'], ['Boulder', 'Theodore', 77]) ).toEqual({
    	city: 'Boulder',
    	name: 'Theodore',
    	age: 77
    });
  });

  it('should ignore additional keys if there are more keys than values', function() {
  	expect( zip(['a','b','c'], [10, 20]) )
  	.toEqual({a:10, b:20})
  });

  it('should ignore additional values if there are more values than keys', function() {
  	expect( zip(['a','b'], [10, 20, 30]) )
  	.toEqual({a:10, b:20})
  });

});