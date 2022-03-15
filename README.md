# Work Day Scheduler 
## Pseudocode 
  * Display the Current day at the top of the calender. setInterval function   displays the time every seconds
  * Display the Day planner presented with the time blocks for standard business hours.
  * Create Time, Textarea, Save button for the time block section.
  * Allow user to enter a event in the text area section, when it clicked.
  * Display color-coded time blocks to indicate whether it is in past,present  or future.
  * Set the local storage.
  * Saved events persist, when the page reloaded again.
## Description
  * The current date,time displays at the top of the calender. Moment() function to get a Moment.js date object for the exact time. Set interval function displays the time every seconds.The function displayTime shows the time.
  * The function createPlanner for generating time block. The time block  contains rows. Which shows the time/hour on left side, a textarea part for the events at center and save button on the right side. The time block contains 9 rows for standard business hours( 9 am to 5 pm).
  * The function localStorageEvents make the events to persist, when the user refresh the page. The $("textarea") query here is evaluating to an array which contains every textarea element on the page, indexing into this array to get a particular textarea element. The value is being set to the value of a localStorage item whose key also contains that same index, so when the index is 0, $("textarea")[index] becomes the first textarea element on the page, and its value attribute is being assigned to the value associated with the "localStorageEventList1" key inside localStorage.Saving to and loading from a different item in localStorage for the contents each textarea element, using the unique index of each textarea element in the array to create a unique key in localStorage.
  * The function updateColorByHour, displays color-coded time blocks to indicate whether the event is in past, present or future. moment().hour() method gives the current hour. The specificHour variable returns the integer contains the timeId attribute value. This value compare with the currentTime value.Checking the conditions using if/else statements and adding to the corresponding classes.The function displays past events in gray color, present events red color and green color shows future events.