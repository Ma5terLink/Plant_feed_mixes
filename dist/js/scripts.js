window.addEventListener('DOMContentLoaded', () => {

window.addEventListener('scroll', function () {
    const pUp = document.querySelector('.pageup');
    if (window.pageYOffset > 700) {
        pUp.classList.add('show');
        pUp.classList.remove('hide');
    } else {
        pUp.classList.remove('show');
        pUp.classList.add('hide');
    }
});

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(item => item.addEventListener('click', function(e) {
	e.preventDefault();
	const id = item.getAttribute('href').slice(1);

	document.getElementById(id).scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
}));


const modalProductSwitch = document.querySelectorAll('.modal__wrapperProductInfo-item');
modalProductSwitch.forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

const modalClose = document.querySelectorAll('.modal__close'),
      modalOverlay = document.querySelector('.overlay');
modalClose.forEach(item=> {
    item.addEventListener('click', () => {
        item.parentElement.classList.remove('show');
        modalOverlay.classList.remove('show');
    });
});

function closeMobMenu() {
    menuOverLay.classList.remove('show');
    mobMenu.classList.remove('active');
}

const hamburgerBtn = document.querySelector('.hamburger'),
      mobMenu = document.querySelector('.mobMenu'),
      mobMenuLinks = document.querySelectorAll('.mobMenu ul li a'),
      mobMenuCloseBtn = document.querySelector('.mobMenu__btn-close'),
      menuOverLay = document.querySelector('.menuOverlay');

mobMenuLinks.forEach(item => {
    item.addEventListener('click', () => closeMobMenu());
});

hamburgerBtn.addEventListener('click', () => {
    menuOverLay.classList.add('show');
    mobMenu.classList.add('active');
});
mobMenuCloseBtn.addEventListener('click', () => closeMobMenu());






let slideTop = 0;
const partnersCards = document.querySelector('.partners__cardsWrapper');

document.querySelector('.partners__slider-next').addEventListener('click', function() { 
    slideTop = slideTop + 305;
    if (slideTop > 610) {
        slideTop = 0;
    }
    partnersCards.style.top = -slideTop + 'px';
});
document.querySelector('.partners__slider-prev').addEventListener('click', function() {
    slideTop = slideTop - 305;
    if (slideTop < 0) {
        slideTop = 610;
    }
    partnersCards.style.top = -slideTop + 'px';
});


let offset = 0;
const sliderLine = document.querySelector('.news__cardsWrapper');
const isMobile = () => window.innerWidth <= 576;
document.querySelector('.news__slider-next').addEventListener('click', function() {
if (isMobile()) {
    offset = offset + 300; 
    if (offset > 930)  offset = 0;
} else {
    offset = offset + 530; 
    if (offset > 530)  offset = 0;
}
sliderLine.style.left = -offset + 'px';
});
document.querySelector('.news__slider-prev').addEventListener('click', function() {
if (isMobile()) {
    offset = offset - 300; 
    if (offset < 0)  offset = 930;
} else {
    offset = offset - 530; 
    if (offset < 0)  offset = 530;
}
sliderLine.style.left = -offset + 'px';
});


});


