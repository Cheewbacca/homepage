document.getElementById('shiriivuk').addEventListener('click', (e) => {
    e.preventDefault();
    new Audio('../audio/voice.mp3').play();
});