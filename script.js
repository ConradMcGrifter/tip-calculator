const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
// const inputs = document.querySelectorAll(".inputs");
const inputs = document.querySelectorAll("input");

const tipOutput = document.querySelector(".tip__output");
const totalPerPersonOutput = document.querySelector(".total__output");

const reset = document.querySelector(".reset");

const fivePercent = document.getElementById("five");
const tenPercent = document.getElementById("ten");
const fifteenPercent = document.getElementById("fifteen");
const twentyFivePercent = document.getElementById("twenty-five");
const fiftyPercent = document.getElementById("fifty");

let regex = /[A-Za-z]/;
let currentPercent = 0;

peopleInput.value = null;
billInput.value = null;
tipOutput.innerHTML = "$00.00";
totalPerPersonOutput.innerHTML = "$00.00";

const calc = (num) => {
    currentPercent = num;

    //dont run code if the input field is blank or if it contains letters
    if (
        peopleInput.value == "" ||
        billInput.value == "" ||
        currentPercent == 0 ||
        regex.test(billInput.value)
    ) {
        return;
    }

    let bill = parseFloat(billInput.value);
    let numPeople = parseInt(peopleInput.value);

    let tip = bill * num;
    let splitTip = tip / numPeople;

    let total = bill + tip;
    let splitTotal = total / numPeople;

    tipOutput.innerHTML = "$" + splitTip.toFixed(2);
    totalPerPersonOutput.innerHTML = "$" + splitTotal.toFixed(2);
};

//+++++++++++++++++++++++++++++++++++++++++++++++++
//this loops through the inputs and adds an eventlistener on each one. the event triggers anytime an input number is changed. this way the user can change the bill ammount and the totals will instantly change (based on the currently set tip %)
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        calc(currentPercent);
    });
});
//+++++++++++++++++++++++++++++++++++++++++++++++++
//event listeners for the different percent buttons

fivePercent.addEventListener("click", () => {
    calc(0.05);
});

tenPercent.addEventListener("click", () => {
    calc(0.1);
});

fifteenPercent.addEventListener("click", () => {
    calc(0.15);
});

reset.addEventListener("click", () => {
    peopleInput.value = null;
    billInput.value = null;
    currentPercent = 0;

    tipOutput.innerHTML = "$00.00";
    totalPerPersonOutput.innerHTML = "$00.00";
});
