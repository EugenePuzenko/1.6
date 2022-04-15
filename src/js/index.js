import 'swiper/css';
import 'swiper/css/pagination';
import Swiper, { Pagination } from 'swiper';

Swiper.use({ Pagination });

import '../scss/style.scss';



const btnShowMore = document.querySelector('.button-show-more');
const textMore = document.querySelector('.main-row__full-descr--hidden');
const textMoreHidden = document.querySelector('.main-row__sup-descr');

btnShowMore.addEventListener ('click', function (){

  if (textMore.style.display === 'block') {

    textMore.style.display = 'none';
    btnShowMore.innerHTML = 'Читать далее';
    btnShowMore.classList.toggle('button-show-more--active');

    if (window.innerWidth >= 768) {

      textMoreHidden.style.display = 'block';

    }

  } else {

    textMore.style.display = 'block';
    btnShowMore.innerHTML = 'Скрыть';
    btnShowMore.classList.toggle('button-show-more--active');

    if (window.innerWidth >= 768) {

      textMoreHidden.style.display = 'none';

    }
  }
});


const burgerButton = document.querySelector('.button');
const asideBlock = document.querySelector('.aside');

const closeButton = asideBlock.querySelector('.button');
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener ('click', function (){

  overlay.style.display = 'block';
  asideBlock.classList.add('aside--open');

});

closeButton.addEventListener ('click', function (){

  overlay.style.display = 'none';
  asideBlock.classList.remove('aside--open');

});

window.addEventListener ('click', function (e){

  if (e.target == overlay) {

    overlay.style.display = 'none';
    asideBlock.classList.remove('aside--open');
    modalMessage.classList.remove('modal--open');
    modalPhone.classList.remove('modal--open');

    if (window.innerWidth >= 1120) {
      btnMessageClose.style.display = 'none';
      btnPhoneClose.style.display = 'none';
    }
  }
});



let swiper2
let swiper3
let swiper4

document.addEventListener('DOMContentLoaded', () => {
  const mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

  function swiperInit() {

    if (mobile.matches) {
      swiper4 = new Swiper('.prices-swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
      
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
        },
      });
    }

    if (mobile.matches) {
      swiper3 = new Swiper('.repair-swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
      
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
        },
      });
    }

    if (mobile.matches) {
      swiper2 = new Swiper('.companies-swiper', {
        loop: true,
        slidesPerView: 'auto',
      
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
        },
      });
    }
  }

  swiperInit()
});



const companiesBtnShowMore = document.querySelector('.companies-button-show-more');
const companiesBlock = document.querySelector('.more');

companiesBtnShowMore.addEventListener ('click', function (){

  if (companiesBlock.style.display === 'grid') {

    companiesBlock.style.display = 'none';
    companiesBtnShowMore.innerHTML = 'Показать всё';
    companiesBtnShowMore.classList.toggle('button-show-more--active');

  } else {

    companiesBlock.style.display = 'grid';
    companiesBtnShowMore.innerHTML = 'Скрыть';
    companiesBtnShowMore.classList.toggle('button-show-more--active');

  }
});


const repairBtnShowMore = document.querySelector('.repair__button-show-more');
const repairBlock = document.querySelector('.repair-more');

repairBtnShowMore.addEventListener ('click', function (){
  
  if (repairBlock.style.display === 'grid') {

    repairBlock.style.display = 'none';
    repairBtnShowMore.innerHTML = 'Показать всё';
    repairBtnShowMore.classList.toggle('button-show-more--active');

  } else {

    repairBlock.style.display = 'grid';
    repairBtnShowMore.innerHTML = 'Скрыть';
    repairBtnShowMore.classList.toggle('button-show-more--active');

  }
});



const btnPhone = document.querySelector('.button-phone');
const btnPhoneBurger = document.querySelector('.button-phone-burger');
const btnPhoneClose = document.querySelector('.modal__btn-close');

const modalPhone = document.querySelector('.modal');



btnPhone.addEventListener ('click', function () {
  
  modalPhone.classList.add('modal--open');

  if (window.innerWidth >= 768) {
    overlay.style.display = 'block';
  }

});

btnPhoneBurger.addEventListener ('click', function () {
  
  modalPhone.classList.add('modal--open');

  btnPhoneClose.classList.add('modal__btn-close--open');

  if (window.innerWidth >= 1120) {
    btnPhoneClose.style.display = 'flex';
    overlay.style.display = 'block';
  }

});

btnPhoneClose.addEventListener ('click', function (){

  modalPhone.classList.remove('modal--open');

  if (window.innerWidth >= 1120) {
    btnPhoneClose.style.display = 'none';
  }

  if (window.innerWidth >= 768) {
    overlay.style.display = 'none';
  }

});



const btnMessage = document.querySelector('.button-message');
const btnMessageBurger = document.querySelector('.button-message-burger');
const btnMessageClose = document.querySelector('.feedback__btn-close');

const modalMessage = document.querySelector('.feedback');



btnMessage.addEventListener ('click', function () {
  
  modalMessage.classList.add('modal--open');

  if (window.innerWidth >= 768) {
    overlay.style.display = 'block';
  }

});

btnMessageBurger.addEventListener ('click', function () {
  
  modalMessage.classList.add('modal--open');

  btnMessageClose.classList.add('modal__btn-close--open');


  if (window.innerWidth >= 1120) {
    btnMessageClose.style.display = 'flex';
    overlay.style.display = 'block';
  }

});

btnMessageClose.addEventListener ('click', function (){

  modalMessage.classList.remove('modal--open');


  if (window.innerWidth >= 1120) {
    btnMessageClose.style.display = 'none';
    overlay.style.display = 'none';
  }

  

  if (window.innerWidth >= 768) {
    overlay.style.display = 'none';
  }

});