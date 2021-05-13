const express = require("express");
const bodyParser = require("body-parser");
const checkWin = require("./functionTests");

const app = express();

const PORT = 8080;

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));

const gameboard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let curPlayer = 1;
let winner = "";

const swap = function () {
  if (curPlayer === 1) {
    curPlayer = 2;
  } else {
    curPlayer = 1;
  }
}

app.get("/", (req, res) => {
  const templateVars = { gameboard, curPlayer, winner }
  res.render("c4_play", templateVars)
})

app.post("/", (req, res) => {
  const coords = Object.keys(req.body)[0].split(",").map((x) => Number(x));
  if (coords[0] === 5 || gameboard[coords[0] + 1][coords[1]] !== 0) {
    gameboard[coords[0]][coords[1]] = curPlayer;
    if (checkWin(gameboard)) {
      if (curPlayer === 1) {
        winner = "blue";
      } else {
        winner = "red";
      }
      res.redirect("/")
    }
    swap();
    res.redirect("/")
  } else {
    res.redirect("/")
  }
})

app.post("/clear", (req, res) => {
  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard[i].length; j++) {
      gameboard[i][j] = 0;
    }
  }
  winner = "";
  curPlayer = Math.floor(Math.random() * 2) + 1
  res.redirect("/")
})

app.listen(PORT, () => {
  console.log(`Server On and Listening on Port: ${PORT}`)
})