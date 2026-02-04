async function getCoordinates(){
    try {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${searchBar.value}&count=10&language=en&format=json`);

        if (!response){
            throw new Error (`Network response was not ok: ${response.status}`);
        }

        const data = response.data;

        if ("results" in data){        
            
            console.log("new shipment");
            console.log(data);

            for (let i = 0; i < 3; i++){
                console.log(data.results[i].name);
                console.log(data.results[i].country)
                const latitude = data.results[i].latitude;
                const longitude = data.results[i].longitude;
                console.log(`The latitude is ${latitude} and the longitude is ${longitude}`)
                currentStates.push(data.results[i].country);
            }
               // console.log(data.results[i].name);
                // console.log(data.results[i].country);
            console.log(currentStates);

        }

    }
    catch (error){
        console.error("There has been a problem with your fetch operation: ", error);
    }
}
let currentStates = [];
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", () => {
    currentStates = []
    getCoordinates();
})

const searchBarDiv = document.getElementById("searchBarDiv");

const units = document.getElementById("units");
const unitDropdown = document.getElementById("unitDropdown");
let dropDownState = false;

units.addEventListener("click", () => {
    if (dropDownState == false) {
        unitDropdown.classList.remove("hidden");
        dropDownState = true;
    }

    else if (dropDownState == true) {
        unitDropdown.classList.add("hidden");
        dropDownState = false;
    }
})

const days = document.getElementById("days");
const dayDropdown = document.getElementById("dayDropdown");

let dayDropDownState = false;

days.addEventListener("click", () => {
    if (dayDropDownState == false) {
        dayDropdown.classList.remove("hidden");
        dayDropDownState = true;
    }

    else if (dayDropDownState == true) {
        dayDropdown.classList.add("hidden");
        dayDropDownState = false;
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

const theDay = document.getElementById("theDay");

monday.addEventListener("click", () => {
    monday.classList.add("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
    theDay.innerText = `Monday`;
    theDay.classList.add("text-sm");
    theDay.classList.remove("text-md")
})

tuesday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.add("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
    theDay.innerText = `Tuesday`;
    theDay.classList.add("text-sm");
    theDay.classList.remove("text-md")
})

wednesday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.add("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
    theDay.innerText = `Wednesday`;
    theDay.classList.add("text-sm");
    theDay.classList.remove("text-md")
})

thursday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.add("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
    theDay.innerText = `Thurday`;
    theDay.classList.add("text-sm");
    theDay.classList.remove("text-md")
})

friday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.add("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
    theDay.innerText = `Friday`;
    theDay.classList.add("text-sm");
    theDay.classList.remove("text-md")
})

saturday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.add("bg-[#2F2F48]");
    sunday.classList.remove("bg-[#2F2F48]");
    theDay.innerText = `Saturday`;
    theDay.classList.add("text-sm");
    theDay.classList.remove("text-md")
})

sunday.addEventListener("click", () => {
    monday.classList.remove("bg-[#2F2F48]");
    tuesday.classList.remove("bg-[#2F2F48]");
    wednesday.classList.remove("bg-[#2F2F48]");
    thursday.classList.remove("bg-[#2F2F48]");
    friday.classList.remove("bg-[#2F2F48]");
    saturday.classList.remove("bg-[#2F2F48]");
    sunday.classList.add("bg-[#2F2F48]");
    theDay.innerText = `Sunday`;
    theDay.classList.add("text-sm");
    theDay.classList.remove("text-md")
})
