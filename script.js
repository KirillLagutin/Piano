document.addEventListener('keydown', playNote);

let keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', playNote);
});

function playNote(e) {
    let key, audio;
    
    if(e.keyCode) {
        key = document.querySelector(`[data-note="${e.keyCode}"]`);
        audio = document.getElementById(e.keyCode);
    }
    else {
        key = e.target;
        audio = document.getElementById(key.dataset.note);
    }

    key.classList.add('active')

    audio.currentTime = 0;
    audio.play();
    audio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}