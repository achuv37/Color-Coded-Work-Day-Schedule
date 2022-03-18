# Work Day Scheduler 
## Description
* Pseudocode 
  1. Display the Current day at the top of the calender. setInterval function   displays the time every seconds
  2. Display the Day planner presented with the time blocks for standard business hours.
  3. Create Time, Textarea, Save button for the time block section.
  4. Allow user to enter a event in the text area section, when it clicked.
  5. Display color-coded time blocks to indicate whether it is in past,present  or future.
  6. Set the local storage, Saved events persist, when the page reloaded again.



 * The current date,time displays at the top of the calender. Moment() function to get a Moment.js date object for the exact time. Set interval function displays the time every seconds.The function displayTime shows the time.
 * The function createPlanner for generating time block. The time block  contains rows. Which shows the time/hour on left side, a textarea part for the events at center and save button on the right side. The time block contains 9 rows for standard business hours( 9 am to 5 pm).
 * The function localStorageEvents make the events to persist, when the user refresh the page. The $("textarea") query here is evaluating to an array which contains every textarea element on the page, indexing into this array to get a particular textarea element. The value is being set to the value of a localStorage item whose key also contains that same index, so when the index is 0, $("textarea")[index] becomes the first textarea element on the page, and its value attribute is being assigned to the value associated with the "localStorageEventList1" key inside localStorage.Saving to and loading from a different item in localStorage for the contents each textarea element, using the unique index of each textarea element in the array to create a unique key in localStorage.
 * The function updateColorByHour, displays color-coded time blocks to indicate whether the event is in past, present or future. moment().hour() method gives the current hour. The specificHour variable returns the integer contains the timeId attribute value. This value compare with the currentTime value.Checking the conditions using if/else statements and adding to the corresponding classes.The function displays past events in gray color, present events red color and green color shows future events.
## Website
 * https://achuv37.github.io/Color-Coded-Work-Day-Schedule/ 

## Built With
 * HTML
 * CSS
 * JavaScript

## Images
![Week 5](https://user-images.githubusercontent.com/93412486/159074541-74dc36ae-dd44-4a71-981b-5aab1c3e16d3.JPG)
![Week 51](https://user-images.githubusercontent.com/93412486/159074550-60a98c0f-37d0-486c-b954-adf3259991da.JPG)
## Video

## Contributed By
* Aswathy 

