const images = ["img/0.jpg", "img/1.jpg", "img/016.jpg", "img/017.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = chosenImage;

document.body.appendChild(bgImage);
