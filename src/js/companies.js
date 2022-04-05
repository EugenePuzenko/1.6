
import Swiper, {Pagination} from 'swiper';
// import 'swiper/swiper-bundle.css';


Swiper.use({ Pagination });

const companiesSwiper = new Swiper('.companies-swiper', {
    loop: true,
    slidesPerView: 'auto',

    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
    },
});

