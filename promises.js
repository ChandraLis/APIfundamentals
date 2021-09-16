//PROMISES
// ---  promises are how we handle asynchronous code 
// --- asynchronous code does not necessarily work from top to bottom.
// --- promises allow your code promised code section ( asynchronous code) to wait while the rest of the code runs

// API ---> application program interface 
/*  how you might be able to get data from google maps, or online gaming like blizzard, 
    anything that you can get data from either public and free, or for some sort of paid subscription.

    used if you want to pull data from an outside source, and display that either in a form based upon the content
    or tailor the content to the client or business you trying to touch base with.
*/

//Asynchronousity in a timeout function


            // this is the function we run              this is the amount of time required before we run the function
setTimeout(() => console.log('this is a test of timeouts!'), 1000); /* this is a simple callback function that 
                                                                     logs the string after a second passes.*/


// 1. when using the NEW keyword, you are saying you want to make a new version of the named function/ element
// 2. in this, 'new Promise' promise is a promise constructor
// 3. that promise constructor needs an executor function that resolves or rejects
// 4. this a callback function, this will happen after something else transpires
// 5. one way to manage asynchronous timing of the data request is to use a timeout function

//              1   2           3   4
let promise = new Promise(function(resolve, reject){
//      5  
    setTimeout(() => {                      // <--- this is a simulation of our data fetch, if we were reaching out to servers and 
//            6.                                    wanted to grab something from it
        if (true){                          // 6. this would be changed to false to handle failures
            resolve('success');         
        } else {
            reject('failure');
        }
    }, 3000);           //<---- this is the amount of time that passes before the timeout 3 sec, for these 3 seconds it is in a pending state
})                          // at the end of those 3 seconds i

promise
//    1       2.        3
    .then(success => console.log(success))  // 1.  to handle the success of our promise we will use .then , 
                                             //     .then also takes a callback function
                                             // 2.  the .then grabs success from the function above. 
                                             //     this could be named anything and will still console log success 
                                             // 3. what do we want to do with our success? here we are just going to console log it

/* now with this setup, and changing the true to false in the above if else statement, if we were to change the result to failure, 
   and tried to log it, we would get UnhandledPromiseRejectionWarning: failure
 .then only handles success, in order to handle both results we would do 'promise chaining'
*/ 
//      1.  2.                      3.       // 1. we use .catch for failures, this also takes a callback function
    .catch(err => console.log(err));         // 2. err represents the error 'failure'
                                             /* 3. when chaining the promises, you only put a semicolon after the last one, otherwise 
                                                   there is an error.*/
                                            //  In this example of rejecting the result, it will return failure, because false is always false
                                            //  * see above where we changed true to false in the if else statement to handle failure

console.log('this code is after our promise & .then chain!'); // this only waits to be read after everything else is read
// when we console log this, it will log immediately, then 3 seconds afterwards the failure or success from the promise above will run and log
// the promise runs on it's own clock essentially, a timer that we set 


function playFunc(){
    return 5;
}

console.log(playFunc());  // this will also log and run before the promise due to the timeout we have set on the promise