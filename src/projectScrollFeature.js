const cards = document.querySelectorAll(".project-card");

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

export { positionCards };

//////////////////////////////////////////
