let counterValue = 0;
const decrementButton = document.querySelector(
  `button[data-action="decrement"]`
);

const incrementButton = document.querySelector(
  `button[data-action="increment"]`
);

const counter = document.getElementById("value");

decrementButton.addEventListener("click", onDecrementClick);

incrementButton.addEventListener("click", onIncrementClick);

function onDecrementClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
function onIncrementClick() {
  counterValue += 1;
  counter.textContent = counterValue;
}
