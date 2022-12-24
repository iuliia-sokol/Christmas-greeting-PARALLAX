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

    function playBells(e) {
      audioBells.play();
      // console.log('bells');
    }

    const contentElement = document.querySelector('.content__container');
    const windowHeight = window.innerHeight;

    const finalPos =
      (scrollY / (contentElement.offsetTop - windowHeight)) * 100;

    if (finalPos >= 100) {
      christmasAnimation(100);
      contentElement.addEventListener('mouseover', playBells);
      contentElement.addEventListener('touchstart', playBells);
    } else {
      christmasAnimation(finalPos);
      contentElement.removeEventListener('mouseover', playBells);
      contentElement.removeEventListener('touchstart', playBells);
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

// CONTENT TEXT

const elts = {
  text1: document.getElementById('text1'),
  text2: document.getElementById('text2'),
};

const texts = [
  'Merry Christmas!',
  ' Веселого Різдва! ',
  ' !عيد ميلاد مجيد ',
  '圣诞快乐! ',
  ' Čestit Božić! ',
  ' Veselé Vánoce! ',
  'Glædelig Jul!',
  ' Prettige Kerstdagen! ',
  'Häid jõule!',
  'Hauskaa joulua!',
  'Joyeux Noël!',
  'Frohe Weihnachten!',
  'Χαρούμενα Χριστούγεννα!',
  'Buon Natale!',
  'メリークリスマス!',
  '메리 크리스마스! ',
  'Priecīgus Ziemassvētkus!',
  'Linksmų šv. Kalėdų!',
  'Среќен Божиќ!',
  'God jul! ',
  'Wesołych Świąt!',
  'Feliz Natal!',
  'Crăciun fericit!',
  'Srećan Božić!',
  'Kirismas Wanaagsan!',
  'Feliz Navidad!',
  'Heri ya krismas!',
  'З Калядамі!',
  'Счастливого Рождества!',
];

const morphTime = 0.7;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 20)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 20)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.opacity = '100%';
  elts.text1.style.opacity = '0%';
}

function animateText() {
  requestAnimationFrame(animateText);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 2000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}
animateText();

// CONTENT LETTER

document.querySelector('.envelope').addEventListener('click', function () {
  if (document.querySelector('.letter').classList.contains('letter--open')) {
    document.querySelector('.letter').classList.remove('letter--open');
    document.querySelector('.letter').classList.add('letter--close');
    setTimeout(function () {
      document.querySelector('.letter').classList.remove('letter--close');
    }, 600);
  } else {
    document.querySelector('.letter').classList.remove('letter--close');
    document.querySelector('.letter').classList.add('letter--open');
  }
});

document.querySelector('.paper-close').addEventListener('click', function () {
  document.querySelector('.letter').classList.remove('letter--open');
  document.querySelector('.letter').classList.add('letter--close');

  setTimeout(function () {
    document.querySelector('.letter').classList.remove('letter--close');
  }, 600);
});

// const openMapModalBtn = document.querySelector('.open-modal');
// const closeMapModalBtn = document.querySelector('.modal__close-btn');
// const mapModal = document.querySelector('.modal-overlay');
// const mapModalWindow = document.querySelector('.modal');

// openMapModalBtn.addEventListener('click', function () {
//   mapModal.classList.remove('is-hidden');
// });

// closeMapModalBtn.addEventListener('click', function () {
//   mapModal.classList.toggle('is-hidden');
// });

// mapModal.addEventListener('click', e => {
//   const closeMapModal = e.composedPath().includes(mapModalWindow);
//   if (!closeMapModal) {
//     mapModal.classList.add('is-hidden');
//   }
// });

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     mapModal.classList.add('is-hidden');
//   }
// });
