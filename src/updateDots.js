const updateDot = (currPosition) => {
  document
    .querySelectorAll(".dot")
    .forEach((dot) => dot.classList.remove("dot-active"));

  document
    .querySelector(`.dot[data-position='${currPosition}']`)
    .classList.add("dot-active");
};

export { updateDot };
