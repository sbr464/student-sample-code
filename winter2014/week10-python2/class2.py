class GeographicIncident(object):
	def __init__(self, name, year):
		self.name = name
		self.year = year

class Earthquake(GeographicIncident):
	def __init__(self, name, year, magnitude):
		super(Earthquake, self).__init__(name, year)
		self.magnitude = magnitude

earthquake = Earthquake("Great Kanto Earthquake", 1923, 9)
print( earthquake.name )
print( earthquake.year )
print( earthquake.magnitude )
