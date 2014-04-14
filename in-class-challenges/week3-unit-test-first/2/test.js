// assert(FUNCTION(ARGS), EXPECTED_RESULT)
// i.e. assert(RETURN_VALUE, EXPECTED_RESULT)
assertDeepEquals(first(['x', 'y', 'z'], 2), ['x', 'y']);

// assert-style
// assert(pluralize('cat',0), 'cats');

// bdd-style (behavior-driven development)
// expect(pluralize('cat',0)).toBe('cats');