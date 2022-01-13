//input and output button
let input = document.getElementById('input');

//numbers button
let number = document.querySelectorAll('.numbers div');

//operators button
let operator = document.querySelectorAll('.operators div');

//equal button
let result = document.getElementById('result');

//clear button
let clear = document.getElementById('clear');

//to know what output is displayed
resultDisplayed = false;

//adding click handlers for the number buttons
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (n) {
        //current input-string
        let currString = input.innerHTML;

        //last character of the input
        let lastChar = currString[currString.length - 1];

        //keep adding is result isn't displayed
        if (resultDisplayed === false) {
            input.innerHTML += n.target.innerHTML;
        }
        else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
            //press an operator to keep adding for the next operator
            resultDispayed = false;
            input.innerHTML += n.target.innerHTML;
        }
        else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += n.target.innerHTML;
        }
    });
}

//adding
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (n) {
        let currString = input.innerHTML;
        let lastChar = currString[currString.length - 1];

        //if lastChar is an operator
        if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
            let newString = currString.substring(0, currString.length - 1) + n.target.innerHTML;
            input.innerHTML = newString;
        }
        else if (currString.length === 0) {
            prompt("Enter a number first");
        }
        else {
            input.innerHTML += n.target.innerHTML;
        }
    });
}

//equal button
result.addEventListener("click", function () {
    let inputString = input.innerHTML;

    //forming an array of the numbers
    let numbers = inputString.split(/\+|\-|\x|÷/g);

    //replacing all the numbers to epmty string then split to form an array for operators
    let operators = inputString.replace(/[0-9]|\./g, "").split("");

    //looping the array, one operation at a time
    let add = operators.indexOf("+");
    while (add !== -1) {
        numbers.splice(add, 2, `${numbers[add]}` + `${numbers[add + 1]}`);
        operators.splice(add, 1)
    };
    add = operators.indexOf("+");
})

