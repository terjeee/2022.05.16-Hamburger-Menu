const navBar = document.querySelector(`.navBar`);
const containerOverlay = document.querySelector(`.containerOverlay`);
const navLinks = document.querySelectorAll(`#navLink`);

navBar.addEventListener(`click`, function (e) {
  containerOverlay.classList.toggle(`hidden`);
  navBar.style.color === `white`
    ? (navBar.style.color = `black`)
    : (navBar.style.color = `white`);
});

navLinks.forEach(link =>
  link.addEventListener(`click`, function (e) {
    console.log(e);
    console.log(link);
    containerOverlay.classList.remove(`hidden`);
  })
);
