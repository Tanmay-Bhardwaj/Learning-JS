
/*Takng input as string */
let score="33adadad"

/* printing the datatype of the string */
//console.log(typeof score);

/*Converting the tupe of string*/
let valueInnumber= Number(score)

//console.log(typeof(valueInnumber));
//console.log(typeof(score));
//console.log(valueInnumber);  /* Nan means (not a number) */


/*Putting the value to be null */
let num=null
//console.log(typeof(num))
//console.log(typeof(Number(num)));
//console.log(Number(num)); /* null is converted to 0 */

/*undefined is converted to Nan (not a number) */

/* Bool values are converted to 0 or 1 (true=1) and (False=0) */

/*String is converted to Nan */

/* Value of NaN is number */


/*Converting number to boolean */

let IsLoggedIn= 1

let booleamIsLoggedIn=Boolean(IsLoggedIn)
//console.table([typeof(booleamIsLoggedIn),booleamIsLoggedIn]);

//Empty string is False
//string in bool is True

let someNumber=33

let StringNumber=String(someNumber)
//console.table([StringNumber,typeof(StringNumber)]);


// ******************************************************************* Operations ***************************************************************

let value=3
let negval=-value
// console.log(negval)

//basic operation

// console.table([2+2,2-2,2*2,2**3,2/3,2%3])

let str1="Hello"
let str2=" Tanmay"
let str3=str1+str2
//console.log(str3);


//noticabel output
/*
console.log("1"+2);
console.log(2+"1")
console.log("1"+2+2)
str4="1"+2+2
console.log(typeof(str4));

console.log(1+2+"2") */ //adds 2 and 1 first

//console.log(true); //output is true

//but when we write +true value is 1
//console.log(+true);
//console.log(+"");


let num1, num2, num3 
num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter)