const express = require("express");
const path = require("path");

const app = express();
const port = 3008;

// Serve static files from the 'KUET StudyMaterials' directory
app.use(express.static(path.join(__dirname, "KUET StudyMaterials")));

// Route handler for the root URL ("/")
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "KUET StudyMaterials", "Home_design", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(
    "Server==\x1b[0m\x1b[32msuccess\x1b[0m\x1b[37m__________\x1b[0m\x1b[33mhomeserver.js\x1b[0m\x1b[37m running \x1b[0m\x1b[37mMain homepage\x1b[0m\x1b[37m__________\x1b[0mon \x1b[31mport \x1b[0m\x1b[31m3008\x1b[0m"
  );
});
