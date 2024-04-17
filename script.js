"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.querySelector(".title");
  const yesButton = document.querySelector(".btn--yes");
  const noButton = document.querySelector(".btn--no");
  const catImg = document.querySelector(".love-gif");

  const messages = [
    "No",
    "No???",
    "¿Segura??",
    "No aceptaré un no",
    "¿Por qué sigues poniendo que no?? :/",
    "¿no me amas??",
    "Te amooo mi amor hermosa <3"
  ];

  let noCount = 0;

  noButton.addEventListener("click", function () {
    
      if (noCount < messages.length - 2) {
        noCount++;
        updateTextAndImage();
      }else{
        noCount=0;
      }
  });

  yesButton.addEventListener("click", function () {
    titleElement.textContent = messages[messages.length - 1];
    catImg.src = "./img/gif(ultimo).gif";
    hideButtons();
  });

  function updateTextAndImage() {
    titleElement.textContent = messages[noCount];
    catImg.src = `./img/Gif${noCount + 1}.gif`;
  }

  function hideButtons() {
    yesButton.style.display = "none";
    noButton.style.display = "none";
  }
});
