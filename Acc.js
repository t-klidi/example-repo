const accordion = document.querySelector(".main-container");
const icons = document.querySelector(".icon");

try {
  for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", () => {
      icons[i].classList.toggle("active");
      console.log("icons");
    });
  }
} catch (e) {
  console.log("something went wrong", e);
}
