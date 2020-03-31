const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

// Scenes
let scene = new ScrollMagic.Scene({ 
    duration: 6200,
    triggerElement: intro,
    triggerHook: 0
}).setPin(intro).addTo(controller);

// Text animation
const textAnim = TweenMax.fromTo(text, 2, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 1700,
    triggerElement: intro,
    triggerHook: 0
}).setTween(textAnim).addTo(controller);

// Video Animation
// let acceleration = 0.1;
let scrollpos = 0;
// let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    // delay += (scrollpos - delay) * acceleration;
    video.currentTime = scrollpos;
}, 33.3667);