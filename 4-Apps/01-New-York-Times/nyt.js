const baseURL ='https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'QExNaA4Xav7htSn5uUNK1xkG0BAZsoU2'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

// this is to hide the previous/ next buttons once we have page pagination because we don't want it turned on immediately
//when there is no results to page through.
nav.style.display = 'none';

//Let's also add a few take care of some pagination issues that will come up later. Set the page number to 0 by default, and set  
//the displayNav to false to further ensure that it won't be visible until we want it to be.
let pageNumber = 0;
let displayNav = false;


//1                             //2
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click',previousPage); //3

//1- the searchForm variable targets the form element in the html page
/*  const searchForm = document.querySelector('form'); 
    We use the searchForm variable and call the addEventListener method on it. We want to listen for
    things happening on the particular element, which in this case is the searchForm .
    1. the event that we are looking for is the submit event. This is an HTML form event. Note that the 
        submit event fires on a form, not button. When this event happens ( the form is submitted by pressing
        the submit button), we will fire off a function called fetchResults, the second parameter in the function.
    2. The same is true for the other two items, except they call click events. When we click on the next button
        we fire off a function called nextPage. When we click on the previous button, we run previousPage.
*/

//stub out  the function. We will do that under all of our variables as a function declaration.
function fetchResults(e){  //1
    console.log(e);        //2 
//Assemble the full URL
url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
console.log(url);   //4
}
function nextPage(){
    console.log("Next button clicked");
} //5
