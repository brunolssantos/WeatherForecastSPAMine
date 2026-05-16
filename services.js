// SERVICES
weatherApp.service('cityService', ['$http', function($http) {
    
    this.city = "New York, NY";

}]);

weatherApp.service('weatherService', ['$resource', function($resource) {

    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=XXXX", {
            callback: "JSON_CALLBACK"
        }, { get: { method: "JSONP" } });
        return weatherAPI.get({ q: city, cnt: days });
    };

}]);