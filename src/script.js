//buttons
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");

import { positionCards } from "./projectScrollFeature";
import { displayDots } from "./displayDots";
import { updateDot } from "./updateDots";

//calling functions
positionCards(0);
displayDots();
updateDot(0);

//controller
let currPosition = 0;
btnRight.addEventListener("click", () => {
  if (currPosition > cards.length - 2) {
    currPosition = 0;
  } else {
    currPosition++;
  }
  positionCards(currPosition);
  updateDot(currPosition);
});

btnLeft.addEventListener("click", () => {
  if (currPosition == 0) {
    currPosition = cards.length - 1;
  } else {
    currPosition--;
  }
  positionCards(currPosition);
  updateDot(currPosition);
});

if (module.hot) {
  module.hot.accept();
}
