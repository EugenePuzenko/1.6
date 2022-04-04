const btnShowMore = document.querySelector('.main-row__button-show-more');
const textMore = document.querySelector('.main-row-text--hidden');
const textMoreHidden = document.querySelector('.main-row__sup-descr');

btnShowMore.addEventListener ('click', function (){
  if (textMore.style.display === 'block') {
    textMore.style.display = 'none';
    btnShowMore.innerHTML = 'Читать далее';
    btnShowMore.classList.toggle('main-row__button-show-more--active');

    if (window.innerWidth >= 768) {
      textMoreHidden.style.display = 'block';
    }
  } else {
    textMore.style.display = 'block';
    btnShowMore.innerHTML = 'Скрыть';
    btnShowMore.classList.toggle('main-row__button-show-more--active');

    if (window.innerWidth >= 768) {
      textMoreHidden.style.display = 'none';
    }
  }
});





const breakpoint = window.matchMedia( '(min-width: 1120px)' );
  let mySwiper;

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      mySwiper.destroy( true, true );
    } else {
     enableSwiper()
  }};

  const enableSwiper = () => {
    mySwiper = new Swiper ('.swiper', {
      loop: true,
  
      spaceBetween: 0,
      slidesPerView: 'auto'
})
};

breakpoint.addEventListener('change', breakpointChecker);
breakpointChecker();


import Swiper, {Pagination} from 'swiper/swiper-bundle';
