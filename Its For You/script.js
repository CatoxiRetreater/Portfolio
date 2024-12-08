const textLines = document.querySelectorAll('.text-line');
let currentIndex = 0;

function updateVisibleLine(index) {
    textLines.forEach((line, i) => {
        if (i === index) {
            line.classList.add('visible');
            line.classList.remove('hidden');
        } else {
            line.classList.add('hidden');
            line.classList.remove('visible');
        }
    });
}

// Set the initial state
updateVisibleLine(currentIndex);

// Scroll event listener
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0 && currentIndex < textLines.length - 1) {
        currentIndex++;
        updateVisibleLine(currentIndex);
    } else if (event.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
        updateVisibleLine(currentIndex);
    }
});