"use strict";
//Command Prompt
function welcomeUser() {
    const person = prompt("Please enter your name.")
    if (person) {
        document.getElementById("welcome-message").innerText = `Welcome, ${person}`;
    }
}

document.addEventListener("DOMContentLoaded", welcomeUser);



//Slideshow
const imageElements = [
    "images/rainiershot.jpg",
    "images/calicoast.jpg",
    "images/bajamexico.jpg",
    "images/calicoast2.jpg"
];
document.addEventListener("DOMContentLoaded", () => {
    const imageTags = document.querySelectorAll("img");
    const prevButton = document.querySelector("#prev");
    const nextButton = document.querySelector("#next");
    prevButton.addEventListener("click", () => {
        const lastLink = imageElements.pop();
        if (lastLink) {
            imageElements.unshift(lastLink);
            updateImages();
        }
    });
    nextButton.addEventListener("click", () => {
        const firstLink = imageElements.shift();
        if (firstLink) {
            imageElements.push(firstLink);
            updateImages();
        }
    });
    function updateImages() {
        imageTags.forEach((img, index) => {
            if (imageElements[index]) {
                img.src = imageElements[index];
            }
        });
    }
    updateImages();
});
