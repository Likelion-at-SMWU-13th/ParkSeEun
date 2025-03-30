var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

function flip_Img() {
    var card = document.getElementById('card');
    card.classList.toggle('clicked');
}