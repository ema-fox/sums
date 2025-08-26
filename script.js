addEventListener('DOMContentLoaded', () => {
    let player = document.querySelector('#player');
    setInterval(() => {
        player.style.left = "" + Math.floor(Math.random() * 700) + "px";
        console.log(11);
    }, 3000);

});


function buy(name) {
    document.querySelector(`#${name}`).style.opacity = 1;
    document.querySelector(`#buy_${name}`).remove();
}

function buy_sofa(evt) {
    document.querySelector('#sofa').style.opacity = 1;
    document.querySelector('#buy_sofa').remove();
}
