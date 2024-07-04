let scores1 = document.querySelector('#score1');
let scores2 = document.querySelector('#score2');
let scor1btn = document.querySelector('#scor1');
let scor2btn = document.querySelector('#scor2');
let rst = document.querySelector('#res');

scor1btn.addEventListener('click', function(e){
    scores1.textContent = parseInt(scores1.textContent) +1;
});

scor2btn.addEventListener('click', function(e){
    scores2.textContent = parseInt(scores2.textContent) +1;
});

rst.addEventListener('click', function(e) {
    scores1.textContent = 0;
    scores2.textContent = 0;
});


