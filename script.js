const input = document.querySelector("input");
const peopleInput = document.querySelector(".people");
const fifteenPercent = document.getElementById("button");
const thirtyPercent = document.getElementById("button2");
const reset = document.querySelector(".reset");
const output = document.querySelector(".output");
const perPersonOutput = document.querySelector(".split");

const inputs = document.querySelectorAll(".inputs");

let currentPercent = 0;
peopleInput.value = null;
input.value = null;

function calculate(num) {
    currentPercent = num;

    if (peopleInput.value == "") {
        return;
    }

    let bill = parseFloat(input.value);
    let numPeople = parseInt(peopleInput.value);

    let tip = bill * num;
    let splitTip = tip / numPeople;

    let total = bill + tip;
    let split = total / numPeople;

    output.innerHTML = splitTip.toFixed(2);
    perPersonOutput.innerHTML = split.toFixed(2);
}

// this code runs whenever an input is changed. is is the same as the calculate function but doesn't use the (num) parameter
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
        if (peopleInput.value == "") {
            return;
        }

        if (currentPercent == 0) {
            return;
        }

        let bill = parseFloat(input.value);
        let numPeople = parseInt(peopleInput.value);

        let tip = bill * currentPercent;
        let splitTip = tip / numPeople;

        let total = bill + tip;
        let split = total / numPeople;

        output.innerHTML = splitTip.toFixed(2);
        perPersonOutput.innerHTML = split.toFixed(2);
    });
}

fifteenPercent.addEventListener("click", () => {
    calculate(0.15);
});

thirtyPercent.addEventListener("click", () => {
    calculate(0.3);
});

reset.addEventListener("click", () => {
    peopleInput.value = null;
    input.value = null;
    currentPercent = 0;

    output.innerHTML = "";
    perPersonOutput.innerHTML = "";
});
