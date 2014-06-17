class GeographicIncident(object):
	def __init__(self, name, year):
		self.name = name
		self.year = year

earthquake = GeographicIncident("Great Kanto Earthquake", 1923)
print( earthquake.name )
print( earthquake.year )