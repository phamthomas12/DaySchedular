$(document).ready(function () {
    let momentVar = moment().format("dddd, MMMM Do YYYY, h:mm a");
    
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
     //Clear all button 
     $( document ).ready(function() {

        var clearBtn = $(`<button>`);
        clearBtn.addClass("clear-button")
        clearBtn.text("Clear All")
        $("#clear-btn-div").append(clearBtn);
        clearBtn.on('click', function(){
            $('.description').val("");
            localStorage.clear();
    })
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
    //Styling based on current time
    var currentHour = moment().hour();
    
    $(".description").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (currentHour > blockHour) {
            $(this).addClass("past");
        } else if (currentHour === blockHour) {
            $(this).remove("past");
            $(this).addClass("present");
        } else if (currentHour < blockHour) {
            $(this).remove("past");
            $(this).remove("present");
            $(this).addClass("future");
        }
            

    });
            
    })
   

});