const songsData = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', url: 'song1.mp3' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', url: 'song2.mp3' },
  { id: 3, title: 'Song 3', artist: 'Artist 3', url: 'song3.mp3' },
];

let audioPlayer;
let playPauseBtn;
let volumeSlider;
let progressBar;

function initializePlayer() {
  audioPlayer = document.getElementById('audioPlayer');
  playPauseBtn = document.getElementById('playPauseBtn');
  volumeSlider = document.getElementById('volumeSlider');
  progressBar = document.getElementById('progressBar');

  audioPlayer.addEventListener('timeupdate', updateProgressBar);
}

function displaySongs() {
  const songList = document.getElementById('songList');
  songList.innerHTML = '';
  songsData.forEach(song => {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    li.setAttribute('data-url', song.url);
    li.addEventListener('click', () => playSong(song.url));
    songList.appendChild(li);
  });
}

function playSong(url) {
  if (audioPlayer.src !== url) {
    audioPlayer.src = url;
  }
  audioPlayer.play();
  playPauseBtn.textContent = 'Pause';
}

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = 'Play';
  }
}

function changeVolume() {
  audioPlayer.volume = volumeSlider.value;
}

function updateProgressBar() {
  const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = percentage + '%';
}

window.onload = function() {
  initializePlayer();
  displaySongs();
};
