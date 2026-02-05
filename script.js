const firstSug = document.getElementById("firstSug");
const secondSug = document.getElementById("secondSug");
const thirdSug = document.getElementById("thirdSug");
const fourthSug = document.getElementById("fourthSug");

async function getCoordinates(){
    try {
        const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${searchBar.value}&count=10&language=en&format=json`);

        if (!response){
            throw new Error (`Network response was not ok: ${response.status}`);
        }

        const data = response.data;

        if ("results" in data){  
            currentStates = [];
            currentCountries = []; 
            latitudes = [];
            longitudes = [];     
            
            console.log("new shipment");

            for (let i = 0; i < 4; i++){
                const states = data.results[i].name;
                const countries = data.results[i].country;
                const latitude = data.results[i].latitude;
                const longitude = data.results[i].longitude;
                currentCountries.push(countries);
                currentStates.push(states);
                latitudes.push(latitude);
                longitudes.push(longitude);
            }

            firstSug.innerText = `${currentStates[0]}, ${currentCountries[0]}`;
            secondSug.innerText = `${currentStates[1]}, ${currentCountries[1]}`;
            thirdSug.innerText = `${currentStates[2]}, ${currentCountries[2]}`;
            fourthSug.innerText = `${currentStates[3]}, ${currentCountries[3]}`;

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
let currentCountries = [];
let latitudes = [];
let longitudes = [];

let currentLatitude;
let currentLongitude;

const suggestions = document.getElementById("suggestions")
const searchBar = document.getElementById("searchBar");


searchBar.addEventListener("input", () => {
    getCoordinates();
    if (searchBar.value.length > 1){
        if (currentStates.length >= 3){
            suggestions.classList.remove("hidden");
        }
        
    }
    else {
        currentStates = [];
        currentCountries = [];
        suggestions.classList.add("hidden")
    }

})

firstSug.addEventListener("click", () => {
    searchBar.value = firstSug.innerText;
    suggestions.classList.add("hidden");
    currentLatitude = latitudes[0];
    currentLongitude = longitudes[0];
    console.log(`The longitude is ${currentLongitude} and the latitude is ${currentLatitude}`)
})

secondSug.addEventListener("click", () => {
    searchBar.value = secondSug.innerText;
    suggestions.classList.add("hidden");
    currentLatitude = latitudes[1];
    currentLongitude = longitudes[1];
    console.log(`The longitude is ${currentLongitude} and the latitude is ${currentLatitude}`)
})

thirdSug.addEventListener("click", () => {
    searchBar.value = thirdSug.innerText;
    suggestions.classList.add("hidden");
    currentLatitude = latitudes[2];
    currentLongitude = longitudes[2];
    console.log(`The longitude is ${currentLongitude} and the latitude is ${currentLatitude}`)
})

fourthSug.addEventListener("click", () => {
    searchBar.value = fourthSug.innerText;
    suggestions.classList.add("hidden");
    currentLatitude =  latitudes[3];
    currentLongitude = longitudes[3];
    console.log(`The longitude is ${currentLongitude} and the latitude is ${currentLatitude}`)
})

const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const precipitation = document.getElementById("precipitation");

const rainSymbol = document.getElementById("rainSymbol");
const humidSymbol = document.getElementById("humidSymbol");
const windSymbol = document.getElementById("windSymbol");
const tempSymbol = document.getElementById("tempSymbol");

const hourTemp = document.querySelectorAll('.hourTemp');


const oneAmTemp = document.getElementById("oneAmTemp");
const twoAmTemp = document.getElementById("twoAmTemp");
const threeAmTemp = document.getElementById("threeAmTemp");
const fourAmTemp = document.getElementById("fourAmTemp");
const fiveAmTemp = document.getElementById("fiveAmTemp");
const sixAmTemp = document.getElementById("sixAmTemp");
const sevenAmTemp = document.getElementById("sevenAmTemp");
const eightAmTemp = document.getElementById("eightAmTemp");
const nineAmTemp = document.getElementById("nineAmTemp");
const tenAmTemp = document.getElementById("tenAmTemp");
const elevenAmTemp = document.getElementById("elevenAmTemp");
const twelveAmTemp = document.getElementById("twelveAmTemp");
const onePmTemp = document.getElementById("onePmTemp");
const twoPmTemp = document.getElementById("twoPmTemp");
const threePmTemp = document.getElementById("threePmTemp");
const fourPmTemp = document.getElementById("fourPmTemp");
const fivePmTemp = document.getElementById("fivePmTemp");
const sixPmTemp = document.getElementById("sixPmTemp");
const sevenPmTemp = document.getElementById("sevenPmTemp");
const eightPmTemp = document.getElementById("eightPmTemp");
const ninePmTemp = document.getElementById("ninePmTemp");
const tenPmTemp = document.getElementById("tenPmTemp");
const elevenPmTemp = document.getElementById("elevenPmTemp");
const twelvePmTemp = document.getElementById("twelvePmTemp");

const dayOne = document.getElementById("dayOne");
const dayTwo = document.getElementById("dayTwo");
const dayThree = document.getElementById("dayThree");
const dayFour = document.getElementById("dayFour");
const dayFive = document.getElementById("dayFive");
const daySix = document.getElementById("daySix");
const daySeven = document.getElementById("daySeven");

const dayOneMax = document.getElementById("dayOneMax");
const dayOneMin = document.getElementById("dayOneMin");

const dayTwoMax = document.getElementById("dayTwoMax");
const dayTwoMin = document.getElementById("dayTwoMin");

const dayFourMax = document.getElementById("dayFourMax");
const dayFourMin = document.getElementById("dayFourMin");

const dayFiveMax = document.getElementById("dayFiveMax");
const dayFiveMin = document.getElementById("dayFiveMin");

const daySixMax = document.getElementById("daySixMax");
const daySixMin = document.getElementById("daySixMin");

const dayThreeMax = document.getElementById("dayThreeMax");
const dayThreeMin = document.getElementById("dayThreeMin");

const daySevenMax = document.getElementById("daySevenMax");
const daySevenMin = document.getElementById("daySevenMin");

const tempSymbols = document.querySelectorAll(".tempSymbols");

const dayOneWeather = document.getElementById("dayOneWeather");
const dayTwoWeather = document.getElementById("dayTwoWeather");
const dayThreeWeather = document.getElementById("dayThreeWeather");
const dayFourWeather = document.getElementById("dayFourWeather");
const dayFiveWeather = document.getElementById("dayFiveWeather");
const daySixWeather = document.getElementById("daySixWeather");
const daySevenWeather = document.getElementById("daySevenWeather");

async function getWeatherDetails(){
    try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${currentLatitude}&longitude=${currentLongitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=,weather_code,temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto`);

        const data = response.data;
        console.log(data)

        const currentTemp = data.current.temperature_2m;
        const currentHumidity = data.current.relative_humidity_2m;
        const currentWindSpeed = data.current.wind_speed_10m;
        const currentPrecipitation = data.current.precipitation;
        const currentWeather = data.current.weather_code;

        
        let rawDate = [];


        let hourlyTemp = []

        for (let i = 1; i < 26; i++){
            hourlyTemp.push(data.hourly.temperature_2m[i]);
        }

        let maxTemps = data.daily.temperature_2m_max;
        let minTemps = data.daily.temperature_2m_min;

        dayOneMax.innerHTML = `${maxTemps[0]} &deg;`;
        dayTwoMax.innerHTML = `${maxTemps[1]} &deg;`;
        dayThreeMax.innerHTML = `${maxTemps[2]} &deg;`;
        dayFourMax.innerHTML = `${maxTemps[3]} &deg;`;
        dayFiveMax.innerHTML = `${maxTemps[4]} &deg;`;
        daySixMax.innerHTML = `${maxTemps[5]} &deg;`;
        daySevenMax.innerHTML = `${maxTemps[6]} &deg;`;

        dayOneMin.innerHTML = `${minTemps[0]} &deg;`;
        dayTwoMin.innerHTML = `${minTemps[1]} &deg;`;
        dayThreeMin.innerHTML = `${minTemps[2]} &deg;`;
        dayFourMin.innerHTML = `${minTemps[3]} &deg;`;
        dayFiveMin.innerHTML = `${minTemps[4]} &deg;`;
        daySixMin.innerHTML = `${minTemps[5]} &deg;`;
        daySevenMin.innerHTML = `${minTemps[6]} &deg;`;


        for (let i = 0; i < data.daily.time.length; i++){
            let date = new Date(data.daily.time[i]);
            let dayName = date.toLocaleDateString("en-US", { weekday: "long" });
            rawDate.push(dayName);
        }

        const dailyWeather = data.daily.weather_code;
        let weatherName = [];
        
        function mapWeather(code) {
            if (code === 0) return "sunny";

            if ([1, 2].includes(code)) return "partly-cloudy";

            if (code === 3) return "overcast";

            if ([45, 48].includes(code)) return "fog";

            if (
                [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)
            ) return "rain";

            if (
                [56, 57, 66, 67, 71, 73, 75, 77, 85, 86].includes(code)
            ) return "snow";

            if ([95, 96, 99].includes(code)) return "storm";

            return "unknown";
        }

        for (let i = 0; i < dailyWeather.length; i++){
            weatherName.push(mapWeather(dailyWeather[i]))
        }

        const dailyWeatherImages = [dayOneWeather, dayTwoWeather, dayThreeWeather, dayFourWeather, dayFiveWeather, daySixWeather, daySevenWeather];

        for (let i = 0; i < dailyWeatherImages.length; i++){
            if (weatherName[i] == "sunny"){
                dailyWeatherImages[i].src = "weather-app-main/assets/images/icon-sunny.webp";
                dailyWeatherImages[i].title = "Sunny"
            }
            if (weatherName[i] == "partly-cloudy"){
                dailyWeatherImages[i].src = "weather-app-main/assets/images/icon-partly-cloudy.webp";
                dailyWeatherImages[i].title = "Partly Cloudy"
            }
            if (weatherName[i] == "overcast"){
                dailyWeatherImages[i].src = "weather-app-main/assets/images/icon-overcast.webp";
                dailyWeatherImages[i].title = "Overcast"
            }
            if (weatherName[i] == "fog"){
                dailyWeatherImages[i].src = "weather-app-main/assets/images/icon-fog.webp";
                dailyWeatherImages[i].title = "Fog"
            }
            if (weatherName[i] == "rain"){
                dailyWeatherImages[i].src = "weather-app-main/assets/images/icon-rain.webp";
                dailyWeatherImages[i].title = "Rain"
            }
            if (weatherName[i] == "snow"){
                dailyWeatherImages[i].src = "weather-app-main/assets/images/icon-snow.webp";
                dailyWeatherImages[i].title = "Snow"
            }
            if (weatherName[i] == "storm"){
                dailyWeatherImages[i].src = "weather-app-main/assets/images/icon-storm.webp";
                dailyWeatherImages[i].title = "Storm"
            }             
        }

        let dateName = [];

        for (let i = 0; i < rawDate.length; i++){
            dateName.push(rawDate[i].slice(0, 3))
        }

        dayOne.innerText = dateName[0];
        dayTwo.innerText = dateName[1];
        dayThree.innerText = dateName[2];
        dayFour.innerText = dateName[3];
        dayFive.innerText = dateName[4];
        daySix.innerText = dateName[5];
        daySeven.innerText = dateName[6];

        console.log(dateName)


        hourTemp.forEach(el => {
        el.classList.remove('hidden');
        });



        oneAmTemp.innerText = hourlyTemp[1];
        twoAmTemp.innerText = hourlyTemp[2];
        threeAmTemp.innerText = hourlyTemp[3];
        fourAmTemp.innerText = hourlyTemp[4];
        fiveAmTemp.innerText = hourlyTemp[5];
        sixAmTemp.innerText = hourlyTemp[6];
        sevenAmTemp.innerText = hourlyTemp[7];
        eightAmTemp.innerText = hourlyTemp[8];
        nineAmTemp.innerText = hourlyTemp[9];
        tenAmTemp.innerText = hourlyTemp[10];
        elevenAmTemp.innerText = hourlyTemp[11];
        twelveAmTemp.innerText = hourlyTemp[12];
        onePmTemp.innerText = hourlyTemp[13];
        twoPmTemp.innerText = hourlyTemp[14];
        threePmTemp.innerText = hourlyTemp[15];
        fourPmTemp.innerText = hourlyTemp[16];
        fivePmTemp.innerText = hourlyTemp[17];
        sixPmTemp.innerText = hourlyTemp[18];
        sevenPmTemp.innerText = hourlyTemp[19];
        eightPmTemp.innerText = hourlyTemp[20];
        ninePmTemp.innerText = hourlyTemp[21];
        tenPmTemp.innerText = hourlyTemp[22];
        elevenPmTemp.innerText = hourlyTemp[23];
        twelvePmTemp.innerText = hourlyTemp[24];

        console.log(data.hourly.temperature_2m[2]);

        console.log(hourlyTemp);

        rainSymbol.classList.remove("hidden");
        tempSymbol.classList.remove("hidden");
        humidSymbol.classList.remove("hidden");
        windSymbol.classList.remove("hidden");

        if (temp == "celsius") {
            feelsLike.innerText = currentTemp;           
        }
        else {
            feelsLike.innerText = (currentTemp * 9/5) + 32;
            tempSymbol.innerHTML = `F&deg;`
        }

        humidity.innerText = currentHumidity;
        wind.innerText = currentWindSpeed;
        precipitation.innerText = currentPrecipitation;


        if (!response){
            throw new Error (`Network response was not ok: ${response.status}`);
        }
    }
    catch (error){
        console.error("There has been a problem with your fetch operation: ", error);
    }
}

const search = document.getElementById("search");
search.addEventListener("click", () => {
    getWeatherDetails();
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
const temp = "celsius";

const fahrenheit = document.getElementById("fahrenheit");
const fahrenheitTick = document.getElementById("fahrenheitTick")

const kilometer = document.getElementById("kilometer");
const kilometerTick = document.getElementById("kilometerTick");
const speed = "kilometer";

const miles = document.getElementById("miles");
const milesTick = document.getElementById("milesTick")

const mm = document.getElementById("mm");
const mmTick = document.getElementById("mmTick");
const length = "mm"

const inches = document.getElementById("inches");
const inchesTick = document.getElementById("inchesTick");


celsius.addEventListener("click", () => {
        celsius.classList.add("bg-[#2F2F48]");
        celsiusTick.classList.remove("hidden");
        fahrenheit.classList.remove("bg-[#2F2F48]");
        fahrenheitTick.classList.add("hidden");
        temp = "celsius";
})

fahrenheit.addEventListener("click", () => {
        fahrenheit.classList.add("bg-[#2F2F48]");
        fahrenheitTick.classList.remove("hidden");
        celsius.classList.remove("bg-[#2F2F48]");
        celsiusTick.classList.add("hidden");
        temp = "fahrenheit";
})

kilometer.addEventListener("click", () => {
        kilometer.classList.add("bg-[#2F2F48]");
        kilometerTick.classList.remove("hidden");
        miles.classList.remove("bg-[#2F2F48]");
        milesTick.classList.add("hidden");
        speed = "kilometer";
})

miles.addEventListener("click", () => {
        miles.classList.add("bg-[#2F2F48]");
        milesTick.classList.remove("hidden");
        kilometer.classList.remove("bg-[#2F2F48]");
        kilometerTick.classList.add("hidden");
        speed = "miles";
})

mm.addEventListener("click", () => {
        mm.classList.add("bg-[#2F2F48]");
        mmTick.classList.remove("hidden");
        inches.classList.remove("bg-[#2F2F48]");
        inchesTick.classList.add("hidden");
        length = "mm"
})

inches.addEventListener("click", () => {
        inches.classList.add("bg-[#2F2F48]");
        inchesTick.classList.remove("hidden");
        mm.classList.remove("bg-[#2F2F48]");
        mmTick.classList.add("hidden");
        length = "inches"
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
    theDay.classList.remove("text-md");
    dayDropdown.classList.add("hidden");
    dayDropDownState = false;
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
    theDay.classList.remove("text-md");
    dayDropdown.classList.add("hidden");
    dayDropDownState = false;
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
    dayDropdown.classList.add("hidden");
    dayDropDownState = false;
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
    theDay.classList.remove("text-md");
    dayDropdown.classList.add("hidden");
    dayDropDownState = false;
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
    theDay.classList.remove("text-md");
    dayDropdown.classList.add("hidden");
    dayDropDownState = false;
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
    theDay.classList.remove("text-md");
    dayDropdown.classList.add("hidden");
    dayDropDownState = false;
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
    theDay.classList.remove("text-md");
    dayDropdown.classList.add("hidden");
    dayDropDownState = false;
})
