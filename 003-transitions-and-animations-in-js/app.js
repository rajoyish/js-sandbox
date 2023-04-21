// Add is-highlighted class to button on click
const button = document.querySelector("button");
button.addEventListener("click", (e) =>
  e.target.classList.add("is-highlighted")
);

// // The transitionend event
document.addEventListener("transitionend", (e) => {
  console.log("event.target is ", e.target);
  console.log("event.propertyName is ", e.propertyName);
});

// The animationend event
document.addEventListener("animationend", (e) => {
  console.log("event.target is ", e.target);
  console.log("event.animationName is ", e.animationName);
});

// EXCERCISES
const element = document.querySelector(".element");

element.addEventListener("click", (ev) => {
  ev.currentTarget.style.animationPlayState = "running";
});

element.addEventListener("animationend", (e) => {
  const el = e.currentTarget;
  el.parentNode.removeChild(el);
});
