"use strict";
//Command Prompt
function welcomeUser() {
    const person = prompt("Please enter your name.")
    if (person) {
        document.getElementById("welcome-message").innerText = `Welcome, ${person}`;
    }
}

document.addEventListener("DOMContentLoaded", welcomeUser);



