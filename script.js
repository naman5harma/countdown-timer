const newYears = "18 Dec 2023";
const daysel = document.getElementById("days");

const hoursel = document.getElementById("hours");

const minsel = document.getElementById("minutes");

const secondsel = document.getElementById("seconds");
function countdown() {
  const newYearsDate = new Date(newYears);
  const currDate = new Date();
  const totalseconds = (newYearsDate - currDate) / 1000;

  const Days = Math.floor(totalseconds / 3600 / 24);
  const Hours = Math.floor(totalseconds / 3600) % 24;
  const minutes = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;
  //   console.log(Days, Hours, minutes, seconds);

  daysel.innerHTML = formattime(Days);
  hoursel.innerHTML = formattime(Hours);
  minsel.innerHTML = formattime(minutes);
  secondsel.innerHTML = formattime(seconds);
}

function formattime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();

setInterval(countdown, 1000);
