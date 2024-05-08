const benefitsContainer = document.querySelectorAll('.ben-grid-container');
const animations = document.querySelectorAll('.animation');
const overlay = document.querySelector('.overlay-animations');
const hdlnAni = document.querySelector('.headline-ani');
const paraEasy = document.querySelector('.para-wrapper-easy');

window.onscroll = function () {
  if (
    document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250
  ) {
    benefitsContainer.forEach((benefit) => {
      benefit.classList.add('showing');
    });
  } else {
    benefitsContainer.forEach((benefit) => {
      benefit.classList.remove('showing');
    });
  }
};

const observerAni = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      overlay.classList.add('overlay-showing');
      hdlnAni.classList.add('headline-active');

      entry.target.classList.add('animations-showing');

      paraEasy.classList.add('para-wrapper-active');
    }
  });
});
animations.forEach((animate) => {
  observerAni.observe(animate);
});
