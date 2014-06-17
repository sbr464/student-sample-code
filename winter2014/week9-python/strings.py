# length
name = "Raine"
print( len(name) )

colors = ["red", "green", "blue", "peachpuff"]
print( len(colors) ) # OUTPUT: 3

# negative indices
print( colors[-1] ) # OUTPUT: "blue"

# ranges
print( colors[1:3] ) # ["green", "blue"]

# built in string interpolation
print( "Hello %s! You're awesome!" % ("Chris") )
# OUTPUT: "Hello Chris! You're awesome!"