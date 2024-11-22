// countdown.js

// Function to calculate and update the countdown
function updateCountdown() {
  // Set the target date and time
  const targetDate = new Date("November 25, 2024 11:30:00").getTime();

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the difference between the target and current time
  const difference = targetDate - now;

  // Calculate the time units
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Repeat the function every second
  setTimeout(updateCountdown, 1000);
}

// Start the countdown
updateCountdown();
