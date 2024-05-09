function updateClock() {
  const now = new Date();
  const hours = now.getHours() || 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate angles for hour, minute, and second hands
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6;
  const secondAngle = seconds * 6;

  // Rotate the lines based on the calculated angles
  $("#hourLine")
    .css("transform", `rotate(${hourAngle}deg)`)
    .children(".clock_number")
    .html(hours)
    .css("transform", `rotate(${-hourAngle}deg)`);
  $("#minuteLine")
    .css("transform", `rotate(${minuteAngle}deg)`)
    .children(".clock_number")
    .html(minutes)
    .css("transform", `rotate(${-minuteAngle}deg)`);
  $("#secondLine")
    .css("transform", `rotate(${secondAngle}deg)`)
    .children(".clock_number")
    .html(seconds)
    .css("transform", `rotate(${-secondAngle}deg)`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
