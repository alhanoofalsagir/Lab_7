document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const header = document.getElementById('header');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const colorInput = document.getElementById('color-input').value;
        header.style.color = colorInput; // Change heading color
    });
});
