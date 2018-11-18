//Build a function forLoop. It takes an array as an argument.
//Start counting from 0, and, using a for loop, add a string to the
//array 25 times. But not just any string. If your i value is 1, add
//the string "I am 1 strange loop."; if your i value is anything
//else, add the string "I am ${i} strange loops.". (Remember flow
//control with if and else? And how do we interpolate i?) Then return the array.

myArray = [];

function forLoop(someArray){
	for (let i = 0; i < 25; i++){
		if (i === 1) {
			myArray.push(`This is a 1 strange loop.`)
		}
		else {
			myArray.push(`This is a ${i} strange loops.`)
		}
	}
	return myArray;
}

//run console.log to test the function
//console.log(forLoop(myArray));

//TODO: Create a function called whileLoop in loops.js. The function should
//take a number as an argument. Using a while loop, count down (using
//console.log) from the passed in number to 0. Then return the string 'done'.

function whileLoop(num){
	while (num > 0){
		console.log(--num)
	}
	return ("done")
}

//run console.log to test the function
//console.log(whileLoop(8));

names = ["Andrew", "Anya", "Zara", "Carell"];

var i = 0;

function incrementVariable(){
	i = i + 1;
}

function doWhileLoop(myArray){
	do {
		myArray.pop();
		incrementVariable();
		console.log(myArray);
	}
	while (myArray.length > 0 && i < 3);
}

doWhileLoop(names);
