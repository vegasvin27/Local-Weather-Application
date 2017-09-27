$(document).ready(function () {

    function success (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $("#data").html("Latitude: " + latitude  + "<br>Longitude: " + longitude);
                console.log(latitude, longitude);
            });
        }
    }


    $.get("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=b52681a81662a7533c219afee17a3dee", function (data) {

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
        function convertToK(currentTemp) {
            var fahrenheit = parseFloat((currentTemp * 9 / 5) - 459.67).toFixed(1);
            console.log(fahrenheit);
            $('#temp').append(fahrenheit + 'F');
        }

        convertToK(currentTemp);

        //Function to convert Fahrenheit to Celsius
        function convertToC() {

        }

        



        //Grabbing Geo-location coordinates

    });
});


//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=580995f792e0d4a822eb2ed4d6a642d5

//b52681a81662a7533c219afee17a3dee






