const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

const BACKEND_PORT = 3001;

const user = {
  username: "nikita",
  password: "password",
};

app.use(parser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const body = req.body;

  if (body.username === user.username && body.password === user.password) {
    res.sendStatus(200);
    return;
  }
  res.sendStatus(400);
});

app.listen(BACKEND_PORT, () => {
  console.log(`App is listening on ${BACKEND_PORT}`);
});
