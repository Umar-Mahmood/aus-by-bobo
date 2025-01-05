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

// Handle click event on Chrome icon
document
  .querySelector('.bottom-icon[alt="Google Chrome"]')
  .addEventListener("click", function () {
    const chromeTab = document.getElementById("chrome-tab");
    chromeTab.style.display =
      chromeTab.style.display === "none" ? "block" : "none";
  });

// Handle minimize button click
document.getElementById("minimize-btn").addEventListener("click", function () {
  const chromeTab = document.getElementById("chrome-tab");
  chromeTab.style.display = "none";
});

// Handle full screen button click
document
  .getElementById("fullscreen-btn")
  .addEventListener("click", function () {
    const chromeTab = document.getElementById("chrome-tab");
    if (chromeTab.style.width === "100%" && chromeTab.style.height === "100%") {
      chromeTab.style.width = "80%";
      chromeTab.style.height = "80%";
    } else {
      chromeTab.style.width = "100%";
      chromeTab.style.height = "100%";
    }
  });

// Handle close button click
document.getElementById("close-btn").addEventListener("click", function () {
  const chromeTab = document.getElementById("chrome-tab");
  chromeTab.style.display = "none";
});

// Commented out the code for drag and drop functionality
/*
const chromeTab = document.getElementById("chrome-tab");
const chromeTabControls = document.querySelector(".chrome-tab-controls");

chromeTabControls.addEventListener("mousedown", function (e) {
  let shiftX = e.clientX - chromeTab.getBoundingClientRect().left;
  let shiftY = e.clientY - chromeTab.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    chromeTab.style.left = pageX - shiftX + "px";
    chromeTab.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener(
    "mouseup",
    function () {
      document.removeEventListener("mousemove", onMouseMove);
    },
    { once: true }
  );

  chromeTabControls.ondragstart = function () {
    return false;
  };
});
*/

// Ensure the Chrome tab stays on top
chromeTab.addEventListener("mousedown", function () {
  chromeTab.style.zIndex = 1001;
});
