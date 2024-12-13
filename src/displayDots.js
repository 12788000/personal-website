const secDotCnt = document.querySelector(".dots");

const displayDots = (currPosition) => {
  cards.forEach((_, i) => {
    const dot = `<button class="dot" data-position="${i}"></button>`;
    secDotCnt.insertAdjacentHTML("beforebegin", dot);
  });
};

export { displayDots };
