if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Puxa latitude e longitude do usuário
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Puxa a KEY do OpenWeather
        var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=2018ed515872d99b95cda4e82390fa26";

        fetch(url)
            .then(response => response.json()) //API dá um retorno JSON
            .then(data => {
                //Nome da Cidade
                var Nomedacidade = data.name;
                setTimeout(function () {
                    var cityHeader = document.querySelector("#Nomedacidade h1"); // Coloca o nome da cidade no H1
                    cityHeader.textContent = Nomedacidade; // Puxa o nome do data da API

                    //Temperaturta
                    var temperatura = data.main.temp;
                    var elementoTemperatura = document.getElementById('temperatura');
                    elementoTemperatura.innerHTML = Math.round(temperatura - 273.15) + "C°";

                    //Icone da temperatura
                    var weatherIcon = data.weather[0].icon;
                    var iconUrl = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";

                    var iconImg = document.querySelector('.weather-icon img')
                    iconImg.src = iconUrl;
                }, 500); // Espera 1s para atualizar nome da cidade

            })
            .catch(error => {
                alert(error) // Alerta se der algum erro
            })
    })
}
