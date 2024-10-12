document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.getElementById('play');
    const audio = document.getElementById('audio');
    const progressBar = document.getElementById('pb');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play().catch(function (error) {
                console.error('Error attempting to play audio:', error);
            });
            playButton.classList.remove('fa-circle-play');
            playButton.classList.add('fa-circle-pause');
        } else {
            audio.pause();
            playButton.classList.remove('fa-circle-pause');
            playButton.classList.add('fa-circle-play');
        }
    });

    audio.addEventListener('timeupdate', function () {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    });

    progressBar.addEventListener('input', function () {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });

    audio.addEventListener('ended', function () {
        playButton.classList.remove('fa-circle-pause');
        playButton.classList.add('fa-circle-play');
    });
});