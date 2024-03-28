function operate() {
  currentOperand = Number(currentOperand);
  previousOperand = Number(previousOperand);

  switch (operator) {
    case "+":
      previousOperand += currentOperand;
      break;
    case "-":
      previousOperand -= currentOperand;
      break;
    case "/":
      previousOperand /= currentOperand;
      break;
    case "x":
      previousOperand *= currentOperand;
      break;
  }
}

const display = document.querySelector("#displayContainer");

const numbers = document.querySelectorAll(".numberBtn");
const operators = document.querySelectorAll(".operatorBtn");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const change = document.querySelector("#change");
const percent = document.querySelector("#percent");
const del = document.querySelector("#del");

let currentOperand = "";
let previousOperand = "";
let operator = "";

numbers.forEach((number) =>
  number.addEventListener("click", function () {
    if (currentOperand.length <= 10) handleNumber(this.textContent);
    display.textContent = currentOperand;
  })
);

operators.forEach((op) =>
  op.addEventListener("click", function () {
    handleOperator(this.textContent);
  })
);

clear.addEventListener("click", function () {
  previousOperand = "";
  operator = "";
  currentOperand = "";
  display.textContent = currentOperand;
});

equal.addEventListener("click", function () {
  if (currentOperand != "" && previousOperand != "") {
    operate();
    previousOperand = roundNumber(previousOperand);
    display.textContent = previousOperand.toString().slice(0,10);
    currentOperand = previousOperand;
    previousOperand = "";
    operator = "";
  }
});

change.addEventListener(("click"), function(){
  changeSing();
  display.textContent = currentOperand;
})

percent.addEventListener(("click"), function() {
  getPercent();
  display.textContent = currentOperand;
})

del.addEventListener(("click"), function(){
  currentOperand = currentOperand.slice(0,-1);
  display.textContent = currentOperand;
})

function handleNumber(number) {
  currentOperand += number;
}

function handleOperator(op) {
  operator = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function changeSing() {
  currentOperand = Number(currentOperand);
  currentOperand *= -1;
  currentOperand = currentOperand.toString();
}

function getPercent() {
  currentOperand = Number(currentOperand);
  currentOperand *= 0.01;
  currentOperand = currentOperand.toString();
}

function roundNumber(number) {
  return Math.round(number * 1000) / 1000;
}

