const burgerButton = document.querySelector('.button');
const modalWindow = document.querySelector('.modal-window');
const asideBlock = modalWindow.querySelector('.aside');

const closeButton = asideBlock.querySelector('.button');
const overlay = document.querySelector('.overlay');

burgerButton.addEventListener ('click', function (){
    modalWindow.style.display = 'block';
    asideBlock.classList.add('aside--open');
});

closeButton.addEventListener ('click', function (){

    modalWindow.style.display = 'none';
    asideBlock.classList.remove('aside--open');
});

window.addEventListener ('click', function (e){
    if (e.target == overlay) {
        modalWindow.style.display = 'none';
    }
});