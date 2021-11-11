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

//Get GitHub stats
const githubData = async () => await getGithubUserData('nxforg');

//Show GitHub stats on page
const showGithubStats = async () => {
    try{
        let stats = await githubData();
        username.textContent = stats.login;
        repos.textContent = stats.public_repos;
        yearJoined.textContent = stats.created_at.substring(0,4);

    } catch(err) {
        console.log(err);
        username.textContent = 'NXFORG';
        repos.textContent = 21;
        yearJoined.textContent = 2018;
    }
}

showGithubStats();

//Get a random number between 0 and the argument provided
const getIndex = (num) => {
   return Math.floor(Math.random() * num)
}

let welcomeStrings = [];

//Get welcome text to displayed underneath my name on the page
const getWelcomeStrings = async () => welcomeStrings = await getWelcomeText();
getWelcomeStrings();

//Get a fact to be displayed instead of the welcome text
const getFactByIndex = async (index) => await getFact(index);

//Gets a number between 0 and 100 and then either changes the welcome text to the next array item, or displays a random fact
let showIndex = 0;

const setWelcome = async () => {
    let index = getIndex(100);
    if(index >= 10) {
        try {
            welcomeText.textContent = welcomeStrings[showIndex].welcome_text
        } catch(err) {
            welcomeText.textContent = "Hello and welcome to my Portfolio";
        }
    } else {
        let randIndex = getIndex(5);
        try {
            let fact = await getFactByIndex(randIndex);
            welcomeText.textContent = fact.fact_text;
        } catch(err) {
            welcomeText.textContent = "There's normally a random fact here, something must be broken...";
        }
    }

    showIndex++;
    try{
        if(showIndex >= welcomeStrings.length){
            showIndex = 0;
        }
    } catch(err) {
        if(showIndex >= 2){
            showIndex = 0;
        }
    }
}

//Change welcome text every 5 seconds
let changeWelcome = setInterval(setWelcome, 5000);

