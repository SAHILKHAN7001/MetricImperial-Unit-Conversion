let currentValue = 0;
let number = document.getElementById("number");

let convertbtn = document.getElementById("convert");

let meter = document.getElementById("meter")
let feet = document.getElementById("feet")
let liter = document.getElementById("liter")
let gallon = document.getElementById("gallon")
let kilogram = document.getElementById("kilograms")
let pound = document.getElementById("pounds")


const convertMeterToFeet = () => (currentValue * 3.28084).toFixed(3);
const convertFeetToMeter = () => (currentValue * 0.3048).toFixed(3);
const convertLiterToGallon = () => (currentValue * 0.264172).toFixed(3);
const convertGallonToLiter = () => (currentValue * 3.78541).toFixed(3);
const convertKilogramToPound = () => (currentValue * 2.20462).toFixed(3);
const convertPoundsToKilogram = () => (currentValue * 0.453592).toFixed(3);


const getValue = () => currentValue = parseInt(number.value);

const convertUnits = () => {
    meter.textContent = `${currentValue} meters = ${convertMeterToFeet()} feet `;
    feet.textContent = `${currentValue} feet = ${convertFeetToMeter()} meters `;
    gallon.textContent = `${currentValue} gallons = ${convertGallonToLiter()} liters `;
    liter.textContent = `${currentValue} liters = ${convertLiterToGallon()} gallons`;
    kilogram.textContent = `${currentValue} kilograms = ${convertKilogramToPound()} pound `;
    pound.textContent = `${currentValue} pounds = ${convertPoundsToKilogram()} kilograms `;
}


convertbtn.addEventListener("click",function() {
    getValue();
    convertUnits();
    number.textContent = currentValue;
})