const stackList = document.getElementById('stackContainer');
const stackItems = stackList.childNodes;
let techTitle = document.getElementById('technologyName');

stackItems.forEach(item => {
    item.addEventListener('pointerover', e => {
        techTitle.textContent = e.target.getAttribute('data-value');
    });
});

stackList.addEventListener('pointerleave', e => {
    techTitle.textContent = 'Hover over an item below.';
});