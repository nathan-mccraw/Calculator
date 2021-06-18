document
  .getElementById("buttonPanelDiv")
  .addEventListener("click", whichButtonWasPressed);

let calculatorValues = {
  numberString1: "",
  numberString2: "",
  numberInMemory: "",
  operator: "",
  screenValue: "0",
};

function whichButtonWasPressed(e) {
  if (e.target.classList.value.includes("clear")) {
    calculatorValues = clearButtonPress(calculatorValues);
  }

  if (e.target.classList.value.includes("number")) {
    calculatorValues = numericalButtonPress(calculatorValues, e.target);
  }

  if (e.target.classList.value.includes("operator")) {
    calculatorValues = operatorButtonPress(calculatorValues, e.target);
  }

  if (e.target.classList.value.includes("memory")) {
    calculatorValues = memoryButtonPress(calculatorValues, e.target);
  }

  if (e.target.classList.value.includes("equal")) {
    calculatorValues = equalButtonPress(calculatorValues, e.target);
  }

  updateCalculatorScreen(calculatorValues);
}

function updateCalculatorScreen(calculatorValues) {
  document.querySelector("#calculatorScreenAnswer").textContent =
    calculatorValues.screenValue;

  document.querySelector(
    "#calculatorScreenInput"
  ).textContent = `${calculatorValues.numberString1} ${calculatorValues.operator} ${calculatorValues.numberString2}`;

  if (calculatorValues.numberInMemory === "")
    document.querySelector("#memoryStored").textContent = "";
  else
    document.querySelector(
      "#memoryStored"
    ).textContent = `MEM: ${calculatorValues.numberInMemory}`;
}

function clearButtonPress(calculatorValues) {
  calculatorValues.numberString1 = "";
  calculatorValues.numberString2 = "";
  calculatorValues.operator = "";
  calculatorValues.screenValue = "0";

  return calculatorValues;
}

function numericalButtonPress(calculatorValues, eventTarget) {
  if (isNotDoubleDecimal(calculatorValues, eventTarget))
    return calculatorValues;
  if (calculatorValues.operator) {
    calculatorValues.numberString2 += eventTarget.textContent;
    calculatorValues.screenValue = calculatorValues.numberString2;
  } else {
    calculatorValues.numberString1 += eventTarget.textContent;
    calculatorValues.screenValue = calculatorValues.numberString1;
  }

  return calculatorValues;
}

function isNotDoubleDecimal(calculatorValues, eventTarget) {
  if (
    !Number.isSafeInteger(parseFloat(calculatorValues.screenValue)) &&
    eventTarget.textContent === "."
  )
    return true;
  else return false;
}

function operatorButtonPress(calculatorValues, eventTarget) {
  if (calculatorValues.numberString2) equalButtonPress(calculatorValues);

  calculatorValues.operator = eventTarget.textContent;

  return calculatorValues;
}

function equalButtonPress(calculatorValues) {
  if (calculatorValues.numberString1 === "") return;
  else {
    calculatorValues.numberString1 = completeCalculation(calculatorValues);
    calculatorValues.screenValue = calculatorValues.numberString1;
    calculatorValues.numberString2 = "";
    calculatorValues.operator = "";
  }
  return calculatorValues;
}

function memoryButtonPress(calculatorValues, eventTarget) {
  if (eventTarget.textContent === "M+") {
    calculatorValues.numberInMemory = calculatorValues.screenValue;
  } else if (eventTarget.textContent === "M-") {
    calculatorValues.numberInMemory = "";
  } else if (eventTarget.textContent == "MR") {
    if (calculatorValues.numberInMemory) {
      if (calculatorValues.operator) {
        calculatorValues.numberString2 = calculatorValues.numberInMemory;
        calculatorValues.screenValue = calculatorValues.numberString2;
      } else {
        calculatorValues.numberString1 = calculatorValues.numberInMemory;
        calculatorValues.screenValue = calculatorValues.numberString1;
      }
    }
  }

  return calculatorValues;
}

function completeCalculation(calculatorValues) {
  let number1 = parseFloat(calculatorValues.numberString1);
  let number2 = parseFloat(calculatorValues.numberString2);
  let answer;

  if (calculatorValues.operator === "*") answer = number1 * number2;
  if (calculatorValues.operator === "/") answer = number1 / number2;
  if (calculatorValues.operator === "-") answer = number1 - number2;
  if (calculatorValues.operator === "+") answer = number1 + number2;

  if (Number.isSafeInteger(answer)) return answer.toString();

  return answer.toFixed(3);
}
