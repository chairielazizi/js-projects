const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadlint = document.querySelector(".deadeline");

// items will return a nodelist
const items = document.querySelectorAll(".deadline-format h4");
console.log(items);

// get the current date dynamically
let futureDate = new Date(2021, 4, 24, 11, 30, 0);
console.log(futureDate);

//accesing the time components
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
console.log(month);
console.log(months[month]); // get the month from the months array
month = months[month];

const date = futureDate.getDate();

let weekday = futureDate.getDay();
console.log(weekday); //it is 1 because it is monday
weekday = weekdays[futureDate.getDay()];

//change the text on the index.html page
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//set the countdown timers
//future time in miliseconds
const futureTime = futureDate.getTime();
console.log(futureTime); //future date deadline

function getRemainingTime() {
  const today = new Date().getTime(); //current time to the future date
  console.log(today);

  const t = futureTime - today;
  console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(oneDay);
}

getRemainingTime();
