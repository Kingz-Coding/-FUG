// ================================
// Copy Contract Address
// ================================
const copyBtn = document.getElementById('copy-ca');
const contractAddress = '0xYourContractAddressHere'; // <-- replace with your actual CA

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(contractAddress).then(() => {
    copyBtn.textContent = 'Copied!';
    copyBtn.style.background = '#4CAF50';
    setTimeout(() => {
      copyBtn.textContent = 'Copy CA';
      copyBtn.style.background = '#5EC44A';
    }, 1500);
  });
});

// ================================
// Whac-A-Mole Game
// ================================
const gameBoard = document.querySelector('.game-board');
let score = 0;

// Create a score display
const scoreDisplay = document.createElement('div');
scoreDisplay.classList.add('score-display');
scoreDisplay.textContent = `Score: ${score}`;
gameBoard.parentNode.insertBefore(scoreDisplay, gameBoard);

// Create 9 holes for the moles
function createGameBoard() {
  for (let i = 0; i < 9; i++) {
    const hole = document.createElement('div');
    hole.classList.add('hole');
    const mole = document.createElement('img');
    mole.src = 'asset/IMG_7960.PNG'; // mole image
    mole.style.display = 'none';
    mole.classList.add('mole');
    hole.appendChild(mole);
    gameBoard.appendChild(hole);
  }
}

// Show a mole randomly
function popMole() {
  const holes = document.querySelectorAll('.hole');
  holes.forEach(hole => hole.firstChild.style.display = 'none'); // hide all
  const randomIndex = Math.floor(Math.random() * holes.length);
  holes[randomIndex].firstChild.style.display = 'block';
}

// Handle mole clicks
function whacMole() {
  const moles = document.querySelectorAll('.mole');
  moles.forEach(mole => {
    mole.addEventListener('click', () => {
      if (mole.style.display !== 'none') {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        mole.style.display = 'none';
      }
    });
  });
}

// Initialize game
createGameBoard();
whacMole();
setInterval(popMole, 1000); // mole appears every 1 second

// ================================
// Mobile Meme Gallery Auto-Scroll
// ================================
const memeGallery = document.getElementById('meme-gallery');
if (window.innerWidth <= 768) {
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += memeGallery.clientWidth * 0.8; // scroll width of one item
    if (scrollAmount >= memeGallery.scrollWidth) scrollAmount = 0;
    memeGallery.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, 3000);
}
