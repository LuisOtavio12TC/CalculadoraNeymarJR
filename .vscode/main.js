let bill = 0;
let tipPercentage = 0;
let numberOfpeople = 0;
let buttonSelected = null;
let isTypingCustom = false;

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber;
}

function receiveNumberOfPeopleValue() {
    numberOfpeople = document.querySelector("#people").valueAsNumber;
} 

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100;

    removeClassButtonSelected();

    buttonSelected = document.querySelector(`#button-${value}`);
    buttonSelected.classList.add("button-selected");

    if (!isTypingCustom) {
        document.querySelector("#custom-tip").value = "";
    }

    isTypingCustom = false;
} 

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100;

    removeClassButtonSelected();
    isTypingCustom = true;
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}
