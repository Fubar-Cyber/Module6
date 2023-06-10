function add () {
	// store input numbers
	var x = parseInt(prompt('Enter the first number '));
	var y = parseInt(prompt('Enter the second number '));

	//add x + y
	x = parseInt(x);
    y = parseInt(y);
    console.log(typeof x);
    console.log(typeof y);
	
	//determine bigger
	var a = Math.max(x,y);
	var b = Math.min(x,y);
	
	// display z
	var result = x + y;
    alert("The sum of " + x + " and " + y + " is: " + result);
	alert( a + " is bigger than " + b );
	}