class Account
	constructor : () ->
		@sayHello = 'hi'

	getInfo : () ->
		return {
			company : 'Human Design',
			companyAddress : '1035 Pearl St. #207 Boulder, CO 80302'
		}

class Users extends Account

	constructor : () ->
		console.log @
		@getInfo()

	getInfo : () ->
		@userInfo = super()
		@userInfo.name = "Matt"
		@userInfo.age = 72

		console.log @userInfo



users = new Users()
console.log('hi')