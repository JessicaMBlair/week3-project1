// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
function divideByTwo(number) {
	number = number / 2;
	console.log(number)
}

divideByTwo(8);

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
function greeting(person) {
	console.log('Hello ' + person);
}

greeting('Bob');
greeting('Linda');


// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
var c_total = function(){
for (var c_month=0; c_month <= 12; c_month++) {
                                console.log(c_month + " $" + c_price*c_qty);
        c_price = c_price+0.25;
}
   
};
 
var c_price = 4;
var c_qty = 6;
 
c_total();


// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
var quarter = function() {
	console.log(number * 0.25);
};
var number = 80;
quarter(number);


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
function area (length, width) {
	return length * width;
}

function perimeter (length, width) {
	return (length + width) * 2;	
}

var totalArea = area(3,4);
console.log(totalArea);

var totalPerimeter = perimeter(3,4);
console.log(totalPerimeter);

var rectangle = totalArea * totalPerimeter;
console.log(rectangle);


// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
function sleepings(hours) {
	if (hours > 8) {
		console.log('You are well rested!');
	} else {
		console.log('Sleep more.');
	}
}

var hours = 15;
sleepings(hours);


// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer. 
//          Note: Strings can be treated as arrays too.

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.
function myMoney (quarters, dimes, nicklels, pennies) {
	var totalMoney = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01);
	console.log('You have ' + totalMoney.toFixed(2));
};


console.log("Question 9");
myMoney(13,2,11,16);



// 10. Develop a function that determines a person's age by prompting them for their birth year.
var birthYear = prompt("What year were you born?");
function findAge() {
	console.log('Your age is ' + (currentYear - birthYear));
}
 var currentYear= 2016;
 findAge(birthYear);
 
 

// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

// Extra Challenge: 
// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
