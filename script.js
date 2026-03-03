const audio = new Audio('Mysterious Ways.mp3');
audio.loop = true;
audio.volume = 0.7;

function playAudio() {
    audio.play().catch(err => {
        console.log("Autoplay blocked. User interaction required.", err);
    });
}

window.addEventListener('load', () => {
    playAudio();
});

document.getElementById('playButton').addEventListener('click', () => {
    playAudio();
});
