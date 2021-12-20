
// Display current day and time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


// Establish event listener for saveBtn user interaction
$(".saveBtn").on("click", function () {
    var userInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // set values in localStorage
    localStorage.setItem(time, userInput);

})

// Check localStorage for any previously saved data
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

function checkHours() {
    var currentHourBlock = moment().hour();

    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (hourBlock < currentHourBlock) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hourBlock === currentHourBlock) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}
checkHours();




