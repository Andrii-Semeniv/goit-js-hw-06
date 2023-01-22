function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const box = document.getElementById("boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  const amount = document.querySelector("input").value;
  createBoxes(amount);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();

    element.style.width = 30 + i * 10 + "px";
    element.style.height = 30 + i * 10 + "px";

    box.append(element);
  }
}

destroyBtn.addEventListener("click", () => {
  box.innerHTML = "";
});
