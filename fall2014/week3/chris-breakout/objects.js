var num = 'TestKey';
var obj = {
	num: 20,
	true: 10,
	subObj: {
		subItem: 'Test',
		subSubObj: {
			subSubItem: [1,5,10],
			subSubMethod: function(){
				console.log('I EXIST!');
				var subVar = 'I am created in the subsubmethod';
				return {
					name: 'test',
					fun: function(){
						// This is "hiding" the pre-declared version of "subVar"
						var subVar = 'This is hiding the previous instance of subVar...';
						console.log('THIS IS NOT FUN!!');

						return {
							evenWorse: function(){
								console.log('The Worst:', subVar);
							}
						};
					}
				};
			}
		}
	}
};

// Call a sub method
obj.subObj.subSubObj.subSubMethod();
obj['subObj']['subSubObj']['subSubMethod']();
obj['subObj']['subSubObj']['subSubMethod']().fun();
obj['subObj']['subSubObj']['subSubMethod']().fun().evenWorse();

// access the number property:
// 	obj.num
// - or -
// 	obj['num']

console.log(obj);
console.log(obj.true);
console.log(obj[5 > 4]);

console.log(num, obj.num);


// Messing with order:
console.log('Order:', obj);
obj.alpha = 'test';
obj.num = 'string';
console.log('Order:', obj);



// Cleaner object structure...
var root = {};
root.prop1 = 'Test';
root.prop2 = {
	num: 10,
	message: 'Test'
};
root.vals = {};
root.vals.test = 'Test String';
root.vals.getVal = function(){
	return this.test;
};

console.log(root);
console.log(root.vals.getVal());