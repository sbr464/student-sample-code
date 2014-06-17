describe("isDigit", function() {
	it('should return true for single digits', function() {
		expect(isDigit('0')).toBe(true);
		expect(isDigit('1')).toBe(true);
		expect(isDigit('2')).toBe(true);
	});

	it('should return false for nondigits', function() {
		expect(isDigit('a')).toBe(false);
		expect(isDigit('!')).toBe(false);
		expect(isDigit(' ')).toBe(false);
		expect(isDigit('\n')).toBe(false);
	});

	it('should return false for empty string', function() {
		expect(isDigit('')).toBe(false);
	});

	it('should return false if the input is more than 1 character', function() {
		expect(isDigit('55')).toBe(false);
		expect(isDigit('5x')).toBe(false);
	});
});

describe("numberSearch", function() {

	// it('========', function() {
	// 	expect(5).toBe(5);
	// 	expect(['a', 'b', 'c']).toBe(['a', 'b', 'c']); FAIL!
	// 	expect(['a', 'b', 'c']).toEqual(['a', 'b', 'c']);
	// })

  it("should return 0 for a string with no numbers in it", function() {
    expect(numberSearch('')).toBe(0);
  });

  it('should add multiple digits as one number', function() {
  	expect(numberSearch('Hello 2 the farm at 5pm')).toBe(7);
  	expect(numberSearch('Hello 33 the farm at 5pm')).toBe(38);
  	expect(numberSearch('Alph3bet1!!!')).toBe(4);
  	expect(numberSearch('RefactorU44')).toBe(44);
  });

});