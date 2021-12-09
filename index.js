const express = require("express");
const path = require("path");
const PORT = 8080;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log("Server listening on " + PORT);
});
