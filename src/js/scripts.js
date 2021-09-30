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





});


