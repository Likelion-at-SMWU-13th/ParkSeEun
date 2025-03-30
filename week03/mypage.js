var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var isZoomed = false;

function zoom_Img() {
    var card = event.target.closest('.card');
    card.classList.toggle('zoomin');
}

function flip_Img() {
    var card = event.target.closest('.card');
    card.classList.toggle('clicked');
}