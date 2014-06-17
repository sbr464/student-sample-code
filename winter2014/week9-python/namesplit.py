def namesplit(n, names):
	return [
		names[:n+1], 
		names[n+1:], 
	]

print( namesplit(2, ['raine', 'chris', 'sean', 'ann', 'ben']))