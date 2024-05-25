function GameBoard() {
  const rows = 3;
  const columns = 3;
  board = [];

  for (i = 0; i < rows; i++) {
    board[i] = [];
    for (j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }
  const printBoard = () => {
    const values = board.map((row) => row.map((cell) => cell.getMark()));
    console.log(values);
  };

  const getSpace = (col, row) => board[col][row].getMark();

  const inputMark = (row, col, player) => {
    board[row][col].setMark(player.getMark());
    }
  
  const drawBoard = () => {
    const values = board.map((row) => row.map((cell) => cell.getMark()));
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < values.length; i++) {
      const row = document.createElement("div");
      for (let j = 0; j < values[i].length; j++) {
        const cell = document.createElement("div");
        cell.innerText = values[i][j];
        row.appendChild(cell);
      }
      container.appendChild(row);
    }
  };
  return { printBoard, inputMark, getSpace, drawBoard };
}
function Cell() {
  let mark = "";
  const setMark = (player) => {
    mark = player;
  };
  const getMark = () => mark;
  return { setMark, getMark };
}
function Player(mark) {
  const getMark = () => mark;
  return { getMark };
}
function GameController() {
  gameboard = GameBoard();
  playerX = Player("X");
  playerO = Player("O");
  let activePlayer = playerO;
  const switchActivePlayer = () =>
    activePlayer === playerO
      ? (activePlayer = playerX)
      : (activePlayer = playerO);
  const getActivePlayer = () => activePlayer;
  const placeMark = (player) => {
    while (true){
    const col = Number(prompt("which column?"));
    const row = Number(prompt("which row?"));
    if (gameboard.getSpace(row,col) === ""){
    gameboard.inputMark(row, col, player);
    break;
    }
    console.log("this cell already contains a mark!")
    }
  };
  const checkForWin = () => {
    //check for win verticaly
    const playerMark = activePlayer.getMark();
    for (let i = 0; i < 3; i++) {
      if (
        gameboard.getSpace(i, 0) === playerMark &&
        gameboard.getSpace(i, 1) === playerMark &&
        gameboard.getSpace(i, 2) === playerMark
      ) {
        console.log(`${gameboard.getSpace(i, 0)} won!`);
        return true;
      }
    }
    //check for win horizontaly
    for (let i = 0; i < 3; i++) {
      if (
        gameboard.getSpace(0, i) === playerMark &&
        gameboard.getSpace(1, i) === playerMark &&
        gameboard.getSpace(2, i) === playerMark
      ) {
        console.log(`${gameboard.getSpace(i, 0)} won!`);
        return true;
      }
    }
    //check for win diagonaly
    if (
      gameboard.getSpace(0, 0) === playerMark &&
      gameboard.getSpace(1, 1) === playerMark &&
      gameboard.getSpace(2, 2) === playerMark
    ) {
      console.log(`${gameboard.getSpace(0, 0)} won!`);
      return true;
    }
    if (
      gameboard.getSpace(0, 2) === playerMark &&
      gameboard.getSpace(1, 1) === playerMark &&
      gameboard.getSpace(2, 0) === playerMark
    ) {
      console.log(`${gameboard.getSpace(2, 0)} won!`);
      return true;
    }
  };
  const turn = () => {
    for (let k = 0; k < 9; k++) {
      console.log(`${activePlayer.getMark()}'s turn`);
      placeMark(activePlayer);
      if (checkForWin()) {
        gameboard.printBoard();
        gameboard.drawBoard();
        break;
      }
      switchActivePlayer();
      gameboard.printBoard();
      gameboard.drawBoard();
    }
  };
  return { turn };
}
game = GameController();
game.turn();
