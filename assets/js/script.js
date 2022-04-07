// Defining variables
const calender = document.querySelector(".container");
var todaysDate = moment().format("dddd, MMMM Do");
console.log(todaysDate);

const date = new Date();
var recentHour = date.getHours();
minute = date.getMinutes();

recentHour = recentHour % 12 || 12;
recentHour = recentHour + ":" + 0 + minute;

console.log(recentHour);
// console.log(hour);
let am = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let pm = [12, 13, 14, 15, 16, 17, 18, 19, 20, 1];
console.log(calender);
const d = new Date();
recentHour = d.getHours();
var element = document.getElementById(".container");
console.log(recentHour);
let hour = 0;
let am_pm;
if (hour < 12) {
  am_pm = "AM";
} else am_pm = "PM";

for (hour = 0; hour <= 11; hour++) {
  console.log(hour);
  if (hour >= 0 && hour <= 1) {
    hour++;
  } else if (hour <= 24) {
    hour;
  }
  if (hour < recentHour && hour < 12) {
    calender.append(
      "beforeend",
      `<div class="past">${hour + "&nbsp AM"}</div>`
    );
  } else if (hour < recentHour && hour >= 12) {
    calender.insertAdjacentHTML(
      "beforeend",
      `<div class="past">${hour + "&nbsp PM"}</div>`
    );
  } else if (hour == recentHour && hour < 12) {
    calender.insertAdjacentHTML(
      "beforeend",
      `<div class="present">${hour + "&nbsp AM"}</div>`
    );
  } else if (hour == recentHour && hour >= 12) {
    calender.insertAdjacentHTML(
      "beforeend",
      `<div class="present">${hour + "&nbsp PM"}</div>`
    );
  } else if (hour > recentHour && hour < 12) {
    calender.insertAdjacentHTML(
      "beforeend",
      `<div class="present">${hour + "&nbsp AM"}</div>`
    );
  } else {
    calender.insertAdjacentHTML(
      "beforeend",
      `<div class="future">${hour + "&nbsp PM"}</div>`
    );
  }
}

div class='row'>
    <div class='col-2 hour text-right' id='hour" + (index + 9) + "'>
        <span>" + value.format("h A") + "</span>
    </div>
    <div class='col-8 event-group' id='timeblock" + (index + 9) + "'>
      <textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea>
    </div>
  " + <div class='col-2 save-delete' id='save-delete" + (index + 9) + "'>
    <i class='fas fa-save' title='Save Event'></i>
    <i class='fas fa-trash' title='Remove Event'></i>
  </div>
      </div>
    </div>

// // Get current day using moment.js
var currentDay = moment().format("dddd, MMMM Do");

// Set each timeblock in the daily schedule using moment.js
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);
var hour18 = moment().hour(18);

// // Create an array of hour blocks for code generation
// var hours = [
//   hour9,
//   hour10,
//   hour11,
//   hour12,
//   hour13,
//   hour14,
//   hour15,
//   hour16,
//   hour17,
// ];

// // Get local storage data or set to empty
// var events9 = JSON.parse(localStorage.getItem("hour9")) || "";
// var events10 = JSON.parse(localStorage.getItem("hour10")) || "";
// var events11 = JSON.parse(localStorage.getItem("hour11")) || "";
// var events12 = JSON.parse(localStorage.getItem("hour12")) || "";
// var events13 = JSON.parse(localStorage.getItem("hour13")) || "";
// var events14 = JSON.parse(localStorage.getItem("hour14")) || "";
// var events15 = JSON.parse(localStorage.getItem("hour15")) || "";
// var events16 = JSON.parse(localStorage.getItem("hour16")) || "";
// var events17 = JSON.parse(localStorage.getItem("hour17")) || "";

// // Generate all timeblocks and insert saved local storage data
// $.each(hours, function (index, value) {
//   events = [
//     events9,
//     events10,
//     events11,
//     events12,
//     events13,
//     events14,
//     events15,
//     events16,
//     events17,
//   ];
//   calender.insertHTML(
//     //       "beforeend",("<div class='row'><div class='col-2 hour text-right' id='hour" +
//     index +
//       9 +
//       "'><span>" +
//       value.format("h A") +
//       "</span></div><div class='col-8 event-group' id='timeblock" +
//       (index + 9) +
//       "'><textarea class='events col-12' id='eventblock" +
//       (index + 9) +
//       "'>" +
//       events[index] +
//       "</textarea></div>" +
//       "<div class='col-2 save-delete' id='save-delete" +
//       (index + 9) +
//       "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash' title='Remove Event'></i></div></div></div>"
//   );
// });

// // Display current day at top of planner
// $("#currentDay").text(currentDay);
