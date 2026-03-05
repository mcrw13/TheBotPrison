const audio = new Audio('Map/Mysterious Ways.mp3');
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

for (let i = 0; i < 10; i++) {
  let a = document.createElement("a");
  a.href = "/TheBotPrison/?page=" + Math.random().toString(36);
  a.innerText = "Next";
  document.body.appendChild(a);
}
