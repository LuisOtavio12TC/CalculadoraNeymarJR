let bill = 0;
let tipPercentage = 0;
let numberOfpeople = 0;
let buttonSelected = null;
let isTypingCustom = false;

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber;
    calculateResults();
}

function receiveNumberOfPeopleValue() {
    numberOfpeople = document.querySelector("#people").valueAsNumber;
    calculateResults();
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100;
    removeClassButtonSelected();
    buttonSelected = document.querySelector(`#button-${value}`);
    if (buttonSelected) {
        buttonSelected.classList.add("button-selected");
    }
    if (!isTypingCustom) {
        document.querySelector("#custom-tip").value = "";
    }
    calculateResults();
    isTypingCustom = false;
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100;
    calculateResults();
    removeClassButtonSelected();
    isTypingCustom = true;
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}

function calculateResults() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfpeople !== 0) {
        let tipAmountPerson = calculateTipAmountPerson();
        calculateTotalPerson(tipAmountPerson);
    }
}

function calculateTipAmountPerson() {
    let tipAmountStrong = document.querySelector(".amount strong");
    let tipAmountPerson = bill * tipPercentage / numberOfpeople;
    tipAmountStrong.textContent = `$${tipAmountPerson.toFixed(2)}`;
    return tipAmountPerson;
}

function calculateTotalPerson(tipAmountPerson) {
    let totalStrong = document.querySelector(".total strong");
    let totalAmountPerson = bill / numberOfpeople + tipAmountPerson;
    totalStrong.textContent = `$${totalAmountPerson.toFixed(2)}`;
}
