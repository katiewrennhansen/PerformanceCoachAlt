const audio = document.getElementById('audio');
const button = document.querySelector('button');


let playing = false;

function audioPlay(){
    if(!playing){
        playing = !playing;
        audio.play();
        button.innerHTML = '<i class="fas fa-volume-up"></i>'
    } else {
        playing = !playing;
        audio.pause();
        button.innerHTML = '<i class="fas fa-volume-mute"></i>'

    }
}
    
button.addEventListener('click', audioPlay);