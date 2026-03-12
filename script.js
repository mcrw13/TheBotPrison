const audio = new Audio('Map/Mysterious Ways.mp3');
audio.loop = true;
audio.volume =1.0;
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
(function () {

  function isBot() {
    const ua = navigator.userAgent.toLowerCase();

    const botPatterns = [
      "bot","crawler","spider","crawling","facebookexternalhit",
      "slurp","bingpreview","mediapartners-google","headless",
      "phantom","selenium","puppeteer","playwright"
    ];

    for (let i = 0; i < botPatterns.length; i++) {
      if (ua.includes(botPatterns[i])) return true;
    }

    if (navigator.webdriver) return true;

    if (!navigator.languages || navigator.languages.length === 0) return true;

    if (!navigator.plugins || navigator.plugins.length === 0) return true;

    return false;
  }

  // immediate detection
  if (isBot()) {
    window.location.href = "https://mcrw13.github.io/TheBotPrison/trap.html";
    return;
  }

  // behavior detection
  let humanActivity = false;

  ["mousemove","scroll","keydown","touchstart"].forEach(event => {
    window.addEventListener(event, () => {
      humanActivity = true;
    }, {once:true});
  });

  setTimeout(function () {
    if (!humanActivity) {
      window.location.href = "https://mcrw13.github.io/TheBotPrison/trap.html";
    }
  }, 3000);

})();
window.location.assign("[mcrw13.github.io](https://mcrw13.github.io/TheBotPrison/trap.html)");
// or
window.location.replace("[mcrw13.github.io](https://mcrw13.github.io/TheBotPrison/trap.html)");

