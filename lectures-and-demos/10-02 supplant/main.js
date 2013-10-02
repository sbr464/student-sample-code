// just copy this function into your utility.js
// don't try to understand this until you have jedi powers
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}


// creating a string with string concatenation (ugly!)
var myClass = 'important';
var myClass2 = 'active';
var message = 'hi';
var messageEl1 = '<a class="' + myClass + ' btn ' + myClass2 + ' btn-default">' + message + '</a>';

// creating a string by supplanting an array (good!)
var messageEl2 = '<a class="{0} btn {1} btn-default">{2}</a>'.supplant([myClass, myClass2, message]);

// creating a string by supplanting an object (good!)
var myObject = {
	myClass: 'important',
	myClass2: 'active',
	message: message
};
var messageEl3 = '<a class="{myClass} btn {myClass2} btn-default">{message}</a>'.supplant(myObject);