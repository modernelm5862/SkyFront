(function(){
    var app = angular.module('weatherapp', []);

    app.controller('WeatherController', function(){

    });

})();

function getAllDates($scope) {

	//Getting the day
	var day = new Date();
	var dayArray = new Array(7);
	dayArray[0] = "Sunday";
	dayArray[1] = "Monday";
	dayArray[2] = "Tuesday";
	dayArray[3] = "Wednesday";
	dayArray[4] = "Thursday";
	dayArray[5] = "Friday";
	dayArray[6] = "Saturday";
	var todayDay = dayArray[day.getUTCDay()];
	$scope.day = todayDay;

	//getting the date
	var date = new Date();
	var newDate = date.getDate();
	$scope.date = newDate;

	//getting the month
	var month = new Date();
	var newMonth = month.getUTCMonth();
    var correctMonth = newMonth + 1;
	$scope.month = correctMonth;

	//getting the year
	var year = new Date();
	var newYear = year.getFullYear();
	$scope.year = newYear;
};

function getTemperature($scope){
	//need something that will randomly generate a number between -5 and 25 degrees
	var randomTemperature = Math.floor((Math.random() * 31) ); //range from 0 to 30
	var finalTemperature = randomTemperature - 5; //minus 5 so that 0 turns into -5 and 30 turns into 25, the min and max range.
	$scope.celcius = finalTemperature;

    var convertToFahrenheit = (finalTemperature * 1.8) + 32;
    var limitedFahrenheit = convertToFahrenheit.toFixed(1);
    $scope.fahrenheit = limitedFahrenheit;

    if (finalTemperature <= 5) {
        $scope.warning = "CAUTION, it is less than 5 degrees outside";
    }
    if (finalTemperature <= 0){
        $scope.warning = "&#9888;WARNING, ICE ALERT!";
    }

    if (finalTemperature >=20) {
        $scope.information = "It is a nice day today";
    }

};