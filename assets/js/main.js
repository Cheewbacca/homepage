document.getElementById('shiriivuk').addEventListener('click', (e) => {
    e.preventDefault();
    new Audio('./assets/audio/voice.mp3').play();
});