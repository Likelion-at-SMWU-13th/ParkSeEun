var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

const street = document.querySelector('.street');
const sky = document.querySelector('.sky');
for (let i=1; i<15; i++) {
  const roadDiv = document.createElement("div");
  roadDiv.className = `road road_${i}`;
  street.appendChild(roadDiv);
  
  const skyDiv = document.createElement("div");
  skyDiv.className = `cloud cloud_${i}`;
  sky.appendChild(skyDiv);
}

document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });