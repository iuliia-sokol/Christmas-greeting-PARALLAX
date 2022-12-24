import 'animate.css';

window.addEventListener('load', windowLoad);

const audio = document.getElementById('audio');
const playBtn = document.querySelector('.audio-btn');
const stopBtn = document.querySelector('.audio-btn-off');
playBtn.addEventListener('click', e => {
  audio.play();
  e.target.classList.add('visually-hidden');
  stopBtn.classList.remove('visually-hidden');
});

stopBtn.addEventListener('click', e => {
  audio.pause();
  audio.currentTime = 0;
  playBtn.classList.remove('visually-hidden');
  stopBtn.classList.add('visually-hidden');
});

function windowLoad() {
  document.documentElement.classList.add('loaded');

  const page = document.querySelector('.page');
  const parallaxItems = document.querySelectorAll('[class*="__inset"]');
  const speed = 0.05;

  let posX = 0;
  let cXprocent = 0;

  page.addEventListener('mousemove', parallaxAnimation);

  function parallaxAnimation(e) {
    cursorHandle(e);
    const parallaxWidth = window.innerWidth;
    const cX = e.pageX - parallaxWidth / 2;
    cXprocent = (cX / parallaxWidth) * 100;
  }

  function setParallaxAnimationStyle(e) {
    const distX = cXprocent - posX;
    posX = posX + distX * speed;

    parallaxItems.forEach(parallaxItem => {
      const value = parallaxItem.dataset.prxValue
        ? +parallaxItem.dataset.prxValue
        : 1;

      parallaxItem.style.cssText = `transform: translateX(${posX / value}%)`;
    });
    requestAnimationFrame(setParallaxAnimationStyle);
  }

  setParallaxAnimationStyle();

  // Scroll
  const moon = document.querySelector('.moon');
  const buildings = document.querySelectorAll('.building');
  const tree = document.querySelector('.tree');
  const stairs = document.querySelector('.stairs');
  const train = document.querySelector('.train');
  const santaItems = document.querySelectorAll('.santa>*');
  const mainArrow = document.querySelector('.arrow-container--main');

  window.addEventListener('scroll', createPosition);
  createPosition();

  function createPosition() {
    const audioBells = document.getElementById('audio-bells');
    const contentElement = document.querySelector('.content__container');
    const windowHeight = window.innerHeight;
    function playBells(e) {
      audioBells.play();
    }

    const finalPos =
      (scrollY / (contentElement.offsetTop - windowHeight)) * 100;
    // finalPos < 100 ?  :

    if (finalPos >= 100) {
      christmasAnimation(100);
      contentElement.addEventListener('mouseenter', playBells);
    } else {
      christmasAnimation(finalPos);
      contentElement.removeEventListener('mouseenter', playBells);
    }
  }

  function christmasAnimation(finalPos) {
    const arrowAnim = {
      translate: (70 / 100) * finalPos,
      scale: 1 + (2 / 100) * finalPos,
    };

    mainArrow.style.cssText = `transform: translate(0, ${arrowAnim.translate}%) 
    scale(${arrowAnim.scale}) rotate(180deg)`;

    const moonAnim = {
      translate: (50 / 100) * finalPos,
      scale: 1 + (2 / 100) * finalPos,
    };
    moon.style.cssText = `transform: translate(0, ${moonAnim.translate}%) 
    scale(${moonAnim.scale})`;

    const stairsAnim = {
      translate: (70 / 100) * finalPos,
      scale: 1 + (2 / 100) * finalPos,
    };
    stairs.style.cssText = `transform: translate(0, ${stairsAnim.translate}%) 
    scale(${stairsAnim.scale})`;

    const treeAnim = {
      translate: (70 / 100) * finalPos,
      scale: 1 + (1.5 / 100) * finalPos,
    };
    tree.style.cssText = `transform: translate(0, ${treeAnim.translate}%) 
    scale(${treeAnim.scale})`;

    buildings.forEach((building, index) => {
      const buildingAnim = {
        translate: ((30 * (buildings.length - index)) / 100) * finalPos,
        scale: 1 + (2 / 100) * finalPos,
      };

      building.style.cssText = `transform: translate(0,${buildingAnim.translate}%) 
    scale(${buildingAnim.scale})`;
    });

    const trainAnim = {
      translate: 1 * finalPos,
    };
    train.style.cssText = `transform: translate(-${trainAnim.translate}%, ${trainAnim.translate}%)`;

    santaItems.forEach((santaItem, index) => {
      const santaAnim = {
        left: ((100 + 10 * index) / 100) * finalPos,
      };
      santaItem.style.left = `${santaAnim.left}%`;
    });
  }
}

// CURSOR

function cursorHandle(e) {
  [0.7, 0.9, 0.8, 0.5, 0.25, 0.6, 0.4, 0.3, 0.2].forEach(function (i) {
    const j = (1 - i) * 20;
    const elem = document.createElement('div');
    const precision = 30;
    const randomnum =
      Math.floor(
        Math.random() * (10 * precision - 1 * precision) + 1 * precision
      ) /
      (1 * precision);

    const rOpacity = randomnum / 20;
    const rSize = randomnum / 120;

    elem.style.position = 'fixed';
    elem.classList.add('star-five');
    elem.style.zIndex = 10000000;
    elem.style.transform = `rotate(35deg) scale(${rSize})`;

    elem.style.top =
      e.pageY -
      window.scrollY +
      Math.round(Math.random() * j - j / 2) -
      100 +
      'px';

    elem.style.left =
      e.pageX + Math.round(Math.random() * j - j / 2) - 100 + 'px';

    elem.style.opacity = rOpacity;
    elem.style.pointerEvents = 'none';

    document.body.appendChild(elem);

    let timerID = window.setTimeout(function () {
      document.body.removeChild(elem);
      clearTimeout(timerID);
    }, Math.round(Math.random() * i * 1500));
  });
}
