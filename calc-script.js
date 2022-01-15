let output = document.getElementById("outputValue");
let outputHistory = document.getElementById("historyValue");
let numberButtons = Array.from(document.getElementsByClassName("numbers"));
let operatorButtons = Array.from(document.getElementsByClassName("operators"));
let clearButtons = Array.from(document.getElementsByClassName("clear"));


for (let i = 0; i < clearButtons.length; i++) {
  clearButtons[i].addEventListener("click", (element) => {
    if (element.target.innerText === "AC") {
      output.innerText = "";
    }
  });
}

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", (element) => {
    output.innerText += element.target.innerText;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", (element) => {
    let firstNum = "";
    let secondNum = "";
    let splited = "";
    let computation = "";
    switch (element.target.innerText) {
      case "CE":
        output.innerText = " " 
        break;
      case "=":
          if (output.innerText.includes("+")) {
            splited = output.innerText.split("+");
            firstNum = splited[0];
            secondNum = splited[1];
            outputHistory.innerText = output.innerText + "=";
            output.innerText = Number(firstNum) + Number(secondNum);
          }
          else if (output.innerText.includes("-")) {
            splited = output.innerText.split("-");
            firstNum = splited[0];
            secondNum = splited[1];
            outputHistory.innerText = output.innerText + "=";
            output.innerText = Number(firstNum) - Number(secondNum);
          }
          else if(output.innerText.includes("x")) {
            splited = output.innerText.split("x");
            firstNum = splited[0];
            secondNum = splited[1];
            outputHistory.innerText = output.innerText + "=";
            output.innerText = Number(firstNum) * Number(secondNum);
          }
          else if(output.innerText.includes("÷")) {
            splited = output.innerText.split("÷");
            firstNum = splited[0];
            secondNum = splited[1];
            outputHistory.innerText = output.innerText + "=";  
            output.innerText = Number(firstNum) / Number(secondNum);
          }
        break;
      default:
        output.innerText += element.target.innerText;
    }
  });
}
