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
  // elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 20)}px)`;
  // elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  // elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 20)}px)`;
  // elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

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

const wishesEN = [
  'Have a sparkling New Year!',
  'New adventures are around the corner. Happy New Year!',
  'May the new year bless you with health, wealth, and happiness.',
  'Out with the old, in with the new! Happy New Year!',
  'May the new year bring you peace, joy, and happiness.',
  'Wishing you and yours health and prosperity in the new year.',
  'Let your dreams take flight in the new year!',
  'Wishing you nothing but happiness in the new year.',
  '01.01 is the first blank page of a 365-page book. Write a good one!',
  'Have a promising and fulfilling New Year!',
  'May you discover everything you are looking for in the new year right inside yourself!',
  'As the new year draws close, I hope it`s filled with the promises of a hopeful tomorrow.',
  'You have come so far already, just think of how much you’ll grow in the year to come!',
  'Life is short. Dream big and make the most of 2023!',
  'Happy New Year! May the coming year be full of grand adventures and opportunities.',
  'It is time to forget the past and celebrate a new start. Happy New Year!',
  'Happy New Year! I hope all your dreams come true in 2023. Onwards and upwards!',
];

const wishesUA = [
  'Хай Новий рік добробут твій покращить, щоб гроші в вас і втілювались мрії.',
  'Рік Новий — казковий час! Хай здивує щастям вас',
  'Світла й радощів багато! Щоб життя було, як свято!',
  'З Новим роком!З новим щастям! Хай завжди в очах іскряться yсміх, радість і кохання.',
  'Зичу сонця та світлих надій, миру й втіхи на кожному кроці!',
  'Хай щастя і радість тебе зустрічають, як ніч новорічну бенгальські вогні!',
  'Кохати бажаю, коханими бути, про все погане навіки забути.',
  'Бажаю, щоб у Новорічну ніч турботи щезли з твоїх плеч. Живи яскраво та красиво!',
  'Нехай Новий 2023 рік принесе всім перемогу, мир та процвітання.',
  'Нехай все найпрекрасніше і чудове трапиться в твоєму шляху. З 2023 роком!',
  'Хай рік принесе радість, сміх, гарний настрій, тепло домашнього вогнища і щастя!',
  'Бажаю виконання найпотаємніших бажань!',
  'Успіхів, везіння і безмежного щастя в новому році!',
  'Нехай же 2023-й рік подарує найголовніше – перемогу та мир.',
  'Нехай 12 місяців Нового року дивують тільки приємними новинами.',
  'Нехай 2023 рік стане найщасливішим у житті.',
  'З Новим 2023 роком! Нехай він видасться переможним у всіх сенсах!',
  '2023-й хай буде щасливий. Але головне – нехай він буде переможно мирним.',
];

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

    const wishUaElement = document.querySelector('.paper-text');
    const wishEnElement = document.querySelector('.paper-text-en');

    if (wishUaElement) {
      let randomWishUA = wishesUA[Math.floor(Math.random() * wishesUA.length)];
      wishUaElement.textContent = `${randomWishUA}`;
    }

    if (wishEnElement) {
      let randomWishEN = wishesEN[Math.floor(Math.random() * wishesEN.length)];
      wishEnElement.textContent = `${randomWishEN}`;
    }
  }
});

document.querySelector('.paper-close').addEventListener('click', function () {
  document.querySelector('.letter').classList.remove('letter--open');
  document.querySelector('.letter').classList.add('letter--close');

  setTimeout(function () {
    document.querySelector('.letter').classList.remove('letter--close');
  }, 600);
});
