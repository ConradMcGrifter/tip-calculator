const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const error = document.querySelector(".title-error__h2");

const inputs = document.querySelectorAll("input");
const tipButtons = document.querySelectorAll(".grid__buttons");

const tipOutput = document.querySelector(".tip__output");
const totalPerPersonOutput = document.querySelector(".total__output");

const reset = document.querySelector(".reset");

const fivePercent = document.getElementById("five");
const tenPercent = document.getElementById("ten");
const fifteenPercent = document.getElementById("fifteen");
const twentyFivePercent = document.getElementById("twenty-five");
const fiftyPercent = document.getElementById("fifty");

let validateInput = /[A-Za-z]/;
let currentPercent = 0;

peopleInput.value = null;
billInput.value = null;
tipOutput.innerHTML = "$00.00";
totalPerPersonOutput.innerHTML = "$00.00";

const calc = (num) => {
    currentPercent = num;

    //if the input field is blank or if it contains letters, dont run the code
    if (
        billInput.value == "" ||
        currentPercent == 0 ||
        validateInput.test(billInput.value)
    ) {
        return;
    }

    // if the people input is blank or less than or equal to 0, add the css class to activate the error styles
    if (peopleInput.value == "" || peopleInput.value <= 0) {
        error.classList.add("active");
        peopleInput.classList.add("active");
        return;
    }

    // if all the inputs are filled out and a percent is selected, add the css class to the reset button that brings the opacity back to 1
    if (
        !peopleInput.value == "" &&
        !currentPercent == 0 &&
        !billInput.value == ""
    ) {
        reset.classList.add("active");
    }

    error.classList.remove("active");
    peopleInput.classList.remove("active");

    let bill = parseFloat(billInput.value);
    let numPeople = parseInt(peopleInput.value);

    let tip = bill * num;
    let splitTip = tip / numPeople;

    let total = bill + tip;
    let splitTotal = total / numPeople;

    tipOutput.innerHTML = "$" + splitTip.toFixed(2);
    totalPerPersonOutput.innerHTML = "$" + splitTotal.toFixed(2);
};

tipButtons.forEach((button) => {
    button.addEventListener("click", function () {
        for (let i = 0; i < tipButtons.length; i++) {
            tipButtons[i].classList.remove("selected");
        }
        this.classList.toggle("selected");
    });
});

//+++++++++++++++++++++++++++++++++++++++++++++++++
//this loops through the inputs and adds an eventlistener on each one. the event triggers anytime an input number is changed. this way the user can change the bill ammount and the totals will instantly change (based on the currently set tip %)
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        calc(currentPercent);
    });
});

// event listener for the reset button that removes the error styles / percent styles,  and resets to default values
reset.addEventListener("click", () => {
    peopleInput.value = null;
    billInput.value = null;
    currentPercent = 0;

    tipOutput.innerHTML = "$00.00";
    totalPerPersonOutput.innerHTML = "$00.00";

    for (let i = 0; i < tipButtons.length; i++) {
        tipButtons[i].classList.remove("selected");
    }

    reset.classList.remove("active");
    error.classList.remove("active");
    peopleInput.classList.remove("active");
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

twentyFivePercent.addEventListener("click", () => {
    calc(0.25);
});

fiftyPercent.addEventListener("click", () => {
    calc(0.5);
});
