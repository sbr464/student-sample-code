// assert(FUNCTION(ARGS), EXPECTED_RESULT)
// i.e. assert(RETURN_VALUE, EXPECTED_RESULT)
assert(first(['x', 'y', 'z'], 2), ['x', 'y']);

// other examples
assert(add(2,3), 5);
assert(['x', 'y', 'z'].length, 3);
assert("RefactorU".toUpperCase(), "REFACTORU");