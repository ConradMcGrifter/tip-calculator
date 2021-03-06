const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const customInput = document.querySelector(".custom");

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


let inputValidation = /[^0-9.]/;

let currentPercent = 0;

peopleInput.value = null;
billInput.value = null;
tipOutput.innerHTML = "$00.00";
totalPerPersonOutput.innerHTML = "$00.00";

const calc = (num) => {
    // set the global percent
    currentPercent = num;
    

    // if the user doesnt use the reset button and instead just deletes the number in the bill input, this code will reset the output to 00.00
    if (billInput.value.length == 0) {
        tipOutput.innerHTML = "$00.00";
        totalPerPersonOutput.innerHTML = "$00.00";
    }

    // this regex checks the "bill" input value to see if it contains any letters or special characters, if it does then the value is set to an empty string
    if (inputValidation.test(billInput.value)) {
            billInput.value = "";
            tipOutput.innerHTML = "$00.00";
            totalPerPersonOutput.innerHTML = "$00.00";
    }

    // this regex checks the "number of people" input value to see if it contains any letters or special characters, if it does then the value is set to an empty string
    if (inputValidation.test(peopleInput.value)) {
        peopleInput.value = "";
        tipOutput.innerHTML = "$00.00";
        totalPerPersonOutput.innerHTML = "$00.00";
    }

    
    // checks if the custom input has a number inside it
    if (!customInput.value == "" && !inputValidation.test(customInput.value)) {
        currentPercent = parseFloat(customInput.value) / 100;
    } else {
        customInput.value = "";
        tipOutput.innerHTML = "$00.00";
        totalPerPersonOutput.innerHTML = "$00.00";
    }

    //if the input field is blank dont run the code
    if (billInput.value == "" || currentPercent == 0) {
        return;
    }

    // if the people input is blank or less than or equal to 0, add the css class to activate the error styles
    if (peopleInput.value == "" || peopleInput.value <= 0) {
        error.classList.add("active");
        peopleInput.classList.add("active");
        tipOutput.innerHTML = "$00.00";
        totalPerPersonOutput.innerHTML = "$00.00";
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
        customInput.value = "";
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

    customInput.value = "";
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
// event listener for the custom percent input

customInput.addEventListener("input", () => {

    if(customInput.value == "") {
        currentPercent = 0;
    }
    calc(currentPercent);

    tipButtons.forEach((button) => {
        button.classList.remove("selected");
    });
});

//+++++++++++++++++++++++++++++++++++++++++++++++++
//event listeners for the different percent buttons
fivePercent.addEventListener("click", () => {calc(0.05)});

tenPercent.addEventListener("click", () => {calc(0.1)});

fifteenPercent.addEventListener("click", () => {calc(0.15)});

twentyFivePercent.addEventListener("click", () => {calc(0.25)});

fiftyPercent.addEventListener("click", () => {calc(0.5)});
