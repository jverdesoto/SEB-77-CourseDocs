document.addEventListener('DOMContentLoaded', function() {
  const COLOR_LOOKUP = {
      '1': 'purple',
      '-1': 'orange',
      'null': 'white'
  };

  const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];

  let board;
  let turn;
  let winner;
  const message = document.querySelector('h1');
  const playAgainButton = document.querySelector('button');

  document.getElementById('board').addEventListener('click', handleMove);
  playAgainButton.addEventListener('click', initialize);

  initialize();

  function initialize() {
      board = [null, null, null, null, null, null, null, null, null];
      turn = 1;
      winner = null;
      render();
  }

  function handleMove(event) {
      const idx = parseInt(event.target.id.replace('sq', ''));
      if (isNaN(idx) || board[idx] || winner) return;
      board[idx] = turn;
      turn *= -1;
      winner = getWinner();
      render();
  }

  function getWinner() {
      for (let winArr of winningCombinations) {
          const [a, b, c] = winArr;
          const sum = board[a] + board[b] + board[c];
          if (Math.abs(sum) === 3) return board[a];
      }

      if (board.includes(null)) return null;
      return 'T';
  }

  function render() {
      renderBoard();
      renderMessage();
      playAgainButton.disabled = !winner;
  }

  function renderBoard() {
      board.forEach(function(sqVal, idx) {
          const squareEl = document.getElementById(`sq${idx}`);
          if (squareEl) {
              squareEl.style.backgroundColor = COLOR_LOOKUP[sqVal];
              squareEl.className = !sqVal ? 'avail' : '';
          }
      });
  }

  function renderMessage() {
      if (winner === 'T') {
          message.innerHTML = 'Tie!';
      } else if (winner) {
          message.innerHTML = `Congrats <span style="color: ${COLOR_LOOKUP[winner]}">${COLOR_LOOKUP[winner].toUpperCase()}</span>!`;
      } else {
          message.innerHTML = `<span style="color: ${COLOR_LOOKUP[turn]}">${COLOR_LOOKUP[turn].toUpperCase()}</span>'s Turn`;
      }
  }
});

