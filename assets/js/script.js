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
  var showTime = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm"];
  var timeId = ["9","10","11","12","13","14","15","16","17"];
  var saveButton = $("button");
  var displayDay = $("#currentDay");

// Display the current day: moment() function to get a Moment.js date object for the exact time 
function displayTime() {
  var dateTime = moment().format("MMM DD, YYYY [at] h: mm: ss a");
  displayDay.text(dateTime);
}
// Display the current date and time every seconds.
  setInterval(displayTime, 1000);
// Function to create Planner
  function createPlanner () {
  // We need to create a Time block: for loop to iterate through the showTime and timeId arrays.
    for (var i = 0; i <showTime.length; i++) {
// Creating row for time block. 
      var rowEl = $("<div class='row time-block'>");
      rowEl.attr("id", timeId[i]);
// Creating a div for showing time.
      var timeEl = $("<div class='hour col-1'>");
// Time div shows the time from 9 am to 5pm.
      timeEl.text(showTime[i]);
// Append the time division to the row
      rowEl.append(timeEl);
// Creating a textarea for user to enter events.
      var textareaEl = $("<textarea class='col-10'>");
      textareaEl.attr("id", showTime[i]);
      textareaEl.text();
// Append textarea to the row.
      rowEl.append(textareaEl);
// Creating the save button for the events to save.
      var buttonEl = $("<button type='button' class ='saveBtn col-1 fas fa-save'>");
      buttonEl.text();
// Appends the button element to the row
      rowEl.append(buttonEl);
// Appends the row to the container.
      containerEl.append(rowEl);
    }
  }
  createPlanner(); 
// Calling localStorageEvent function.
  localStorageEvents();
// Creating local storage function: for the events to persist.
  function localStorageEvents () {
  // For loop to iterate through the length of showTime.
      for (var index=0; index<showTime.length; index++) {
  // Getting data from local storage.
        $("textarea")[index].value = localStorage.getItem("localStorageEventList" + String(index +1));
      
    }
  }
  
// Adding eventListener to All the button elements.
  $("button").on("click", function (event) {
  // The event.preventDefault() method stops the default action of an element from happening.
    event.preventDefault();
    
    
  // Storing the textarea values to local storage.
    for(var index=0; index<showTime.length; index++) {
      localStorage.setItem("localStorageEventList" + String(index +1), $("textarea")[index].value);
    }
  });

// Display color-coded time blocks to indicate whether it is in past,present or future.
  function updateColorByHour () {
  // moment().hour() method gives the current hour
    var currentTime = moment().hour();
  // The forEach() method executes a provided function once for each array element.
    $(".time-block").each(function () {
  // The parseInt function converts its first argument to a string, parses that string, then returns an integer.    
      var specificHour = parseInt($(this).attr("id"));
  // Checking the conditions and adding to corresponding classes.
      if(specificHour < currentTime) {
        $(this).addClass("past"); // Gray color
      } else if(specificHour == currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present"); // Red color
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future"); // Green color
      }
    });
  }
  // calling the function.
  updateColorByHour();