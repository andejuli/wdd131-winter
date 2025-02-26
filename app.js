import { checkForInjection } from './inputSanitizer.mjs';

document.querySelector("#signupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (checkForInjection(event.target)) {
    alert("Form submitted safely!");
    event.target.reset();
  }
});
