Last login: Tue May 13 09:01:00 on ttys000
instructor[spring2014-lectures-and-demos]$ mongo
MongoDB shell version: 2.4.8
connecting to: test
Server has startup warnings: 
Tue May 13 09:21:39.750 [initandlisten] 
Tue May 13 09:21:39.750 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
> show dbs
candystore	0.203125GB
local	0.078125GB
passport-test	0.203125GB
> use airbnb
switched to db airbnb
> db.users.insert({ name: 'Frida' })
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "name" : "Frida" }
> db.users.insert({ name: 'Thomson' })
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "name" : "Thomson" }
> db.users.insert({ name: 'Laura', age: 45 })
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "name" : "Thomson" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 45 }
> db.users.update({ name: 'Laura' }, { $set: { age: 35 }})
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "name" : "Thomson" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 35 }
> db.users.update({ name: 'Laura' }, { $inc: 'age' })
Invalid modifier specified: $inc
> db.users.update({ name: 'Laura' }, { $inc: { age: 1 }})
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "name" : "Thomson" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 36 }
> db.users.update({ name: 'Thomoson' }, { $set: { favoriteColors: ['red'] }})
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "name" : "Thomson" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 36 }
> db.users.update({ name: 'Thomson' }, { $set: { favoriteColors: ['red'] }})
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "name" : "Frida" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 36 }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "favoriteColors" : [  "red" ], "name" : "Thomson" }
> db.users.update({ name: 'Thomson' }, { $push: { favoriteColors: 'papayawhip' }})
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "name" : "Frida" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 36 }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.update({}, { $set: { age: 0 }})
> db.users.find()
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 36 }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
> db.users.update({}, { $set: { age: 0 }}, {multi:true})
> db.users.find()
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 0 }
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.find().sort({ name: 1 })
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 0 }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.find().sort({ name: 0 })
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 0 }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.find().sort({ name: -1 })
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 0 }
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
> db.users.find()
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 0 }
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.find().count()
3
> db.users.find().skip(1)
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.find().limit(2)
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 0 }
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
> db.users.find().limit(1)
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 0 }
> db.users.find().skip(1).limit(1)
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
> db.users.find().sort({ name: 1 }).skip(1).limit(1)
{ "_id" : ObjectId("53723ab5b87429c53f3ea820"), "name" : "Laura", "age" : 0 }
> db.users.remove({ name: 'Laura' })
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.update({ name: 'Frida' }, { $set: { removed: true }})
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida", "removed" : true }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.find({ removed: false })
> db.users.find({ removed: true })
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida", "removed" : true }
> db.users.find({ $ne: { removed: true }})
> db.users.find({ removed: { $ne: { true }})
... 
... ^C

> db.users.find({ $ne: { removed: true }}})
Tue May 13 09:52:40.950 SyntaxError: Unexpected token }
> db.users.find({ $ne: { removed: true }})
> db.users.find({ $not: { removed: true }})
> db.users.find({ removed: { $not: true }})
error: { "$err" : "invalid use of $not", "code" : 13041 }
> db.users.find({ removed: { $not: { $eq: true }}})
error: { "$err" : "invalid use of $not", "code" : 13034 }
> db.users.find({ removed: { $not: true }})
error: { "$err" : "invalid use of $not", "code" : 13041 }
> db.users.find({ removed: { $ne: true }})
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida", "removed" : true }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.find({ removed: { $ne: true }})
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.update({ name: 'Frida' }, { $unset: 'removed' })
Invalid modifier specified: $unset
> db.users.update({ name: 'Frida' }, { removed: { $unset: 1 }})
Tue May 13 09:57:26.905 field names cannot start with $ [$unset] at src/mongo/shell/collection.js:147
> db.users.update({ name: 'Frida' }, { $unset: { removed: 1 }})
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
> db.users.insert({ name: 'Frida', age: 100 })
> db.users.find()
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("53723a81b87429c53f3ea81f"), "age" : 0, "favoriteColors" : [  "red",  "papayawhip" ], "name" : "Thomson" }
{ "_id" : ObjectId("5372413cb87429c53f3ea821"), "name" : "Frida", "age" : 100 }
> db.users.find({ name: 'Frida' })
{ "_id" : ObjectId("537239c0b87429c53f3ea81e"), "age" : 0, "name" : "Frida" }
{ "_id" : ObjectId("5372413cb87429c53f3ea821"), "name" : "Frida", "age" : 100 }
> db.users.find({ _id: '5372413cb87429c53f3ea821' })
> db.users.find({ _id: ObjectId('5372413cb87429c53f3ea821') })
{ "_id" : ObjectId("5372413cb87429c53f3ea821"), "name" : "Frida", "age" : 100 }
> db.users.update({ _id: ObjectId('5372413cb87429c53f3ea821') }, { $set: { city: 'MY_CITY' }})
> db.users.find({ _id: ObjectId('5372413cb87429c53f3ea821') })
{ "_id" : ObjectId("5372413cb87429c53f3ea821"), "age" : 100, "city" : "MY_CITY", "name" : "Frida" }
> 
