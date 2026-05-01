const express = require("express");
const cors = require("cors");
const path = require("path");
const { runCode } = require("./runner");

const app = express();

app.use(cors());
app.use(express.json());

//  Serve frontend
app.use(express.static(path.join(__dirname, "../client")));
    app.use("/client", express.static(path.join(__dirname, "../client")));

app.post("/run", async (req, res) => {
  const { code, language } = req.body;

  try {
    const output = await runCode(code, language);
    res.json({ output });
  } catch (err) {
    res.json({ output: err.toString() });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});