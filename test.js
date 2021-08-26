// problem 1 

// let n = Number(prompt("Please enter your number: "));

// if ( n%2 === 0 ) {

// 	console.log (n + " is an even value");
// }
// else {

//     console.log (n + " is an odd value");s
// }

// -------------------------------------------------------

// problem 2

// let n = Number(prompt("Please enter your number: "));

// if ( n%3 === 0 ) {

// 	console.log ("fizz!");
// }
// else if ( n%5 === 0 ) {

//     console.log ("buzz!");
// }
// else if ( n%5 === 0 && n%3 === 0 ) {

//     console.log ("fizz buzz!");
// }
// else {
//     console.log ("number " + n + " is indivisible by neither 3 nor 5!");
// }

// -------------------------------------------------------

// problem 3

// function reverseString (str) {

// 	return str.split("").reverse().join("");
// }
// console.log(reverseString ("welcome"));

// -------------------------------------------------------

// problem 4

// const pi  = 3.14;
// let r = Number(prompt("Please enter your the circle's radius: "));

// let area = 0;
// let circumference =0;

// area = pi * Math.pow(r,2);

// circumference = 2 * pi * r

// console.log("the circle's area is: " + area);

// console.log("the circle's circumference is: " + circumference);

// -------------------------------------------------------

// problem 5

// let n1 = Number(prompt("Please enter your first number: "));

// let n2 = Number(prompt("Please enter your second number: "))

//  if ( n1 === 50 || n2 === 50 || n1 + n2 === 50 ) {

// 	console.log ("True");

// }
 
// else {

// 	console.log ("false");

// }

// -------------------------------------------------------

// problem 6

// let n1 = Number(prompt("Please enter your first number: "));

// let n2 = Number(prompt("Please enter your second number: "));

// if ( n1 < 0 && n2 > 0 ) {

// 	console.log (n1 + " is a negative number" + " " + n2 + " is a positive value");
// }
// else if ( n1 > 0 && n2 < 0 ) {

//     console.log (n1 + " is a positive value" + " " + n2 + " is a negative value");
// }

// else if ( n1 > 0 && n2 > 0) {

//     console.log ("both are positive");
// }
// else if ( n1 < 0 && n2 < 0) {

//     console.log ("both are negative");
// }
// else {

// console.log ("neither positive nor negative");

// }

// -------------------------------------------------------

// problem 7

// let n = Number(prompt("Please enter your first number: "));

// if ( n > 0  ) {

// 	if ( n % 5 === 0) {

// 	console.log (n + " is multiple of 5");
// }
// else if ( n % 8 === 0) {

// 	console.log (n + " is multiple of 8");

// }
// else {

// 	console.log (n + " is neither multiple of 5 or 8");

// }
// }
// else {

// 	console.log (n + " is not positive");

// }


// -------------------------------------------------------

// problem 8

// let n1 = Number(prompt("Please enter your first number: "));

// let n2 = Number(prompt("Please enter your second number: "));

// let n3 = Number(prompt("Please enter your third number: "));

// if ( n1 > n2 && n1 > n3  ) {

// 	console.log (n1 + " is the largest integer");
// }
// else if ( n2 > n1 && n2 > n3  ) {

// 	console.log (n2 + " is the largest integer");
// }
// else if ( n3 > n1 && n3 > n2 ) {

// 	console.log (n3 + " is the largest integer");
// }
// else {

// 	console.log ( "invalid value" );

// -------------------------------------------------------

// problem 9

// const n = 10;

// let sum = 0;

// for ( i=0; i<10; i++){

// sum += i;

// }

// console.log ("the sum of numbers from 1 to 10 is : " + sum);


// -------------------------------------------------------

// problem 10

// let rows = Number(prompt("Please enter the number of astrics: "));

// let string = "";

// for ( i = 0; i < rows; i++){

// 	for ( j = 1; j <= i; j++) {

//     string += ("*");

// }

//     string += ("\n");

// } 

// console.log(string);

// -------------------------------------------------------

// problem 11

// let n = Number(prompt("Please enter your first number: "));

//  if ( n > 0 ) {

// 	console.log (n + " is a positive value");

// }
 
// else if ( n < 0 ) {

// 	console.log (n + " is a negative value");

// }
// else {

// 	console.log ( n + " is neither");

// }

// -------------------------------------------------------

// problem 12

// let arr = [];

// for ( i = 1; i <= i; ++i ) {

// arr.push( i + 1 );

// }

// console.log ("element - " + i + " : " + arr[i]);

// -------------------------------------------------------

// problem 13

// let n1 = Number(prompt("Please enter your first number: "));

// let n2 = Number(prompt("Please enter your second number: "));

// let sum = 0;

// sum = n1 + n2;

// console.log ("the sum of the two numbers is: " + sum);

// -------------------------------------------------------

// problem 14

// let n = Number(prompt("Please enter an input: "));

// let fact = 1;

// for ( i = 1; i <= n; i++) {

// fact *= i;

// }

// console.log ("the factorial of " + n + " is: " + fact);

// -------------------------------------------------------

// problem 15

// function calc (n1, n2) {

// function sum () {

// 	return n1 + n2;

// }
// function diff () {

// 	return n1 - n2;

// }
// function mult () {

// 	return n1 *n2;

// }
// function div () {

// 	return n1 / n2;

// }

// return {sum , diff , mult , div};

// }

// const calculator = calc ( 5 , 4 );

// console.log (calculator.sum());
// console.log (calculator.diff());
// console.log (calculator.mult());
// console.log (calculator.div());


// for ( let i =0; i < 5; i++) {
//     setTimeout(function (){ console.log( i); }, i*1000);
// }

let car = {

    carname : "bmw" ,
    carprice : 100000
}
console.log (car instanceof Object);
console.log (Object.entries(car));

// var b = 1;
// function outer () {
//     var b = 2
//     function inner () {
//         b++; 
//         var b = 3;
//         console.log (b)

//     }
//     inner ();
// }
// outer ();