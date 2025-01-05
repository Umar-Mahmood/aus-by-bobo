function createConfetti() {
  const colors = ["#16C47F", "#FFD65A", "#FF9D23", "#F93827"];
  const shapes = ["square", "rectangle", "triangle", "diamond"];
  const confettiCount = 100;
  const confettiContainer = document.getElementById("confettiContainer");

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
    confetti.style.opacity = Math.random();
    confetti.style.setProperty("--rotation", `${Math.random() * 360}deg`);
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px

    if (shape === "square") {
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
    } else if (shape === "rectangle") {
      confetti.style.width = `${size * 1.5}px`;
      confetti.style.height = `${size}px`;
    } else if (shape === "triangle") {
      confetti.style.width = "0";
      confetti.style.height = "0";
      confetti.style.borderLeft = `${size / 2}px solid transparent`;
      confetti.style.borderRight = `${size / 2}px solid transparent`;
      confetti.style.borderBottom = `${size}px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
    } else if (shape === "diamond") {
      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.transform = "rotate(45deg)";
    }

    confettiContainer.appendChild(confetti);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("script.js loaded");
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", createConfetti);
});
