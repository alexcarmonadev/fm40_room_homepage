/* ------------MOBILE MENU------------ */
const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

let menuOpen = false;

const openMenu = () => {
  if (!menuOpen) {
    btnMenu.src = '../assets/images/icon-close.svg';
    btnMenu.style.width = '1rem';
    menu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    overlay.classList.toggle('overlay--hidden');
    menuOpen = true;
  } else {
    btnMenu.src = '../assets/images/icon-hamburger.svg';
    btnMenu.style.width = '1.2rem';
    menu.style.display = 'none';
    document.body.style.overflow = 'visible';
    overlay.classList.toggle('overlay--hidden');
    menuOpen = false;
    window.location.reload();
  }
};

btnMenu.addEventListener('click', openMenu);

/* ------------SLIDERS------------ */
const btnL = document.querySelector('.slider__left');
const btnR = document.querySelector('.slider__right');
const img = document.querySelectorAll('.img-main-box');
const texts = document.querySelectorAll('.article-texts');

let index = 0;

function previmg() {
  if (index === 0) {
    index = 3;
  }
  img[index % img.length].classList.replace('active', 'hidden');
  img[(index - 1) % img.length].classList.replace('hidden', 'active');
  texts[index % texts.length].classList.replace('active', 'hidden');
  texts[(index - 1) % texts.length].classList.replace('hidden', 'active');
  index--;
}

function nextimg() {
  img[index % img.length].classList.replace('active', 'hidden');
  img[(index + 1) % img.length].classList.replace('hidden', 'active');
  texts[index % texts.length].classList.replace('active', 'hidden');
  texts[(index + 1) % texts.length].classList.replace('hidden', 'active');
  index++;
}

btnL.addEventListener('click', previmg);
btnR.addEventListener('click', nextimg);

/* ------------MOVE SLIDERS WITH KEYBOARD KEYS------------ */
document.addEventListener('keydown', (event) => {
  if (event.which === 37) {
    previmg();
  } else if (event.which === 39) {
    nextimg();
  }
});
