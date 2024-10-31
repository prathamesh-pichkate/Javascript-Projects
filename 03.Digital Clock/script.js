const clock = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  let timeString = date.toLocaleTimeString(); // Get time as a string
  let [time, period] = timeString.split(" "); // Split time and AM/PM

  // Set the inner HTML with time and AM/PM in separate spans
  clock.innerHTML = `${time} <span class="am-pm">${period}</span>`;
}, 1000);
