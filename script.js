const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const muteBtn = document.getElementById('muteBtn');
const volumeBar = document.getElementById('volumeBar');
const fullscreenBtn = document.getElementById('fullscreenBtn');

let isPlaying = false;
let isMuted = false;

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
        isPlaying = true;
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
        isPlaying = false;
    }
}

function updateSeekBar() {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
}

function seekVideo() {
    const time = (seekBar.value / 100) * video.duration;
    video.currentTime = time;
}

function toggleMute() {
    if (isMuted) {
        video.muted = false;
        muteBtn.textContent = 'Mute';
        isMuted = false;
    } else {
        video.muted = true;
        muteBtn.textContent = 'Unmute';
        isMuted = true;
    }
}

function updateVolume() {
    video.volume = volumeBar.value / 100;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
        fullscreenBtn.textContent = 'Exit Fullscreen';
    } else {
        document.exitFullscreen();
        fullscreenBtn.textContent = 'Fullscreen';
    }
}

video.addEventListener('timeupdate', updateSeekBar);
playPauseBtn.addEventListener('click', togglePlayPause);
seekBar.addEventListener('input', seekVideo);
muteBtn.addEventListener('click', toggleMute);
volumeBar.addEventListener('input', updateVolume);
fullscreenBtn.addEventListener('click', toggleFullscreen);
