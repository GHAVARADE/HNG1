function updateTime() {
  const currentTime = Date.now();
  const readableTime = new Date(currentTime).toLocaleString(); // shows local date + time

  // Set both values
  document.getElementById("currentTime").textContent = currentTime;
  document.getElementById("readableTime").textContent = readableTime;
}

// Run once when the page loads
updateTime();

// Update every second (optional)
setInterval(updateTime, 1000);
