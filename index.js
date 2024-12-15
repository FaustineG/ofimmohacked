const express = require("express");
const fs = require("node:fs");
const shell = require("shelljs");

const app = express();
const p = 3000;
const cors = require("cors");

app.use(express.json()); // to support JSON-encoded bodies

app.use(
  cors({
    origin: "*", // Allow requests from this origin,
  }),
  express.static("./")
);

app.get("/data", async (_req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    const datadata = JSON.parse(data).data;
    console.log(datadata.length)
    res.status(200).json(datadata);
  });
});

app.listen(p, "0.0.0.0", () => {
  console.log(`listening on port ${p}`);
});
