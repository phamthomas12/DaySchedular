$(document).ready(function () {
    let momentVar = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
    //display current day at top of calender
    function displayDate() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
    }
    displayDate()
});