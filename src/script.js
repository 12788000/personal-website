const cards = document.querySelectorAll(".project-card");
const secDotCnt = document.querySelector(".dots");

//buttons
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
const btnDot = document.querySelector(".dot");

const positionCards = (currPosition) => {
  cards.forEach((card, i) => {
    const position = 130 * (i - currPosition);
    card.style.transform = `translateX(${position}%)`;

    //Card animation when scrolling
    if (position === 0) {
      card.classList.add("card-visible");
      card.style.transform = "scale(1.15)";
    } else {
      card.classList.remove("card-visible");
    }

    //card visibility
    if (position > 130 || position < -130) {
      card.classList.add("card-hidden");
    } else {
      card.classList.remove("card-hidden");
    }
  });
};
positionCards(0);

const displayDots = (currPosition) => {
  cards.forEach((_, i) => {
    const dot = `<button class="dot" data-position="${i}"></button>`;
    secDotCnt.insertAdjacentHTML("beforebegin", dot);
  });
};
displayDots();

const updateDot = (currPosition) => {
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot-active"));

  document
    .querySelector(`.dot[data-position='${currPosition}']`)
    .classList.add("dot-active");
};
updateDot(0);

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

//////////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}
