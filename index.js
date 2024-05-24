function GameBoard(){
    const rows = 3;
    const columns = 3;
    board = []

    for(i=0;i<rows;i++){
        board[i] = []
        for(j=0;j<columns;j++){
            board[i].push(Cell())
        }
    }
    const printBoard = () =>{
   const values = board.map((row) => row.map((cell) => cell.getMark()));
   console.log(values);
   };
    return {printBoard}
}
function Cell(){
    const mark = "";
    const setMark = (player) => {
        mark = player;
    };
    const getMark = () => mark;
    return {setMark, getMark};
}
function Player(mark){
    const getMark = () => mark
    return getMark
}
