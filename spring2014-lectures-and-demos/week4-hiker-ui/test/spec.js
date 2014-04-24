describe("Hiker", function() {

  it("should have a name", function() {
  	var hiker = new Hiker('Jack', 4);
    expect(hiker.name).toEqual('Jack');
  });

  it("should have a skill level", function() {
  	var hiker = new Hiker('Jack', 4);
    expect(hiker.skill).toEqual(4);
  });

  it('should be able to climb trails less than or equal to their skill level', function() {
  	var hiker = new Hiker('Jack', 4);
		var bearPass = new Trail('Bear Pass', 3);

  	expect(hiker.canClimb).toBeDefined();
  	expect(hiker.canClimb(bearPass)).toEqual(true);
  });

  it('should not be able to climb trails greater than their skill level', function() {
  	var hiker = new Hiker('Jack', 4);
		var flatiron3 = new Trail('3rd Flatiron', 5);

  	expect(hiker.canClimb).toBeDefined();
  	expect(hiker.canClimb(flatiron3)).toEqual(false);

  });

});

describe('Trail', function() {

	it('should have a name', function() {
		// var bearPass = { name: 'Bear Pass', difficulty: 3 };
		var bearPass = new Trail('Bear Pass', 3);
		expect(bearPass.name).toEqual('Bear Pass');
	});

	it('should have a difficulty', function() {
		var bearPass = new Trail('Bear Pass', 3);
		expect(bearPass.difficulty).toEqual(3);
	});

});

describe('Mountain', function() {

	it('should have a name', function() {
  	var bearPeak = new Mountain('Bear Peak', 8400);
    expect(bearPeak.name).toEqual('Bear Peak');
	});

	it('should have an elevation', function() {
  	var bearPeak = new Mountain('Bear Peak', 8400);
    expect(bearPeak.elevation).toEqual(8400);
	});

	it('should start with an empty trails property', function() {
  	var bearPeak = new Mountain('Bear Peak', 8400);
    expect(bearPeak.trails).toEqual([]);
	});

	it('should add trails', function() {
  	var bearPeak = new Mountain('Bear Peak', 8400);
  	var bearPass = new Trail('Bear Pass', 3);

  	expect(bearPeak.addTrail).toBeDefined();

  	bearPeak.addTrail(bearPass);
  	expect(bearPeak.trails.length).toEqual(1);
  	expect(bearPeak.trails[0]).toEqual(bearPass);

	});

	it('should have a function that returns all climbable trails for a given hiker', function() {
  	var bearPeak = new Mountain('Bear Peak', 8400);
  	var hiker = new Hiker('Jack', 4);
		var bearPass = new Trail('Bear Pass', 3);
		var flatiron3 = new Trail('3rd Flatiron', 5);

		bearPeak.addTrail(bearPass);
		bearPeak.addTrail(flatiron3);

		expect(bearPeak.climbableTrails).toBeDefined();
		expect( bearPeak.climbableTrails(hiker) ).toEqual( [bearPass] );

	});

})