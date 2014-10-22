(function(){
    var app = angular.module('weatherapp', []);

    app.controller('WeatherController', function(){

    });

})();

var day = new Date();
var newDay = day.getUTCDay();

var dayArray = new Array(7);
dayArray[0] = "Sunday";
dayArray[1] = "Monday";
dayArray[2] = "Tuesday";
dayArray[3] = "Wednesday";
dayArray[4] = "Thursday";
dayArray[5] = "Friday";
dayArray[6] = "Saturday";
var todayDay = dayArray[day.getDay()];
console.log("Today's Day is", todayDay);

var date = new Date();
var newDate = date.getDate();
console.info("Today's Date is", newDate);

var month = new Date();
var newMonth = month.getMonth();
console.info("Today's Month is", newMonth);

var year = new Date();
var newYear = year.getFullYear();
console.info("Today's Year is", newYear);



console.log("HEY");