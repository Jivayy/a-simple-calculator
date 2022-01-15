let output = document.getElementById("outputValue");
let outputHistory = document.getElementById("historyValue");
let numberButtons = Array.from(document.getElementsByClassName("numbers"));
let operatorButtons = Array.from(document.getElementsByClassName("operators"));
let clearButtons = Array.from(document.getElementsByClassName("clear"));

for (let i = 0; i < clearButtons.length; i++) {
    clearButtons[i].addEventListener('click', element => {
        if (element.target.innerText === 'AC') {
            output.innerText = '';
        }
    });
};
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', element => {
        output.innerText += element.target.innerText;
    });
};
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', element => {
        switch (element.target.innerText) {
            case 'CE':
                if (output.innerText)
                    output.innerText = output.innerText.slice(0, output.innerText.length - 1);
                break;
            case '=':
                try {
                    outputHistory.innerText = output.innerText + "=";
                    if (output.innerText.includes("x")||output.innerText.includes("÷")||output.innerText.includes("-")) {
                        output.innerText = output.innerText.replace(/x(?!x)/gi, '*');
                        output.innerText = output.innerText.replace(/÷(?!÷)/gi, '/');
                        output.innerText = eval(output.innerText);
                    }else {
                        output.innerText = eval(output.innerText);
                    }
                } catch {
                    outputHistory.innerText = " ";
                    output.innerText = 'NaN';
                }
                break;
            default:
                output.innerText += element.target.innerText;
        }
    });
};