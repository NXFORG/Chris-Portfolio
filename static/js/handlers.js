const stackList = document.getElementById('stackContainer');
const stackItems = stackList.childNodes;
let techTitle = document.getElementById('technologyName');

const hamburgerLink = document.getElementById('hamburger');
const navBar = document.querySelector('ul');

const changeText = (e) => techTitle.textContent = e.target.getAttribute('data-value');

stackItems.forEach(item => {
    item.addEventListener('pointerover', e => {
        changeText(e);
    });
    item.addEventListener('touchmove', e => {
        changeText(e);
    });
});

stackList.addEventListener('pointerleave', e => {
    techTitle.textContent = 'Hover over an item below.';
});

const clickHamburger = () => {
    if(navBar.style.display === 'block') {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'block';
    }
}

hamburgerLink.addEventListener('click', e => clickHamburger());
    