const inputArea = document.getElementById("validation-input");

inputArea.addEventListener("blur", () => {
  inputArea.classList.add("invalid");
  if (Number(inputArea.dataset.length) === inputArea.value.length) {
    inputArea.classList.replace("invalid", "valid");
  }
});
