/*
Event Listener
    method 2)
        - start event listener on button panel div on click
        - use an "if else" to determine which class was clicked on
        - class for the numerical buttons would use a "numericalButtonPress" call back function on their event listener
        - class for the operator buttons would use a "operatorButtonPress" call back function on their event listener
        - class for the memory buttons would use a "memoryButtonPress" call back function on their event listener
        - class for the equal button would use a "equalButtonPress" call back function on it's event listener
*/

document
  .getElementById("buttonPanelDiv")
  .addEventListener("click", whichButtonWasPressed);

let variableValues = {
  number1: "",
  number2: "",
  numberInMemory: "",
  operator: "",
  screenValue: "",
};

function whichButtonWasPressed(e) {
  console.log(e);

  if (e.target.classList.value.includes("clear")) {
    variableValues = clearButtonPress(variableValues);
  }

  if (e.target.classList.value.includes("number")) {
    variableValues = numericalButtonPress(variableValues, e.target);
  }

  if (e.target.classList.value.includes("operator")) {
    variableValues = operatorButtonPress(variableValues, e.target);
  }

  if (e.target.classList.value.includes("memory")) {
    variableValues = memoryButtonPress(variableValues, e.target);
  }

  if (e.target.classList.value.includes("equal")) {
    variableValues = equalButtonPress(variableValues, e.target);
  }

  document.querySelector("#calculatorScreen").textContent =
    variableValues.screenValue;
}

function clearButtonPress(variableValues) {
  variableValues.number1 = "";
  variableValues.number2 = "";
  variableValues.operator = "";
  variableValues.screenValue = "0";

  return variableValues;
}

function numericalButtonPress(variableValues, eventTarget) {
  if (variableValues.operator === "") {
    variableValues.number1 += eventTarget.textContent;
    variableValues.screenValue = variableValues.number1;
  } else {
    variableValues.number2 += eventTarget.textContent;
    variableValues.screenValue = variableValues.number2;
  }

  return variableValues;
}

function operatorButtonPress(variableValues, eventTarget) {
  if (variableValues.number2 === "") {
    variableValues.operator = eventTarget.textContent;
  } else {
    completeCalculation(variableValues);
    variableValues.operator = eventTarget.textContent;
  }

  return variableValues;
}

function equalButtonPress(variableValues, eventTarget) {
  if (variableValues.number1 === "") return;
  else {
    variableValues.number1 = completeCalculation(variableValues, eventTarget);
    variableValues.screenValue = variableValues.number1;
    variableValues.number2 = "";
  }
  return variableValues;
}

function memoryButtonPress(variableValues, eventTarget) {
  if (eventTarget.textContent === "M+") {
    variableValues.numberInMemory = variableValues.screenValue;
  } else if (eventTarget.textContent === "M-") {
    variableValues.numberInMemory = "";
  } else if (variableValues.number2 === "") {
    variableValues.number2 = variableValues.numberInMemory;
  } else variableValues.number2 = variableValues.numberInMemory;

  variableValues.screenValue = variableValues.numberInMemory;
}

function completeCalculation(variableValues, eventTarget) {
  // - decide if number1 or number2 is an integer or float
  // - convert accordingly
  // - perform number1 = number1 operator number2
  // - set number2 = ""
  // - set operator = ""
  // - return number1
  return variableValues;
}
