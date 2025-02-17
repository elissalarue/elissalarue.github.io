"use strict"

//Slideshow
const image_elements = ["images/rainiershot.jpg","images/calicoast.jpg","images/bajamexico.jpg","images/calicoast2.jpg"]

document.addEventListener("DOMContentLoaded", () => {
  const imageElements = document.querySelectorAll("img");

  document.querySelector("#prev").addEventListener("click", evt => {
      let firstLink = image_elements.shift();
      image_elements.push(firstLink);

      for(let i = 0; i <imageElements.length; i++) {
          imageElements[i].src = image_elements[i];
      }
  });

  document.querySelector("#next").addEventListener("click", evt => {
      let lastLink = image_elements.pop();
      image_elements.unshift(lastLink);

      for (let i = 0; i <imageElements.length; i++) {
          imageElements[i].src = image_elements[i];
      }
  });
})

