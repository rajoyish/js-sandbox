const box = document.querySelector(".box");
const ballon = document.querySelector(".ballon");
const ball = document.querySelector(".ball");
const volleyball = document.querySelector(".volleyball");
const fish = document.querySelector(".fish");

TweenMax.to(box, 2, { x: 400 });

TweenMax.from(ballon, 2, {
  y: 100,
  opacity: 0,
});

ball.addEventListener("click", (e) => {
  TweenMax.to(ball, 1.5, {
    y: 400,
    // ease: "Bounce.easeOut",
    ease: "Elastic.easeOut",
  });
});

volleyball.addEventListener("click", (e) => {
  TweenMax.to(volleyball, 2.5, {
    x: 300,
    rotation: 720,
    transformOrigin: "50% 50%",
    ease: "Power1.easeOut",
  });

  TweenMax.to(volleyball, 2, {
    y: 300,
    rotation: 720,
    ease: "Bounce.easeOut",
    delay: 1,
  });
});

const tl = new TimelineMax({});
tl.to(fish, 1, { x: -200 });
tl.to(fish, 1, {
  y: -200,
  rotation: 90,
});
