//MENU TOGGLE

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}

//SLIDER

let firstSlider = document.querySelectorAll(".first-slide");
let secondSlider = document.querySelectorAll(".second-slide");
let thirdSlider = document.querySelectorAll(".third-slide");
let fourthSlider = document.querySelectorAll(".fourth-slide");
let arrowLeft1 = document.querySelector(".arrow-left-1");
let arrowLeft2 = document.querySelector(".arrow-left-2");
let arrowLeft3 = document.querySelector(".arrow-left-3");
let arrowLeft4 = document.querySelector(".arrow-left-4");
let arrowRight1 = document.querySelector(".arrow-right-1");
let arrowRight2 = document.querySelector(".arrow-right-2");
let arrowRight3 = document.querySelector(".arrow-right-3");
let arrowRight4 = document.querySelector(".arrow-right-4");
let current = 0;

//Reset Images

function reset1() {
  for (let i = 0; i < firstSlider.length; i++) {
    firstSlider[i].style.display='none';
  }
}

function reset2() {
  for (let i = 0; i < secondSlider.length; i++) {
    secondSlider[i].style.display='none';
  }
}
function reset3() {
  for (let i = 0; i < thirdSlider.length; i++) {
    thirdSlider[i].style.display='none';
  }
}

function reset4() {
  for (let i = 0; i < fourthSlider.length; i++) {
    fourthSlider[i].style.display='none';
  }
}

// First slide

function startSlide1() {
  reset1();
  firstSlider[0].style.display = 'block';
}

function startSlide2() {
  reset2();
  secondSlider[0].style.display = 'block';
}

function startSlide3() {
  reset3();
  thirdSlider[0].style.display = 'block';
}

function startSlide4() {
  reset4();
  fourthSlider[0].style.display = 'block';
}

// Go back to the previous slide
function slideLeft1() {
  reset1();
  firstSlider[current - 1].style.display = 'block';
  current--;
}

function slideLeft2() {
  reset2();
  secondSlider[current - 1].style.display = 'block';
  current--;
}

function slideLeft3() {
  reset3();
  thirdSlider[current - 1].style.display = 'block';
  current--;
}

function slideLeft4() {
  reset4();
  fourthSlider[current - 1].style.display = 'block';
  current--;
}

// Go to the next slide
function slideRight1() {
  reset1();
  firstSlider[current + 1].style.display = 'block';
  current++;
}

function slideRight2() {
  reset2();
  secondSlider[current + 1].style.display = 'block';
  current++;
}

function slideRight3() {
  reset3();
  thirdSlider[current + 1].style.display = 'block';
  current++;
}

function slideRight4() {
  reset4();
  fourthSlider[current + 1].style.display = 'block';
  current++;
}

// Event Listeners

arrowLeft1.addEventListener('click', function() {
  if (current === 0) {
    current = firstSlider.length;
  }
  slideLeft1();
});

arrowLeft2.addEventListener('click', function() {
  if (current === 0) {
    current = secondSlider.length;
  }
  slideLeft2();
});

arrowLeft3.addEventListener('click', function() {
  if (current === 0) {
    current = thirdSlider.length;
  }
  slideLeft3();
});

arrowLeft4.addEventListener('click', function() {
  if (current === 0) {
    current = fourthSlider.length;
  }
  slideLeft4();
});

arrowRight1.addEventListener('click', function() {
  if (current === firstSlider.length - 1) {
    current = -1;
  }
  slideRight1();
});

arrowRight2.addEventListener('click', function() {
  if (current === secondSlider.length - 1) {
    current = -1;
  }
  slideRight2();
});
arrowRight3.addEventListener('click', function() {
  if (current === thirdSlider.length - 1) {
    current = -1;
  }
  slideRight3();
});

arrowRight4.addEventListener('click', function() {
  if (current === fourthSlider.length - 1) {
    current = -1;
  }
  slideRight4();
});

//GALERRY TOGGLE

//First Gallery

let gallery1 = document.querySelector('.slider1');
let btn1 = document.getElementById('birthday-gallery');

btn1.addEventListener('click', () => {
  gallery1.classList.add('open');
  startSlide1();
});

gallery1.addEventListener('click', (e) => {
  if (e.target.classList.contains('slider1')) {
    gallery1.classList.remove('open');
  }
});

//Second Gallery

let gallery2 = document.querySelector('.slider2');
let btn2 = document.getElementById('wedding-gallery');

btn2.addEventListener('click', () => {
  gallery2.classList.add('open');
  startSlide2();
});

gallery2.addEventListener('click', (e) => {
  if (e.target.classList.contains('slider2')) {
    gallery2.classList.remove('open');
  }
});

//Third Gallery

let gallery3 = document.querySelector('.slider3');
let btn3 = document.getElementById('party-gallery');

btn3.addEventListener('click', () => {
  gallery3.classList.add('open');
  startSlide3();
});

gallery3.addEventListener('click', (e) => {
  if (e.target.classList.contains('slider3')) {
    gallery3.classList.remove('open');
  }
});

//Fourth Gallery

let gallery4 = document.querySelector('.slider4');
let btn4 = document.getElementById('other-gallery');

btn4.addEventListener('click', () => {
  gallery4.classList.add('open');
  startSlide4();
});

gallery4.addEventListener('click', (e) => {
  if (e.target.classList.contains('slider4')) {
    gallery4.classList.remove('open');
  }
});

