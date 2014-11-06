var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/populate-test-2');

var petSchema = mongoose.Schema({
    name: String,
    type: String
});

var Pet = mongoose.model('pet', petSchema);

var userSchema = mongoose.Schema({
    name: String,
    friends: [mongoose.Schema.ObjectId],
    pets: [mongoose.Schema.ObjectId]
});

var User = mongoose.model('user', userSchema);

User.find({}, function(err, docs){
    if(docs.length === 0){
        var chris = new User({
            name: 'Chris'
        });
        var sean = new User({
            name: 'Sean'
        });
        var raine = new User({
            name: 'Raine'
        });

        var pet = new Pet({
            name: 'T-Rex',
            type: 'Dinosaur'
        });

        chris.friends = [
            sean, raine
        ];
        chris.pets = [
            pet
        ];

        pet.save();

        sean.save();
        raine.save();
        chris.save();
    }
});

User.findOne({name: 'Chris'}, function(err, doc){
    console.log(doc);
});

User
    .findOne({name: 'Chris'})
    .populate('friends', null, 'user')
    .populate('pets', null, 'pet')
    .exec(function(err, doc){
        console.log(err);
        console.log(doc);

        // print out all my friend's names
        console.log(doc.friends.map(function(friend){
            return friend.name;
        }));
    });
