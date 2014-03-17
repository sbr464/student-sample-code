def unique(arr):
	d = {}
	# output = []
	for value in arr:
		d[value] = True

	# Method 1: Looping over the keys of a dictionary
	# for key in d:
	# 	output.append(key)

	# Method 2: Looping over the keys and values of a dictionary
	# for key,value in d.items():
	# 	output.append(key)
	# return output

	# Method 3: keys()
	return d.keys()

print( unique(['who', 'likes', 'mango', 'mango', 'mango']) )