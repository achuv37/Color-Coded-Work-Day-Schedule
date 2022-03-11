// Pseudo code
// 1. Display the Current day at the top of the calender. setInterval function displays the time every seconds
// 2. Display the Day planner presented with the time blocks for standard business hours.
// 3. Create Time, Textarea, Save button for the time block section.
// 4. Allow us to enter a event in the text area section, when it clicked.
// 5. Display color-coded time blocks to indicate whether it is in past,present or future.
// 6. Set the local storage.
// 7. Saved events persist, when the page reloaded again.

// Declaring variables.
var containerEl = $(".container");
var showTime = ["9 am","10 am","11 am","12 am","1 am","2 am","3 am","4 am","5 am"];
var timeId = ["9","10","11","12","13","14","15","16","17"];
var saveButton = $("button");

// Display the current day: moment() function to get a Moment.js date object for the exact time 

$("#currentDay").text(moment().format("Do MMMM YYYY, h: mm: ss a"));

// Display the current date and time every seconds.
setInterval(function() {
    $("#currentDay").text(moment().format("Do MMMM YYYY, h: mm: ss a"));
},1000);
