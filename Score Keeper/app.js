const p1 = {
    score: 0,
    button: document.querySelector('.btn-success'), 
    display: document.querySelector('#p1Score')
}
const p2 = {
    score: 0, 
    button: document.querySelector('.btn-primary'),
    display: document.querySelector('#p2Score') 
}
const resetButton = document.querySelector('.btn-danger');
const winScoreSelect = document.querySelector('#playto');
let winScore = 6;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.style.color = 'green';
            opponent.display.style.color = 'red';
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = `${player.score}`;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})
resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for(let p of [p1,p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.removeAttribute('style');
        p.button.disabled = false;
    }
}
winScoreSelect.addEventListener('change', function(){
    winScore = parseInt(this.value);
    reset();
})


