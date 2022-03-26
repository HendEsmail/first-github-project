
var vd = document.getElementById("v");
var vol = document.getElementById('vol-control');
var vBar = document.getElementById('videoBar');
var spdBar = document.getElementById('spdBar');


setInterval(() => {
    var minutes = Math.floor(vd.currentTime / 60);   
    var seconds = Math.floor(vd.currentTime - minutes * 60)
    var x = minutes < 10 ? "0" + minutes : minutes;
    var y = seconds < 10 ? "0" + seconds : seconds;

    var minute = Math.floor(vd.duration / 60);   
    var second = Math.floor(vd.duration - minute * 60)
    var x1 = minute < 10 ? "0" + minute : minute;
    var y1 = second < 10 ? "0" + second : second;

    var minut = Math.floor((vd.duration-vd.currentTime) / 60);   
    var secon = Math.floor((vd.duration-vd.currentTime) - minut * 60)
    var x11 = minut < 10 ? "0" + minut : minut;
    var y11 = secon < 10 ? "0" + secon : secon;

    document.getElementById("l").innerHTML = x + ":" + y +"/"+ x1 + ":" +y1;
    document.getElementById("l1").innerHTML = x11 + ":" +y11+"/"+ x1 + ":" +y1;
        
}, 1000)

function playV() {
    if (vd.paused) {
        vd.play();
        startInt();

        
        vBar.value = vd.currentTime;
        $("#i1").removeClass("fa fa-play");
        $("#i1").addClass("fa fa-pause");
        document.getElementById('i1').style.color="red";
    }
    else {
        vd.pause();
        $("#i1").removeClass("fa fa-pause");
        $("#i1").addClass("fa fa-play");
        document.getElementById('i1').style.color="black";
    }
}

function stopV() {
    vd.pause();
    vd.currentTime = 0;
    $("#i1").addClass("fa fa-play");
    document.getElementById('i1').style.color="black";
}
function back5V() {
    vd.currentTime -= 5;
}
function back20V() {
    vd.currentTime -= 20;
}
function fw5V() {
    vd.currentTime += 5;
}
function fw20V() {
    vd.currentTime += 20;
}

function muteV() {
    
    if (!vd.muted) {
        vd.muted = true;
        $("#i").removeClass("fa fa-volume-up");
        $("#i").addClass("fas fa-volume-mute");
    }
    else {
        vd.muted = false;
        $("#i").removeClass("fas fa-volume-mute");
        $("#i").addClass("fa fa-volume-up");
    
    }

}

function startInt() {

    vd.ontimeupdate = function () {
        vBar.value = vd.currentTime;
    }
}

function changeVBar() {
    vd.currentTime = vBar.value
    startInt()
}
function changeSpdBar(){
    vd.playbackRate = spdBar.value; 
}

function changeVolBar(){
    vd.volume = vol.value; 
}

vd.onended = function () {
    vd.pause();
    document.getElementById("playB").value = "Play";
}

function openFullscreen() {
    if (vd.requestFullscreen) {
      vd.requestFullscreen();
    }
}