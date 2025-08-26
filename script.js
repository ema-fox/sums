addEventListener('DOMContentLoaded', () => {
    let player = document.querySelector('#player');
    setInterval(() => {
        player.style.left = "" + Math.floor(Math.random() * 700) + "px";
        console.log(11);
    }, 3000);

});
