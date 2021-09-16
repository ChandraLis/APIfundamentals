/*fetch('https://api.artic.edu/api/v1/artworks')
    .then(res => res.json())
    .then(json => console.log(json))
*/
//Async returns a promise
//Await works with anything that returns a promise

/*function slowResult(){
    fetch('https://api.artic.edu/api/v1/artworks')
    .then(res => res.json())
    .then(json => console.log(json))
    console.log('this is a message')
}

*/
// we end up seeing the message before the results.  
/*because fetch is Asyncronous code it uses multiple threads behind the scenes in the processes, when the time starts, the compiler
goes onto the next thing and then does that. So we see the message before the object info that we are fetching.
In order to handle this, (and make sure we see the object info first before the message) we use async and await.

ASYNC is word you can prepend to a function. When you add this to a function, then you call your function, your function will be in a pending 
status until the inside of the function resolves or rejects, 
basically ASYNC says we will call this function but it won't happen instantly.

AWAIT is a word you can preprend to anything that returns a promise. It is saying await whatever promise needs to happen. 
in this case it means await the fetch, the jsonification of the response, the console log before you do anything else.
It turns this process into a linear process instead of running all of this code on it's own clock, and the console log code separately,
it takes it back into being a single domino effect, all of the code within the function has to work then it runs the console log second.


in order to run this like we want we would write it out like the following instead:

async function slowResult(){
  await fetch('https://api.artic.edu/api/v1/artworks')
    .then(res => res.json())
    .then(json => console.log(json))
    console.log('this is a message')
}

slowResult(); //<--- this is calling the function
*/


async function slowResult(){
    await fetch('https://api.artic.edu/api/v1/artworks')// <--- here we are using fetch to talk to a server and get something back.
                                         // it returns it in a non easy format so we then change it to json, from there we can modify it.
      .then(res => res.json()) //json is indeed an object---- when you have an object you can add properties to it.
                                // if you were to use {} in here you would have to use the return word to get it to return anything


//`                /here we add a property      /we use a ; to denote line end     
      .then(json => {json.lolProperty = 'this is a random property!'; return json;}) //JS will allow you to write multiple lines in one
      .then(json => console.log(json))
      console.log('this is a message')
  }
  
  slowResult();