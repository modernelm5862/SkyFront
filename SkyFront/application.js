(function(){
    var app = angular.module('weatherapp', []);

    app.controller('WeatherController', function(){

    });

})();

function getAllDates($scope) {

	//Getting the day
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
	$scope.day = todayDay;

	//getting the date
	var dateOutput = document.getElementById('todaysDate');
	var date = new Date();
	var newDate = date.getDate();
	$scope.date = newDate;6
	//getting the month
	var monthOutput = document.getElementById('todaysMonth');
	var month = new Date();
	var newMonth = month.getMonth();
	$scope.month = newMonth;

	//getting the year
	var yearOutput = document.getElementById('todaysYear');
	var year = new Date();
	var newYear = year.getFullYear();
	$scope.year = newYear;
};

function getTemperature($scope){
	//need something that will randomly generate a number between -5 and 25 degrees
	var randomTemperature = Math.floor((Math.random() * 31) ); //range from 0 to 30
	var finalTemperature = randomTemperature - 5; //minus 5 so that 0 turns into -5 and 30 turns into 25, the min and max range.
	$scope.temperature = finalTemperature;
};