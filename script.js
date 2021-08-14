const input = document.querySelector("input");
const peopleInput = document.querySelector(".people");
const button = document.getElementById("button");
const output = document.querySelector(".output");
const perPersonOutput = document.querySelector(".split");

const inputs = document.querySelectorAll(".inputs");

let currentPercent = 0;
// peopleInput.value = "2";

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
        if (peopleInput.value == "") {
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

function calculate(num) {
    currentPercent = num;
    console.log(currentPercent);

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

button.addEventListener("click", () => {
    calculate(0.15);
});
