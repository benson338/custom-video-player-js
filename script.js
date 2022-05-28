const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const volSlider = document.getElementById('vol-slider');
const timestamp = document.getElementById('timestamp');
const duration = document.getElementById('duration');

// Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    play.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Display total duration
  let totmins = Math.floor(video.duration / 60);
  if (totmins < 10) {
    totmins = '0' + String(totmins);
  }
  let totsecs = Math.floor(video.duration % 60);
  if (totsecs < 10) {
    totsecs = '0' + String(totsecs);
  }
  duration.innerHTML = `${totmins}:${totsecs}`;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

function setVolume() {
  // console.log(+volSlider.value);
  video.volume = +volSlider.value / 100;
}

function changeVolume() {
  video.volume = +volSlider.value / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event Listners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
document.addEventListener('DOMContentLoaded', setVolume);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

volSlider.addEventListener('input', changeVolume);
volSlider.addEventListener('change', changeVolume);
