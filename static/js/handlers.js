//Technology Stack
const stackList = document.getElementById('stackContainer');
const stackItems = stackList.childNodes;

//Dropdown navbar
const hamburgerLink = document.getElementById('hamburger');

//Change sub-header text on hover
stackItems.forEach(item => {
    item.addEventListener('pointerover', e => {
        changeText(e);
    });
    item.addEventListener('touchmove', e => {
        changeText(e);
    });
});

//Reset sub-header text
stackList.addEventListener('pointerleave', e => {
    techTitle.textContent = 'Hover over an item below.';
});

//Click hamburger icon to display dropdown navbar
hamburgerLink.addEventListener('click', e => clickHamburger());

