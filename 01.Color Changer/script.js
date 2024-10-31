const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      e.target.id === "grey" ||
      e.target.id === "white" ||
      e.target.id === "yellow" ||
      e.target.id === "blue"
    ) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
