let video = document.getElementById("my-video")
let playButton  = document.getElementById("play-button")
let controls = 0;
function watching(){
    if(controls == 0){
        video.play();
        controls = 1;
        playButton.style.opacity = "0.1";
    }
    else if(controls = 1){
        video.onpause();
        controls = 0;
        playButton.style.opacity = "1";
    }
}
playButton.addEventListener("click", watching)