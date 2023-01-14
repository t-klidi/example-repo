const accordion = document.querySelector(".main-container");
const span = document.querySelector("span");

span.forEach((span) => {
  console.log(span);
  span.addEventListener("click", () => {
    accordion.classList.toggle("active");
  });
});
