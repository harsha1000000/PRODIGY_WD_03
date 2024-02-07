let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function cellClicked(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementById('board').children[index].innerText = currentPlayer;
    
    if (checkWin(currentPlayer)) {
      document.getElementById('message').innerText = `${currentPlayer} wins!`;
      gameOver = true;
    } else if (isBoardFull()) {
      document.getElementById('message').innerText = 'It\'s a draw!';
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winningCombos.some(combo => {
    return combo.every(index => board[index] === player);
  });
}

function isBoardFull() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;
  
  document.getElementById('message').innerText = '';
  
  const cells = document.getElementById('board').children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
