$(document).ready(function () {
    $('#btn').click(function (e) {
        e.preventDefault();
        var api = "https://api.openweathermap.org/data/2.5/weather?q=";
        var city = $("#city").val();
        var apiKey = "&APPID=b914ec995310887460d12af3441ca278&units=metric";
        var url = api + city + apiKey;

        $.getJSON(url, function (data) {
            var apiTime =
                "https://api.ipgeolocation.io/timezone?apiKey=636a4b129fc44d1882efbfa8872ccc06&lat=";
            var cityLat = data.coord.lat;
            var cityLon = data.coord.lon;
            var amo = '&long=';
            var urlTime = apiTime + cityLat + amo + cityLon;

            $.getJSON(urlTime, function (newData) {
                var text = `Temperature in ${city} is ${data.main.temp}&#8451 <br/>
                            Currently: ${data.weather[0].description} <br/>
                            Time: ${newData.date_time_txt}<br> `;
                $("#display").html(text);
            }
            );
        });
    });

});