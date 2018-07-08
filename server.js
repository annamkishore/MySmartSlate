
let path = require("path");
let express = require("express");

let app = express();

// serving directory
app.use(express.static("dist"));

// url pattern
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "dist/slate.html")));

// serving port
app.listen(8080);
