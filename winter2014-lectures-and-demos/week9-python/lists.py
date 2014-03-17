colors = ["red", "green", "blue", "peachpuff"]
print( len(colors) ) # OUTPUT: 3

# negative indices
print( colors[-1] ) # OUTPUT: "blue"

# ranges
print( colors[1:3] ) # ["green", "blue"]

# loop
for c in colors:
	print(c)

# range
numbers = range(1,11)
for n in numbers:
	print(n)

# push -> append
numbers.append(100)