const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form'); // these are already created in our html and there is only one of each
const spaceShips = document.querySelector('ul');   // which is why these work instead of being to ambiguous. ( form, ul)


//we need to listen to the submit button, the click, so we add an event listener
searchForm.addEventListener('submit', fetchSpace);

//eventlistener is a function so we call it (e) is the argument that grabs the event details
function fetchSpace(e){  // <--the only reason we grabbed the event details here was to stop the refresh action
    e.preventDefault();  // this stops the page refresh action of clicking submit each time, though the action of the submit button remains
                            // this refresh action will wipe out the information you are fetching each time you click submit

    fetch(baseURL)
        .then(result => result.json())    // <--- this is the callback function, a concise arrow function to take the results and jsonify them
                                      //this won't run until the pending promise resolves, then it will run and return a promise
        .then(json => {
          console.log(json);
          displayRockets(json);       // this is the same json from above, being passed into displayRockets, this is being called here
    })
        .catch(err => console.log(err))
}

function displayRockets(rockets){          // it gets displayed here
    rockets.forEach(r => {                  // forEach is looping through the 4 rockets. this whole section is a loop
        let rocket = document.createElement('li'); // we are creating a new list item here for rockets
        rocket.innerText = r.name;       //(r) is a single object rocket, each rocket has a specific name, the .name is calling the names
        spaceShips.appendChild(rocket);  // ^we could call this cost_per_launch and it would display the cost of each instead of the name
                                        // because that is one of the values listed in the array of objects that we can see in the console
    })
}
