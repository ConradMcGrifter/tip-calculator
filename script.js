const input = document.querySelector("input");
const peopleInput = document.querySelector(".people");
const button = document.getElementById("button");
const output = document.querySelector(".output");
const perPersonOutput = document.querySelector(".split");

const inputs = document.querySelectorAll(".inputs");

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
        let bill = input.value;
        let billToNum = parseFloat(bill);
        console.log(billToNum);

        let numPeople = peopleInput.value;
        let numPeopleToNum = parseInt(numPeople);

        if (numPeople == "") {
            return;
        }

        let tip = billToNum * 0.15;
        let splitTip = tip / numPeopleToNum;

        let total = billToNum + tip;
        console.log(total);
        let split = total / numPeopleToNum;

        output.innerHTML = splitTip.toFixed(2);
        perPersonOutput.innerHTML = split.toFixed(2);
    });
}
