

const select = document.querySelector(".select")
const first_section = document.querySelector(".main_container")
const submit = document.querySelector(".sub")

const number = document.querySelector(".number");
const button = document.querySelectorAll(".but");

submit.addEventListener("click", () => {
    first_section.style.display = "none";
    select.style.display = "block";
  });

  button.forEach((magic) => {
    magic.addEventListener("click", () => {
      number.innerHTML = magic.innerHTML;
    });
  });