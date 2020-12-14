$(document).ready(function () {
    let momentVar = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    
    //display current day at top of calender
    function displayDate() {
        let currentDay = $("#currentDay").text(momentVar);
        return currentDay;
    }
    displayDate()

    let task = []
    // retrieve any pre-exsisting tasks from local storage
    if (localStorage.getItem("items") !== null) {
        task = JSON.parse(localStorage.getItem("items"));
        for (i = 0; i < task.length; i++) {
             var hour = Object.keys(task[i])[0];
             var text = task[i][hour];
             $(".description").each(function() {
                if ($(this).attr("id") === hour) {
                    $(this).val(text);
                }
             })
         
        } 
     }
    //save button event listener to save any tasks into the local storage 
    $(".saveBtn").click(
        function() {
            var text = $(this).siblings("textarea").val().trim();
            var hourlyEntry = $(this).siblings("textarea").attr("id");
            var object = {};
            object[hourlyEntry] = text;
            task.push(object);
            localStorage.setItem("items", JSON.stringify(task));

         }
    )
});