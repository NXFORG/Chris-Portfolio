//GitHub Stats elements
const username = document.getElementById('githubUsername');
const repos = document.getElementById('githubRepositories');
const yearJoined = document.getElementById('githubMemberYear');

//Technology Stack
const stackList = document.getElementById('stackContainer');
const stackItems = stackList.childNodes;

//Change tech stack sub-header text on hover
stackItems.forEach(item => {
    item.addEventListener('pointerover', e => {
        changeText(e);
    });
    item.addEventListener('touchmove', e => {
        changeText(e);
    });
});

//Reset stack sub-header text
stackList.addEventListener('pointerleave', e => {
    techTitle.textContent = 'Hover over an item below.';
});

//Dropdown navbar
const hamburgerLink = document.getElementById('hamburger');

//Click hamburger icon on smaller screens to display dropdown navbar
hamburgerLink.addEventListener('click', e => clickHamburger());

