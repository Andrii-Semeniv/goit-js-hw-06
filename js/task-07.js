const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const fontSizeControl = range.addEventListener("input", () => {
  text.style.fontSize = `${range.value}px`;
});
