// option 2

function makeYellow(){
    document.body.style.backgroundColor = 'Yellow';
}
function makeGreen(){
    document.body.style.backgroundColor = 'Green';
}
// option 3
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor='blue';
}