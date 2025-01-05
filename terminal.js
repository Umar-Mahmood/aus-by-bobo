const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.querySelector(".terminal-output");

const commands = {
  help: "Available commands: help, clear, echo [message]",
  clear: function () {
    terminalOutput.innerHTML = "";
  },
  echo: function (args) {
    return args.join(" ");
  },
};

terminalInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const input = terminalInput.value.trim();
    const [command, ...args] = input.split(" ");
    if (commands[command]) {
      const output =
        typeof commands[command] === "function"
          ? commands[command](args)
          : commands[command];
      terminalOutput.innerHTML += `<div>${output || ""}</div>`;
    } else {
      terminalOutput.innerHTML += `<div>Command not found: ${command}</div>`;
    }
    terminalInput.value = "";
  }
});
