let userInput = document.getElementById('text');
//console.log(userInput)
let numberDisplay = document.getElementById('display');
//console.log(numberDisplay)

const addNum = () => {
    var num1 = parseInt(userInput.value);
    //console.log(num1)
    var num2 = parseInt(numberDisplay.textContent);
    //console.log(num2);
    result = num1 + num2;
    //console.log(result)
    if (result >= 0) {
        numberDisplay.style.color = 'black';
    };
    numberDisplay.textContent = result;
};

const subtractNum = () => {
    var num1 = parseInt(userInput.value);
    //console.log(num1)
    var num2 = parseInt(numberDisplay.textContent);
    //console.log(num2);
    result = num2 - num1;
    //console.log(result)
    if (result < 0) {
        numberDisplay.style.color = 'red';
    };
    numberDisplay.textContent = result;
};

document.getElementById('plus').addEventListener('click', addNum);
document.getElementById('minus').addEventListener('click', subtractNum);