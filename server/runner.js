const { exec } = require("child_process");
const fs = require("fs");

function runCode(code, language = "javascript") {
  return new Promise((resolve, reject) => {
    let filename, command;

    switch (language.toLowerCase()) {
      case "python":
        filename = "temp.py";
        command = "python temp.py";
        break;
      case "javascript":
      default:
        filename = "temp.js";
        command = "node temp.js";
    }

    fs.writeFileSync(filename, code);

    exec(command, (error, stdout, stderr) => {
      if (error) return reject(stderr || error.message);
      resolve(stdout || stderr);
    });
  });
}

module.exports = { runCode };