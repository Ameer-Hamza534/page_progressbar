const container = document.getElementById('js-container');
const barHighlight = document.getElementById('bar-highlight');
let containerHeight;

window.onscroll = function() {
    containerHeight = container.offsetHeight - window.innerHeight;
    containerPosition = container.getBoundingClientRect();
    diffrence = containerHeight + containerPosition.top;
    progressPercentage = diffrence / containerHeight * 100;
    cssWidth = Math.floor(100 - progressPercentage);
    barHighlight.style.width = cssWidth + "%";
}