"use strict"

//Slideshow

const imageElements: string[] = [
    "images/rainiershot.jpg",
    "images/calicoast.jpg",
    "images/bajamexico.jpg",
    "images/calicoast2.jpg"
];

document.addEventListener("DOMContentLoaded", () => {
  const imageTags: NodeListOf<HTMLImageElement> = document.querySelectorAll("img");

    const prevButton = document.querySelector("#prev") as HTMLButtonElement;
    const nextButton = document.querySelector("#next") as HTMLButtonElement;

  prevButton.addEventListener("click", () => {
    const lastLink: string | undefined = imageElements.pop();
    if (lastLink) {
        imageElements.unshift(lastLink)
        updateImages();
    }
  });

  nextButton.addEventListener("click", () => {
    const firstLink: string | undefined = imageElements.shift();
      if (firstLink) {
        imageElements.push(firstLink);
        updateImages();
    }
  });

  function updateImages(): void {
    imageTags.forEach((img, index) => {
          if (imageElements[index]) {
            img.src=imageElements[index];
          }

        });
    }
    updateImages();
});

