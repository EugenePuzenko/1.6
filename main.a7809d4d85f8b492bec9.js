(()=>{"use strict";var e,t={866:(e,t,n)=>{var o=n(257);o.ZP.use({Pagination:o.tl});var i=document.querySelector(".button-show-more"),s=document.querySelector(".main-row__full-descr--hidden"),l=document.querySelector(".main-row__sup-descr");i.addEventListener("click",(function(){"block"===s.style.display?(s.style.display="none",i.innerHTML="Читать далее",i.classList.toggle("button-show-more--active"),window.innerWidth>=768&&(l.style.display="block")):(s.style.display="block",i.innerHTML="Скрыть",i.classList.toggle("button-show-more--active"),window.innerWidth>=768&&(l.style.display="none"))}));var r=document.querySelector(".button"),a=document.querySelector(".aside"),d=a.querySelector(".button"),c=document.querySelector(".overlay");r.addEventListener("click",(function(){c.style.display="block",a.classList.add("aside--open")})),d.addEventListener("click",(function(){c.style.display="none",a.classList.remove("aside--open")})),window.addEventListener("click",(function(e){e.target==c&&(c.style.display="none",a.classList.remove("aside--open"),k.classList.remove("modal--open"),h.classList.remove("modal--open"),window.innerWidth>=1120&&(g.style.display="none",b.style.display="none"))})),document.addEventListener("DOMContentLoaded",(function(){var e=window.matchMedia("(min-width: 0px) and (max-width: 767px)");e.matches&&new o.ZP(".prices-swiper",{loop:!0,slidesPerView:"auto",spaceBetween:16,modules:[o.tl],pagination:{el:".swiper-pagination"}}),e.matches&&new o.ZP(".repair-swiper",{loop:!0,slidesPerView:"auto",spaceBetween:16,modules:[o.tl],pagination:{el:".swiper-pagination"}}),e.matches&&new o.ZP(".companies-swiper",{loop:!0,slidesPerView:"auto",spaceBetween:16,modules:[o.tl],pagination:{el:".swiper-pagination"}})}));var u=document.querySelector(".companies-button-show-more"),p=document.querySelector(".more");u.addEventListener("click",(function(){"grid"===p.style.display?(p.style.display="none",u.innerHTML="Показать всё",u.classList.toggle("button-show-more--active")):(p.style.display="grid",u.innerHTML="Скрыть",u.classList.toggle("button-show-more--active"))}));var y=document.querySelector(".repair__button-show-more"),m=document.querySelector(".repair-more");y.addEventListener("click",(function(){"grid"===m.style.display?(m.style.display="none",y.innerHTML="Показать всё",y.classList.toggle("button-show-more--active")):(m.style.display="grid",y.innerHTML="Скрыть",y.classList.toggle("button-show-more--active"))}));var w=document.querySelector(".button-phone"),v=document.querySelector(".button-phone-burger"),b=document.querySelector(".modal__btn-close"),h=document.querySelector(".modal");w.addEventListener("click",(function(){h.classList.add("modal--open"),window.innerWidth>=768&&(c.style.display="block")})),v.addEventListener("click",(function(){h.classList.add("modal--open"),b.classList.add("modal__btn-close--open"),window.innerWidth>=1120&&(b.style.display="flex",c.style.display="block")})),b.addEventListener("click",(function(){h.classList.remove("modal--open"),window.innerWidth>=1120&&(b.style.display="none"),window.innerWidth>=768&&(c.style.display="none")}));var L=document.querySelector(".button-message"),f=document.querySelector(".button-message-burger"),g=document.querySelector(".feedback__btn-close"),k=document.querySelector(".feedback");L.addEventListener("click",(function(){k.classList.add("modal--open"),window.innerWidth>=768&&(c.style.display="block")})),f.addEventListener("click",(function(){k.classList.add("modal--open"),g.classList.add("modal__btn-close--open"),window.innerWidth>=1120&&(g.style.display="flex",c.style.display="block")})),g.addEventListener("click",(function(){k.classList.remove("modal--open"),window.innerWidth>=1120&&(g.style.display="none",c.style.display="none"),window.innerWidth>=768&&(c.style.display="none")}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,n,i,s)=>{if(!n){var l=1/0;for(c=0;c<e.length;c++){for(var[n,i,s]=e[c],r=!0,a=0;a<n.length;a++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](n[a])))?n.splice(a--,1):(r=!1,s<l&&(l=s));if(r){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,i,s]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,s,[l,r,a]=n,d=0;if(l.some((t=>0!==e[t]))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(a)var c=a(o)}for(t&&t(n);d<l.length;d++)s=l[d],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(c)},n=self.webpackChunksection_1_web=self.webpackChunksection_1_web||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,[257],(()=>o(866)));i=o.O(i)})();
//# sourceMappingURL=main.a7809d4d85f8b492bec9.js.map