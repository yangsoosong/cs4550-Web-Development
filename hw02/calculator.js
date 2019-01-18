(function () {
  "use strict";
  var display = document.getElementById("calculator_display");
  var num1 = 0; // to store fist number to calculate
  var num2 = 0; // to store second number to calculate
  var state = 0; // state to determine the calculation

  function init() {
    var buttons = document.getElementsByTagName("button");
    buttons = Array.from(buttons);
    buttons.forEach(function (b) {
      b.addEventListener("click", function() {
        calculate(b);
      })
    });
  }

  function calculate(button) {
    var buttonValue = button.value;

    var currentnum;
    if (display.value == "0") {
      display.value = "";
    }
    switch(buttonValue) {
      case "c":
        display.value = "0";
        state = 0;
        num1 = 0;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case ".":
        display.value += buttonValue;
        break;
      case "*":
        state = 1; // put the state as 1 as for multiplication
        num1 = Number(Array.from(display.value).join(''));
        display.value = 0;
        break;
      case "-":
        state = 3; // put the state as 2 as for subtraction
        num1 = Number(Array.from(display.value).join(''));
        display.value = 0;
        break;
      case "/":
        state = 4; // put the state 4 as for division
        num1 = Number(Array.from(display.value).join(''));
        display.value = 0;
        break;
      case "+=":
        num2 = Number(Array.from(display.value).join(''));
        if (state == 0) {
          state = 2;  // put the state 2 as for addition
          num1 = Number(Array.from(display.value).join(''));
          display.value = 0;
        }
        else if (state == 1) {
          display.value = num1 * num2;
        }
        else if (state == 2) {
          display.value = num1 + num2;
        }
        else if (state == 3) {
          display.value = num1 - num2;
        }
        else if (state == 4) {
          display.value = num1 / num2;
        }
    }
  }

  // Wait until the document is loaded before trying to bind button click events.
  window.addEventListener("load", init, false);
})();
