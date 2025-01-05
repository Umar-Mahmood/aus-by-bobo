const hour = new Date().getHours();
let backgroundImage = "";

if (hour >= 6 && hour < 9) {
  backgroundImage = 'url("./assets/macOS-Big-Sur-Morning.jpg")';
} else if (hour >= 9 && hour < 12) {
  backgroundImage = 'url("./assets/macOS-Big-Sur-After-Dawn.jpg")';
} else if (hour >= 12 && hour < 18) {
  backgroundImage = 'url("./assets/macOS-Big-Sur-Day.jpg")';
} else if (hour >= 18 && hour < 21) {
  backgroundImage = 'url("./assets/macOS-Big-Sur-Evening.jpg")';
} else if (hour >= 21 && hour < 24) {
  backgroundImage = 'url("./assets/macOS-Big-Sur-Night.jpg")';
} else {
  backgroundImage = 'url("./assets/macOS-Big-Sur-Dawn.jpg")';
}

document.body.style.backgroundImage = backgroundImage;
document.body.style.backgroundSize = "cover";

// Set the calendar date dynamically
const date = new Date();
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
document.getElementById("calendar-month").textContent =
  monthNames[date.getMonth()];
document.getElementById("calendar-date").textContent = date.getDate();
