$(document).ready(function() {

     //Grabbing Geo-location coordinates
     var lat = 0;
     var long = 0;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
              $("#data").html("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);
                console.log(position.coords.latitude,  position.coords.longitude);
                $.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=b52681a81662a7533c219afee17a3dee", function(data) {
                console.log(data);

                const cityName = data.name;
                console.log(cityName);
                const currentTemp = data.main.temp;
                const windSpeed = data.wind.speed;
                console.log(windSpeed);
                //console.log(currentTemp);
                $('#name').append(cityName);
                $('#windSpeed').append(windSpeed);        

                //Function to convert Kelivin to Fahrenheit
                function convertToK (currentTemp) {
                    var fahrenheit = parseFloat((currentTemp * 9/5) - 459.67).toFixed(1);
                    console.log(fahrenheit);
                    $('#temp').append(fahrenheit + 'F');
                }

                convertToK(currentTemp);

                //Function to convert Fahrenheit to Celsius
                function convertToC () {

                }
            });
        });
    }
});


//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=580995f792e0d4a822eb2ed4d6a642d5

//b52681a81662a7533c219afee17a3dee






