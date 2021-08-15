const billInput = document.querySelector("input");
const peopleInput = document.querySelector(".people");
const inputs = document.querySelectorAll(".inputs");

const tipOutput = document.querySelector(".output");
const totalPerPersonOutput = document.querySelector(".split");

const reset = document.querySelector(".reset");

const fifteenPercent = document.getElementById("button");
const thirtyPercent = document.getElementById("button2");

let regex = /[A-Za-z]/;
let currentPercent = 0;

peopleInput.value = null;
billInput.value = null;

const calc = (num) => {
    currentPercent = num;

    //dont run code if the input field is blank or if it contains letters
    if (
        peopleInput.value == "" ||
        billInput.value == "" ||
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

    tipOutput.innerHTML = splitTip.toFixed(2);
    totalPerPersonOutput.innerHTML = splitTotal.toFixed(2);
};

// this code runs whenever an input is changed. is is the same as the calculate function but doesn't use the (num) parameter
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
        if (
            currentPercent == 0 ||
            peopleInput.value == "" ||
            billInput.value == "" ||
            regex.test(billInput.value)
        ) {
            return;
        }

        let bill = parseFloat(billInput.value);
        let numPeople = parseInt(peopleInput.value);

        let tip = bill * currentPercent;
        let splitTip = tip / numPeople;

        let total = bill + tip;
        let splitTotal = total / numPeople;

        tipOutput.innerHTML = splitTip.toFixed(2);
        totalPerPersonOutput.innerHTML = splitTotal.toFixed(2);
    });
}

fifteenPercent.addEventListener("click", () => {
    calc(0.15);
});

thirtyPercent.addEventListener("click", () => {
    calc(0.3);
});

reset.addEventListener("click", () => {
    peopleInput.value = null;
    billInput.value = null;
    currentPercent = 0;

    tipOutput.innerHTML = "";
    totalPerPersonOutput.innerHTML = "";
});
