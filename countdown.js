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
]


const openingCeremony = document.querySelector('.openingCeremony');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');



// months are zero based
//const futureDate = new Date(tempYear, tempMonth, tempDay + 22, 11, 30, 0);
let futureDate = new Date(2022,6,15,6,30);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
openingCeremony.textContent = `Opening Ceremonies begins on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all value
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set value array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function(item, index) {
      item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = '<h4 class ="expired">LET THE GAMES BEGIN!!!</h4>';
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
// set initial values
getRemainingTime();
