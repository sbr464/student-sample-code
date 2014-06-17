class Animal
	constructor : (@name, @food) ->

	eat : (food) ->
		food = food ? @food
		for i in food
			console.log(@name + ' is eating ' + i)
	run : () ->

	dance : () ->
		console.log @name  + ' is dancing'

	move : (movement) ->
		console.log @name + ' is ' + movement

class Cat extends Animal
	constructor : (@name, @food) ->

	kill : (animal) ->
		console.log @name + ' is killing ' + animal
	
	eat : (animal) ->
		if not animal?
			food = @food
		else
			@kill(animal.name)
			food = [animal.name]

		super(food)

	attack : (animal) ->
		animal = animal ? null
		if animal?
			console.log @name + ' is attacking ' + animal.name
		
		@eat(animal)

	move : () ->
		super('running')

class Mouse extends Animal
	constructor : (@name, @food) ->
		#calls this function

	move : () ->
		super('scurrying')

class Fish extends Animal
	constructor : (@name, @food) ->

	move : () ->
		super('swimming')

	eat : (animal) ->
		food = [animal.name] ? @food

		super(food)


tom = new Mouse('Tom', ['cheese', 'dirt'])
tom.eat()
tom.move()

ajax = new Cat('Ajax', [
			'fish'
			'mouse'
			'bug'
			'bird'
		])


# Make Ajax Eat
ajax.attack(tom)
ajax.move()
ajax.dance()

robert = new Fish('Robert', ['plankton'])
robert.eat(robert)
robert.move()




