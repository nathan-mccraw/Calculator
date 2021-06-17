/*
Global variables
    - numbers 1 and 2
    - operator
    - memory

Event Listener
    method 1) 
        - use query selector all to make array of buttons by class
        - use "for each" or "let of" to assign as event listener to each button
        - class for the numerical buttons would use a "numericalButtonPress" call back function on their event listener
        - class for the operator buttons would use a "operatorButtonPress" call back function on their event listener
        - class for the memory buttons would use a "memoryButtonPress" call back function on their event listener
        - class for the equal button would use a "equalButtonPress" call back function on it's event listener
    method 2)
        - start event listener on button panel div on click
        - use an "if else" to determine which class was clicked on
        - class for the numerical buttons would use a "numericalButtonPress" call back function on their event listener
        - class for the operator buttons would use a "operatorButtonPress" call back function on their event listener
        - class for the memory buttons would use a "memoryButtonPress" call back function on their event listener
        - class for the equal button would use a "equalButtonPress" call back function on it's event listener

Clear Button press
    - numbers 1 and 2 = ""
    - display 0

Numberical Button press
    - if number1 is "" then
        - button pressed is added to number1 as string
    else 
        - button pressed is added to number2 as string

    - output corresponding number string to calculator screen

Operator Button press
    - if number2 is "" then
        - Button press = operator
    - else if number1 is "" then number1 = 0
    - else 
        - complete calculation
        - operator = button press

Memory Add Button press
    - memory = string on calculator screen 

Memory Delete Button press
    - memory = ""

Memory Recall
    - if operator is "" then number1 = memory
    - else number2 = memory
    - display corresponding number

Equal Button Press
    - if number1 and number2 = "" then do nothing
    - if number2 = "" then display number 1
    - else complete calculation
    - display answer

Calculation
    - decide if number1 or number2 is an integer or float
    - convert accordingly
    - perform number1 = number1 operator number2
    - set number2 = ""
    - set operator = ""
    - return number1
*/

document.getElementById("buttonPanelDiv").addEventListener("click", (e) => {
  console.log(e);
});
