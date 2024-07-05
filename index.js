let scores1 = document.querySelector('#score1');
let scores2 = document.querySelector('#score2');
let scor1btn = document.querySelector('#scor1');
let scor2btn = document.querySelector('#scor2');
let rst = document.querySelector('#res');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;


scor1btn.addEventListener('click', function(){
    if (!gameOver){
        p1Score += 1; //bu kısımın üstte olmasının sebebi 1 arttırdığımızda text contente ulaşıp orda da 1 arttırması.
        if (p1Score === winningScore) {
            gameOver = true;
            scores1.style.color ='green';
            scores2.style.color ='red';
        }
        scores1.textContent = p1Score;
    }
});

scor2btn.addEventListener('click', function(){
    if(!gameOver){
        p2Score += 1;
        if(p2Score === winningScore) {
            gameOver = true;
            scores2.style.color ='green';
            scores1.style.color ='red';
        }
        scores2.textContent = p2Score;
    }
});

rst.addEventListener('click', function() {
    scores1.textContent = 0;
    scores2.textContent = 0;
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    scores1.style.color ='#333';
    scores2.style.color ='#333';
});
