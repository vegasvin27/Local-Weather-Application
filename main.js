$(document).ready(function () {


    //Grabbing Geo-location coordinates
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            $("#data").html("Latitude: " + lat + "<br>Longitude: " + lon);
            console.log(lat, lon);
            $.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=b52681a81662a7533c219afee17a3dee", function (data) {

                console.log(data);

                const cityName = data.name;
                console.log(cityName);
                const currentTemp = data.main.temp;
                const windSpeed = data.wind.speed;
                console.log(windSpeed);
                //console.log(currentTemp);
                $('#name').append(cityName);
                const cloudiness = data.weather[0].description;
                const icon = data.weather[0].icon;
                const iconLink = ('http://openweathermap.org/img/w/'+icon+'.png');
                console.log(iconLink);
                console.log(cloudiness);
                console.log(icon);
                $("#clouds").append(cloudiness);
                $("#icon").html("<img src='" + iconLink + "'>");
                

                //Function to convert Kelivin to Fahrenheit
                var fahrenheit = parseFloat((currentTemp * (9 / 5)) - 459.67).toFixed(1);
                function convertToK(currentTemp) {
                    console.log(fahrenheit);
                    $('#fah').append(fahrenheit + 'F');
                    //$('#temp').append($("button"));
                }

                convertToK(currentTemp);

                //Function to convert Fahrenheit to Celsius
                var celsius = parseFloat((fahrenheit - 32) * (5 / 9)).toFixed(1);
                function convertToC(fahrenheit) {
                    console.log(celsius);
                    $('#cel').append(celsius + 'C');
                }
                convertToC(fahrenheit);

                /* $('#test').click(function() {
                    $('#test').fadeOut(function() {
                        $('#test').text(($('#test').text() == 'F') ? 'C' : 'F').fadeIn();
                    })
                }) */

                /* $("#test").click(function () {
                    $("#test").toggle();
                }); */
                //Function to convert wind speed from m/s to mph
                function convertWindSpeed(windSpeed) {
                    //Convert m/s to mph 
                    //1 meter per second = 2.237 mph
                    //const speed = 2.237;
                    var mph = parseFloat((windSpeed * 2.237).toFixed(1));
                    console.log(mph);
                    $('#windSpeed').append(mph + ' mph');
                }
                convertWindSpeed(windSpeed);


                $("#button").click(function () {
                    /*  $("#button1").remove();
                     $("#button2").toggle('button2'); */
                    $("p").toggle('cel');
                });
            });
        });
    }
});


//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=580995f792e0d4a822eb2ed4d6a642d5

//b52681a81662a7533c219afee17a3dee

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