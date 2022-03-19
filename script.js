let weather = {
    "apiKey": "0052ee6bc735c2e14ab50cc260e50169",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city
            + "&units=metic&appid="
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerHTML = "weather in " + name;
        document.querySelector(".icons").src = 
        "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
        document.querySelector(".descriptions").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".wind").innerText = "wind speed:" + speed + "Km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?"+  name +"')"
    },
    search: function(){
        this.fetchWeather(document.querySelector('.search_bar').value);
    }
};
document.querySelector(".search button").addEventListener("click", function(){
weather.search();
})
document.querySelector(".search_bar").addEventListener('keyup', function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});
weather.fetchWeather("Denver" ) 