const navBar = document.querySelector('ul');
const techTitle = document.getElementById('technologyName');
const welcomeText = document.getElementById('welcomeText');


//Click hamburger icon to display dropdown navbar
const clickHamburger = () => {
    if(navBar.style.display === 'block') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'block';
    }
}

//Change sub-header text on hover
const changeText = (e) => techTitle.textContent = e.target.getAttribute('data-value');

//Change welcome text every 5 seconds
const welcomeStrings = [
    'Please scroll down to see more',
    'Hello and welcome to my Portfolio'
]

const facts = [
    'Did you know there are over 700 programming languages?',
    "The first computer 'bug' was a moth that had become stuck in a Mark II computer in 1947.",
    "Did you know the world's largest record collection had over 1 million items?",
    "The next time Halley's Comet will pass Earth is in 2061.",
    'Did you know one day on venus is longer than one year?'
]

let showIndex = 0;

//Get a random number between 0 and the argument provided
const getIndex = (num) => {
   return Math.floor(Math.random() * num)
}

//Gets a number between 0 and 1000 and then either changes the welcome text to the next array item, or displays a random fact
const setWelcome = () => {
    let index = getIndex(100);
    if(index >= 5) {
        welcomeText.textContent = welcomeStrings[showIndex]
    } else {
        let randIndex = getIndex(5)
        welcomeText.textContent = facts[randIndex];
    }

    showIndex++;

    if(showIndex >= welcomeStrings.length){
        showIndex = 0;
    }
}

//Change welcome text every 5 seconds
let changeWelcome = setInterval(setWelcome, 5000);

