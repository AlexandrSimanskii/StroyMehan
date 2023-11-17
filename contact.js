// FormSubmit
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  console.log(e.target);
  e.preventDefault();
});
