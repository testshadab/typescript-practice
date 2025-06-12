// <<<<<< <<<<<< Swap two numbers using a temporary variable. >>>>>>
// console.log(`<<<<<< <<<<<< Swap two numbers using a temporary variable. >>>>>>`);

// let a = 10;
// let b = 20;

// console.log("Before Swap: a = ", a, " Before Swap: b = ", b);

// let temp = a;
// a = b;
// b = temp;

// console.log("After Swap: a = ", a, " After Swap: b = ", b);


// <<<<<< <<<<<< Swap two numbers without using a temporary variable. >>>>>> >>>>>> 

console.log("<<<<<< <<<<<< Swap two numbers without using a temporary variable. >>>>>> >>>>>> ");


//This imports Node.js's built-in readline module, which helps take input from the command line (terminal).
//const readline just stores the reference to the module, so you can use it.

const readline = require("readline");

//** Creates a readline interface named rl. process.stdin: listens for input from the user (keyboard). process.stdout: writes output to the console.  */

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Asks the user to enter the first number. The value entered is passed to the callback function as parameter a b.

//question() is used to prompt the user with a message and wait for their input. When the user hits Enter, the input is passed into a callback function.


r1.question("Enter the first number (c): ", function (c) {
    r1.question("Enter the second number (d): ", function (d) {

        // Convert strings to numbers
        c = Number(c);
        d = Number(d);

        //Prints the values of a and b before swapping.

        console.log(`Before Swap: c = ${c}, d = ${d}`);

        // This is the logic of the swap code 
        c = c + d;
        d = c - d;
        c = c - d;
        

        //Prints the values of a and b after swapping.

        console.log(`After Swap: c = ${c}, d = ${d}`);

        //Closes the input stream. This is necessary to end the program; otherwise, it will keep waiting for input.

        r1.close();

    });
});



