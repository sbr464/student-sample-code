$ ->
	console.log 'ready'
	myVar = 'hello'

	$('ul li').each (e) ->
		myGlobalVar = true
		console.log $(@).text()
		console.log myGlobalVar

	$('#header').on 'click', (e) ->
		$(@).css({color : 'peachpuff'})

	if myVar isnt 'hello'
		console.log 'your var isn\'t hello'

	if myVar is 'hello'
		console.log 'your var is hello'

	if myVar
		console.log 'I cant find your variable'

	myArr = [
		'test',
		'test2',
		'test3',
		'test4',
		'test5'
	]

	# splats
	# lookThroughArr = (first, second, third, others...) ->
	# 	console.log first

	# lookThroughArr myArr...

	for i in [0...myArr.length]
		console.log myArr[i]

	foodObj = {
		'Broccoli' : 'delicious'
		'Porkchops' : 'declicious'
		'Candy' : 'delicious'
		'Spinach' : 'gross'
	}

	foodArr = [
		'Broccoli'
		'Porkchops'
		'Candy'
		'Spinach'
	]

	logFood = (foodItem) ->
		foodItem = foodItem or false
		return false if not foodItem

	#logFood is the function we are calling
	# item is the name of the param you are passing
	# foodArr is the array
	logFood item for item in foodArr

	# loop over an array
	for item in foodArr
		console.log item

	# loop over an object
	for item of foodObj
		return "this food is #{item}"









