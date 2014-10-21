(function(){
    var app = angular.module('weatherapp', []);

    app.controller('WeatherController', function(){

    });

})();

    var day = new Date();
    var newDay = day.getUTCDay();
    console.log(newDay);

    var date = new Date();
    var newDate = date.getDate();
    console.log(newDate);

    var month = new Date();
    var newMonth = month.getMonth();
    console.log(newMonth);

    var year = new Date();
    var newYear = year.getFullYear();
    console.log(newYear);

    var todayDate = newDay + newDate + newMonth + newYear;

    console.info('Today is', todayDate)

console.log("HEY");