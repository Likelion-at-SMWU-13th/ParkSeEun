var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

function flip_Img() {
    var card = event.target.closest('.card');
    card.classList.toggle('clicked');
}