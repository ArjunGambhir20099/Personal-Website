const dublinTime = document.getElementById("dublin-time");

if (dublinTime) {
  const dublinFormatter = new Intl.DateTimeFormat("en-IE", {
    timeZone: "Europe/Dublin",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  function updateDublinTime() {
    dublinTime.textContent = `Dublin, Ireland: ${dublinFormatter.format(new Date())}`;
  }

  updateDublinTime();
  setInterval(updateDublinTime, 1000);
}
