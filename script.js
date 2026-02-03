const axios = require('axios');
const searchBar = document.getElementById("searchBar");

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