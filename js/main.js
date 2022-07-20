gsap.from(".hero__title", {opacity: 0, duration: 2, ease: "circle"});
gsap.from(".hero__title", {y: 50, duration: 1.5, ease: "expo"});
gsap.from(".hero__descr", {opacity: 0, delay: 0.5, duration: 2.5, ease: "circle"});
gsap.from(".hero__btn", {opacity: 0, duration: 2, ease: "circle"});
gsap.from(".hero__btn", {y: 30, duration: 1.5, ease: "expo"});
gsap.from("#photo-1", {opacity: 0, scale: 0.9, delay: 0.8, duration: 0.5, ease: "circle"});
gsap.from("#photo-2", {opacity: 0, scale: 0.9, delay: 1, duration: 0.5, ease: "circle"});
gsap.from("#photo-3", {opacity: 0, scale: 0.9, delay: 1.2, duration: 0.5, ease: "circle"});
gsap.from(".photos__author", {opacity: 0, delay: 2, duration: 3, ease: "circle"});

let tl = gsap.timeline({paused: true})
tl.fromTo(".menu", {visibility: "hidden", y: 100, opacity: 0},
                    {visibility: "visible", y: 0, opacity: 1, duration: 0.5, ease: "circle"});
tl.from(".menu__top", {opacity: 0, y: -50, duration: 0.5, ease: "circle"});
tl.from(".nav__list", {opacity: 0, y: 25, duration: 0.5, ease: "circle"});
tl.from(".social, .menu__right, .sub-menu", {y: 25, opacity: 0, duration: 0.5, ease: "circle"});

let open = document.querySelector('.burger');
let close = document.querySelector('.close');
open.addEventListener("click", () => tl.play());
close.addEventListener("click", () => tl.reverse());