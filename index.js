let inputEl = document.getElementById('unit-input');
let volumeText = document.getElementById('volume');
let massText = document.getElementById('mass');
let lengthText = document.getElementById('length');

let feet = 0
let litres = 0
let meters = 0
let gallons = 0
let pounds = 0
let kilograms = 0

let convert = (input) => {
    feet = (input * 3.28084).toFixed(3);
    meters = (input / 3.28084).toFixed(3);
    gallons = (input * 0.264172).toFixed(3);
    litres = (input / 0.264172).toFixed(3);
    pounds = (input * 2.20462).toFixed(3);
    kilograms = (input / 2.20462).toFixed(3);
}

let updateGUI = () => {
    if (!inputEl.value) {
        resetGUI()
    } else {
        convert(inputEl.value)
        lengthText.textContent = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meters} meters`
        volumeText.textContent = `${inputEl.value} litres = ${gallons} gallons | ${inputEl.value} gallons = ${litres} litres`
        massText.textContent = `${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} pounds = ${kilograms} kilos`
    }
}


let resetGUI = () => {
    convert(inputEl.placeholder)
    lengthText.textContent = `${inputEl.placeholder} meters = ${feet} feet | ${inputEl.placeholder} feet = ${meters} meters`
    volumeText.textContent = `${inputEl.placeholder} litres = ${gallons} gallons | ${inputEl.placeholder} gallons = ${litres} litres`
    massText.textContent = `${inputEl.placeholder} kilos = ${pounds} pounds | ${inputEl.placeholder} pounds = ${kilograms} kilos`
};

inputEl.addEventListener('input', updateGUI)

resetGUI();