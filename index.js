let express = require("express");
let app = express();
var path = require("path");

express.static("public");

app.get("/", (req, res) =>  {
  res.sendFile(path.join(__dirname + "/public/views/index.html"));
});

app.listen(3000);
