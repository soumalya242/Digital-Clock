let months = [
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
let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let hours = document.getElementById("hrs");
let minuets = document.getElementById("mins");
let second = document.getElementById("sec");
let date = document.getElementById("dat");
let month = document.getElementById("mon");
let day = document.getElementById("day");
let year = document.getElementById("year");
let ampm = document.getElementById("am-pm");

setInterval(() => {
  let time = new Date();
  hours.innerHTML = time.getHours();
  minuets.innerHTML = time.getMinutes();
  second.innerHTML = time.getSeconds();
  date.innerHTML = time.getDate();
  year.innerHTML = time.getFullYear();
  ampm.innerHTML = time.getHours() >= 12 ? "PM" : "PM";
  month.innerText = months[time.getMonth()];
  day.innerText = days[time.getDay()];
}, 1000);
