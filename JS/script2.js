

var r = 0;
var g = 0;
var b = 0;

function RBar() {
    r = document.getElementById('rBar').value;
    document.getElementById('p').style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
}
function BBar() {
    b= document.getElementById('bBar').value;
    document.getElementById('p').style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
}
function GBar() {
    g = document.getElementById('gBar').value;
    document.getElementById('p').style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
    
}



