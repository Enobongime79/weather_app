// const axios = require('axios');

async function getWeatherDetails(){
    try {
        const response = await axios.get();

        if (!response){
            throw new Error (`Network response was not ok: ${response.status}`);
        }

        const data = response.json();
    }
    catch (error){
        console.error("There has been a problem with your fetch operation: ", error);
    }
}

const searchBar = document.getElementById("searchBar");
const searchBarDiv = document.getElementById("searchBarDiv");

const units = document.getElementById("units");
const unitDropdown = document.getElementById("unitDropdown");
let dropDownState = false;

units.addEventListener("click", () => {
    if (dropDownState == false) {
        unitDropdown.classList.remove("hidden");
        dropDownState = true;
        console.log("working");
    }

    else if (dropDownState == true) {
        unitDropdown.classList.add("hidden");
        dropDownState = false;
        console.log("not working");
    }
})

const days = document.getElementById("days");
const dayDropdown = document.getElementById("dayDropdown");

let dayDropDownState = false;

days.addEventListener("click", () => {
    if (dayDropDownState == false) {
        dayDropdown.classList.remove("hidden");
        dayDropDownState = true;
        console.log("working");
    }

    else if (dayDropDownState == true) {
        dayDropdown.classList.add("hidden");
        dayDropDownState = false;
        console.log("not working");
    }
})

const celsius = document.getElementById("celsius");
const celsiusTick = document.getElementById("celsiusTick");

const fahrenheit = document.getElementById("fahrenheit");
const fahrenheitTick = document.getElementById("fahrenheitTick")

const kilometer = document.getElementById("kilometer");
const kilometerTick = document.getElementById("kilometerTick");

const miles = document.getElementById("miles");
const milesTick = document.getElementById("milesTick")

const mm = document.getElementById("mm");
const mmTick = document.getElementById("mmTick");

const inches = document.getElementById("inches");
const inchesTick = document.getElementById("inchesTick");


celsius.addEventListener("click", () => {
        celsius.classList.add("bg-[#2F2F48]");
        celsiusTick.classList.remove("hidden");
        fahrenheit.classList.remove("bg-[#2F2F48]");
        fahrenheitTick.classList.add("hidden");
})

fahrenheit.addEventListener("click", () => {
        fahrenheit.classList.add("bg-[#2F2F48]");
        fahrenheitTick.classList.remove("hidden");
        celsius.classList.remove("bg-[#2F2F48]");
        celsiusTick.classList.add("hidden");
})

kilometer.addEventListener("click", () => {
        kilometer.classList.add("bg-[#2F2F48]");
        kilometerTick.classList.remove("hidden");
        miles.classList.remove("bg-[#2F2F48]");
        milesTick.classList.add("hidden");
})

miles.addEventListener("click", () => {
        miles.classList.add("bg-[#2F2F48]");
        milesTick.classList.remove("hidden");
        kilometer.classList.remove("bg-[#2F2F48]");
        kilometerTick.classList.add("hidden");
})

mm.addEventListener("click", () => {
        mm.classList.add("bg-[#2F2F48]");
        mmTick.classList.remove("hidden");
        inches.classList.remove("bg-[#2F2F48]");
        inchesTick.classList.add("hidden");
})

inches.addEventListener("click", () => {
        inches.classList.add("bg-[#2F2F48]");
        inchesTick.classList.remove("hidden");
        mm.classList.remove("bg-[#2F2F48]");
        mmTick.classList.add("hidden");
})

const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");
const sunday = document.getElementById("sunday");

monday.addEventListener("click", () => {
    monday.classList.add("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
})

tuesday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.add("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
})

wednesday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.add("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
})

thursday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.add("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
})

friday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.add("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
})

saturday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.add("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
})

sunday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.add("bg-[#2F2F48]");
})
