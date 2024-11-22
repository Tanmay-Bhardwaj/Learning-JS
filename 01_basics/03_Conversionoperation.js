
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
console.table([StringNumber,typeof(StringNumber)]);
