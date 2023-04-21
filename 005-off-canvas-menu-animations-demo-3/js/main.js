const body = document.body;
const button = document.querySelector("button");

button.addEventListener("click", () => {
  body.classList.toggle("offsite-is-open");
});
