$(document).ready(function () {

    //Grabbing Geo-location coordinates
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            $("#data").html("Latitude: " + lat + "<br>Longitude: " + lon);
            $.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b52681a81662a7533c219afee17a3dee", function (data) {

                //If need to see object data, just console.log(data)

                const cityName = data.name;
                const currentTemp = data.main.temp;
                const windSpeed = data.wind.speed;
                const cloudiness = data.weather[0].main;
                const icon = data.weather[0].icon;
                const iconLink = ('http://openweathermap.org/img/w/' + icon + '.png');
                const windDegrees = data.wind.deg;

                //Appending weather data to html elements
                $('#name').append(cityName);
                $("#clouds").append(cloudiness);
                $("#icon").html("<img src='" + iconLink + "'>");

                //Function to convert Kelivin to Fahrenheit
                var fahrenheit = parseFloat((currentTemp * (9 / 5)) - 459.67).toFixed(1);
                function convertToK(currentTemp) {
                    $('#fah').append(fahrenheit + ' &#8457;');
                    //$('#temp').append($("button"));
                }
                convertToK(currentTemp);

                //Function to convert Fahrenheit to Celsius
                var celsius = parseFloat((fahrenheit - 32) * (5 / 9)).toFixed(1);
                function convertToC(fahrenheit) {
                    $('#cel').append(celsius + ' &#8451;');
                }
                convertToC(fahrenheit);

                //Function to convert wind speed from meters per second to miles per hour
                function convertWindSpeed(windSpeed) {
                    //1 meter per second = 2.237 miles per hour
                    var mph = parseFloat((windSpeed * 2.237).toFixed(1));
                    $('#windSpeed').append(mph + ' mph ');
                }
                convertWindSpeed(windSpeed);

                //Function to convert wind degrees (0-360) to a cardinal direction
                function degToCompass(windDegrees) {
                    var val = Math.floor((windDegrees / 22.5) + 0.5);
                    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
                    var direction = (arr[(val % 16)]);
                    $('#windSpeed').append(direction);
                }
                degToCompass(windDegrees);

                $("button").click(function () {
                    /*  $("#button1").remove();
                    $("#button2").toggle('button2'); */
                    $(".tp").toggle('cel');
                });
            });
        });
    }
});

//Testing section

/*if currentTemp === fahrenheit
$('temp').addeventlistener('click')
*/
/*

$("button").click(function() {
    
    $("#temp").click(function() {
        $("#temp").fadeOut(function() {
            $("#temp").text(($("#temp").text() == fahrenheit) ? celcius: fahrenheit).fadeIn();
        })
    })
});

*/

/*

$([fahrenheit]").click(function() {
    
    $("fahrenheit variable").toggle();
    //celcius display needs to be set to 'none'
});
*/

/*
$("#test").click(function () {
    $("#test").toggle();
});
*/

/* <button>Toggle</button>
<p>Hello</p>
<p style="display: none">Good Bye</p>

<script>
$( "button" ).click(function() {
    $("p").toggle();
}); */


/* $('#test').click(function() {
    $('#test').fadeOut(function() {
        $('#test').text(($('#test').text() == 'F') ? 'C' : 'F').fadeIn();
    })
}) */

/* $("#test").click(function () {
    $("#test").toggle();
}); */