const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/angular-songs-web"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/angular-songs-web/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server running on port 5000...");
});
