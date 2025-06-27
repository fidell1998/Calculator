const button = document.querySelectorAll("button");
const input = document.getElementById("number-input");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault(); // ⛔️ Stops form submission
    const btnValue = button.value;
    input.value = btnValue;
  });
});
