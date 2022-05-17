const navOpen = document.querySelector(`#navBarOpen`);
const navClose = document.querySelector(`#navBarClose`);
const containerOverlay = document.querySelector(`.containerOverlay`);

navOpen.addEventListener(`click`, function (e) {
  navOpen.classList.add(`hidden`);
  containerOverlay.classList.remove(`hidden`);
});

navClose.addEventListener(`click`, function (e) {
  navOpen.classList.remove(`hidden`);
  containerOverlay.classList.add(`hidden`);
});
