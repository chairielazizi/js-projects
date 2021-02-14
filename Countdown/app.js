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
