const images =["0.jpg", "1.jpg", "016.jpg", "017.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `${chosenImage}`;

document.body.appendChild(bgImage);
