const clickSound = document.getElementById('clickSound');

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}


function showPopup(id) {
  playClickSound();
  hideAllPopups();
  const popup = document.getElementById(id);
  if (popup) popup.classList.add("show");
}

function hidePopup(id) {
  playClickSound();
  const popup = document.getElementById(id);
  if (popup) popup.classList.remove("show");
}

function hideAllPopups() {
  document.querySelectorAll(".popup").forEach(popup => popup.classList.remove("show"));
}


document.getElementById('themeToggle').addEventListener('click', () => {
  playClickSound();
  document.body.classList.toggle('dark-mode');

  const icon = document.getElementById('themeIcon');
  const isDark = document.body.classList.contains('dark-mode');

  icon.src = isDark
    ? 'https://img.icons8.com/ios/50/sun--v1.png'
    : 'https://img.icons8.com/ios/50/moon-symbol.png';
});

const wingpng = document.getElementById('wingpng');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

wingpng.addEventListener('click', () => {
  if (!isPlaying) {
    bgMusic.play();
    isPlaying = true;
  } else {
    bgMusic.pause();
    isPlaying = false;
  }
});

const luffyMusic = document.getElementById('luffyMusic');
let isLuffyPlaying = false;

const luffyIcon = document.getElementById('cornerGif'); // or use `luffyIcon` if renamed
luffyIcon.addEventListener('click', () => {
  if (!isLuffyPlaying) {
    luffyMusic.play();
    isLuffyPlaying = true;
  } else {
    luffyMusic.pause();
    isLuffyPlaying = false;
  }
});
