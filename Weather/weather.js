document.addEventListener('DOMContentLoaded', ()=>{
    const cityInput = document.getElementById("city-input");
    const weatherInfo = document.getElementById("weather-info")
    const getWeatherBtn = document.getElementById("get-W");
    const cityName = document.getElementById("city-name");
    const cityTemp = document.getElementById("temperature");
    const cityDescrip = document.getElementById("description");
    const errorM = document.getElementById("error-message");
    const weatherIcon = document.getElementById("weather-icon")

    const apiKey = "2eed406b53bdeb39a686969df1f483be";

    getWeatherBtn.addEventListener('click', async ()=>{
        const input = cityInput.value.trim();
        if(!input) return;
        try{
        const  weatherOfCity = await fetchWeatherData(input);
        displayWeatherData(weatherOfCity);
        } catch(e){
        throwError();
    }
    })
    async function fetchWeatherData(input){
        //fetch the wetherReport
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${apiKey}`;
        // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${cityInput}&lon={lon}&exclude={part}&appid=${apiKey}`
        const responce = await fetch(url);
        console.log(typeof responce);
        console.log("Responce", responce );
        const data = responce.json();
        return data;
        
    }
    const showIcon = {
        Clear : `<i class="fa-solid fa-sun"></i>`,
        Cloudy : `<i class="fa-solid fa-cloud"></i>`,
        Rainy : `<i class="fa-solid fa-umbrella"></i>`,
        None: `<i class="fa-solid fa-cloud-sun"></i>` 
    }
    const icon ="";
    
    function displayWeatherData(data){
        console.log(data);
        const {name, main, weather} = data;
        const description = weather[0].main;
        try{ 
            if (description == showIcon.Clear)
            icon = showIcon.Clear;
            else icon = showIcon.None;
        }catch(e){
            console.log(e);
        }
        cityName.innerHTML = name;
        weatherIcon.innerHTML = icon;
        cityTemp.textContent = `Tempreature: ${main.temp}`;
        cityDescrip.textContent = `Weather: ${weather[0].main}`;
        //display the wetherReport
        weatherInfo.classList.remove("hidden");
        errorM.classList.add("hidden")
    }
    function throwError(){
        //fetch the wetherReport
        weatherInfo.classList.add("hidden");
        errorM.classList.remove("hidden")
    }
})