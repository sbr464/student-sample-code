# basic function definition
def sayHi(name):
	print("Hello %s! %s! %s!" % (name, name, name))

# sayHi('Chris')

# default and named parameters
def myrange(start=10, end=20):
	return range(start, end)

# print( myrange(end=25) )


# multiple arguments
def multiply(n, *numbers):
	return [x*n for x in numbers]

print( multiply(5, 1, 2, 3) )




