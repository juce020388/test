var colors = document.querySelectorAll('.color');
//var css = document.querySelector('h3');
var body = document.getElementById('gradient');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




var changeBackground = () => {
    body.style.background = "linear-gradient(to right, " +
        colors[0].value +
        ", " +
        colors[1].value +
        ")";

    css.textContent = body.style.background + ";";
};

colors[0].addEventListener('input', changeBackground);

colors[1].addEventListener('input', changeBackground);

(() => {
    colors[0].value = getRandomColor();
    colors[1].value = getRandomColor();
    changeBackground();
})();
