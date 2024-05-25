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
  };
  const drawBoard = () => {
    const values = board.map((row) => row.map((cell) => cell.getMark()));
    for (let i = 0; i < values.length(); i++) {
      for (let j = 0; j < values[i].length(); j++) {
        let;
      }
    }
  };
  return { printBoard, inputMark, getSpace };
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
    const col = Number(prompt("which column?"));
    const row = Number(prompt("which row?"));
    gameboard.inputMark(row, col, player);
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
    for (let k = 0; k < 8; k++) {
      console.log(`${activePlayer.getMark()}'s turn`);
      placeMark(activePlayer);
      if (checkForWin()) {
        gameboard.printBoard();
        break;
      }
      switchActivePlayer();
      gameboard.printBoard();
    }
  };
  return { turn };
}
game = GameController();
game.turn();
