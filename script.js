document.getElementById("spinner");
animateSpin = spinner.animate([
    { transform: 'rotate(0)' },
    { transform: 'rotate(360deg)' }
], {
    duration: 1000,
    iterations: Infinity
});
document.getElementById("stop").addEventListener("click", function() {
    animateSpin.cancel();
});
document.getElementById("play").addEventListener("click", function() {
    animateSpin.play();
});
document.getElementById("pause").addEventListener("click", function() {
    animateSpin.pause();
});
document.getElementById("reverse").addEventListener("click", function() {
    animateSpin.reverse();
});
document.getElementById('half').addEventListener('click', function() {
    animateSpin.playbackRate = 0.5;
});
document.getElementById('normal').addEventListener('click', function() {
    animateSpin.playbackRate = 1;
});
document.getElementById('double').addEventListener('click', function() {
    animateSpin.playbackRate = 2;
});
document.getElementById('triple').addEventListener('click', function() {
    animateSpin.playbackRate = 3;
});