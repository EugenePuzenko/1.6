(()=>{"use strict";var e,t={866:(e,t,n)=>{var o=n(257);o.ZP.use({Pagination:o.tl});var i=document.querySelector(".button-show-more"),s=document.querySelector(".main-row-text--hidden"),r=document.querySelector(".main-row__sup-descr");i.addEventListener("click",(function(){"block"===s.style.display?(s.style.display="none",i.innerHTML="Читать далее",i.classList.toggle("button-show-more--active"),window.innerWidth>=768&&(r.style.display="block")):(s.style.display="block",i.innerHTML="Скрыть",i.classList.toggle("button-show-more--active"),window.innerWidth>=768&&(r.style.display="none"))}));var a=document.querySelector(".button"),l=(document.querySelector(".modal-window"),document.querySelector(".aside")),d=l.querySelector(".button"),c=document.querySelector(".overlay");a.addEventListener("click",(function(){c.style.display="block",l.classList.add("aside--open")})),d.addEventListener("click",(function(){c.style.display="none",l.classList.remove("aside--open")})),window.addEventListener("click",(function(e){e.target==c&&(c.style.display="none",l.classList.remove("aside--open"),k.classList.remove("modal--open"),b.classList.remove("modal--open"))})),document.addEventListener("DOMContentLoaded",(function(){var e=window.matchMedia("(min-width: 0px) and (max-width: 767px)"),t=window.matchMedia("(min-width: 0px) and (max-width: 1119px)");e.matches&&new o.ZP(".prices-swiper",{loop:!0,slidesPerView:"auto",spaceBetween:16,modules:[o.tl],pagination:{el:".swiper-pagination"}}),e.matches&&new o.ZP(".repair-swiper",{loop:!0,slidesPerView:"auto",spaceBetween:16,modules:[o.tl],pagination:{el:".swiper-pagination"}}),e.matches&&new o.ZP(".companies-swiper",{loop:!0,slidesPerView:"auto",modules:[o.tl],pagination:{el:".swiper-pagination"}}),t.matches&&new o.ZP(".main__swiper",{loop:!0,slidesPerView:"auto"})}));var u=document.querySelector(".companies-button-show-more"),p=document.querySelector(".more");u.addEventListener("click",(function(){"grid"===p.style.display?(p.style.display="none",u.innerHTML="Показать всё",u.classList.toggle("button-show-more--active")):(p.style.display="grid",u.innerHTML="Скрыть",u.classList.toggle("button-show-more--active"))}));var m=document.querySelector(".repair__button-show-more"),y=document.querySelector(".repair-more");m.addEventListener("click",(function(){"grid"===y.style.display?(y.style.display="none",m.innerHTML="Показать всё",m.classList.toggle("button-show-more--active")):(y.style.display="grid",m.innerHTML="Скрыть",m.classList.toggle("button-show-more--active"))}));var w=document.querySelector(".button-phone"),v=document.querySelector(".button-phone-burger"),L=document.querySelector(".modal__btn-close"),b=document.querySelector(".modal");w.addEventListener("click",(function(){b.classList.add("modal--open")})),v.addEventListener("click",(function(){b.classList.add("modal--open"),L.classList.add("modal__btn-close--open"),window.innerWidth>=1120&&(L.style.display="flex")})),L.addEventListener("click",(function(){b.classList.remove("modal--open"),window.innerWidth>=1120&&(L.style.display="none")}));var h=document.querySelector(".button-message"),f=document.querySelector(".button-message-burger"),g=document.querySelector(".feedback__btn-close"),k=document.querySelector(".feedback");h.addEventListener("click",(function(){k.classList.add("modal--open")})),f.addEventListener("click",(function(){k.classList.add("modal--open"),g.classList.add("modal__btn-close--open"),window.innerWidth>=1120&&(g.style.display="flex")})),g.addEventListener("click",(function(){k.classList.remove("modal--open"),window.innerWidth>=1120&&(g.style.display="none")}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,i,s)=>{if(!n){var r=1/0;for(c=0;c<e.length;c++){for(var[n,i,s]=e[c],a=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(o.O).every((e=>o.O[e](n[l])))?n.splice(l--,1):(a=!1,s<r&&(r=s));if(a){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,i,s]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[r,a,l]=n,d=0;if(r.some((t=>0!==e[t]))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(l)var c=l(o)}for(t&&t(n);d<r.length;d++)s=r[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=self.webpackChunksection_1_web=self.webpackChunksection_1_web||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[257],(()=>o(866)));i=o.O(i)})();
//# sourceMappingURL=main.f9b1a3f31af06a75fdff.js.map