const express = require("express");
const shell = require("shelljs");

const app = express();
const p = 3000;
const cors = require("cors");
const data = require("./data.json");

app.use(express.json()); // to support JSON-encoded bodies

app.use(
  cors({
    origin: "http://localhost:5500", // Allow requests from this origin
  }),
  express.static("./")
);

app.get("/data", (_req, res) => {
  shell.exec("./toto.sh", (code, stdout, sdteerr) => {
    res.status(200).json(data.data);
  });
});

app.listen(p, () => {
  console.log(`listening on port ${p}`);
});
