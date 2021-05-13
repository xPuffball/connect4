const gameboard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let curPlayer = 1;

const checkWin = function (gameboard) {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (gameboard[i][j] !== 0) {
        if (gameboard[i][j] === gameboard[i][j + 1] &&
          gameboard[i][j + 1] === gameboard[i][j + 2] &&
          gameboard[i][j + 2] === gameboard[i][j + 3]) {
        return true;
        }
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      if (gameboard[i][j] !== 0) {
        if (gameboard[i][j] === gameboard[i + 1][j] &&
          gameboard[i + 1][j] === gameboard[i + 2][j] &&
          gameboard[i + 2][j] === gameboard[i + 3][j]) {
        return true;
        }
      }
    }
  }
  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 4; j++) {
      if (gameboard[i][j] !== 0) {
        if (gameboard[i][j] === gameboard[i + 1][j + 1] &&
            gameboard[i + 1][j + 1] === gameboard[i + 2][j + 2] &&
            gameboard[i + 2][j + 2] === gameboard[i + 3][j + 3]) {
          return true;
        }
      }
    }
  }
  for (let i = 0; i < 3; i++){
    for (let j = 3; j < 7; j++) {
      if (gameboard[i][j] !== 0) {
        if (gameboard[i][j] === gameboard[i + 1][j - 1] &&
            gameboard[i + 1][j - 1] === gameboard[i + 2][j - 2] &&
            gameboard[i + 2][j - 2] === gameboard[i + 3][j - 3]) {
          return true;
        }
      }
    }
  }



  return false;
}


module.exports = checkWin;