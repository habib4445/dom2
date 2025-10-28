// option 2

function makeYellow(){
    document.body.style.backgroundColor = 'Yellow';
}
function makeGreen(){
    document.body.style.backgroundColor = 'Green';
}

function makePurple(){
    document.body.style.backgroundColor = 'Purple';
}
// option 3
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor='blue';
}