console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songNamePlay = document.getElementById('songNamePlay');
let songItemPlay  = document.getElementsByClassName('songItemPlay');
let gif = document.getElementById('gif');
// let timestamp = document.getElementById('timestamp');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// audioElement.play();


let songs = [
    { Name: "Tuyo - Narcos", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { Name: "Cielo", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { Name: "Cheque - Shubh", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { Name: "Jeena Jeena - Atif Aslam", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { Name: "Chaleya - Jawan", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { Name: "Choo Lo - Local Train", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { Name: "Mujhe Tum Nazar Se-Mehdi Hassan", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
]
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('span')[0].innerText = songs[i].Name;

})
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.remove('fa', 'fa-play-circle-o');
            element.classList.add('fa', 'fa-pause-circle-o');

        })
        audioElement.play();
        masterPlay.classList.remove('fa', 'fa-play-circle-o');
        masterPlay.classList.add('fa', 'fa-pause-circle-o');
        gif.style.opacity = 1;
    }
    else {
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.remove('fa', 'fa-pause-circle-o');
            element.classList.add('fa', 'fa-play-circle-o');

        })
        audioElement.pause();
        masterPlay.classList.remove('fa', 'fa-pause-circle-o');
        masterPlay.classList.add('fa', 'fa-play-circle-o');
        gif.style.opacity = 0;


    }
})
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    console.log('timeupdate');
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

});
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa', 'fa-pause-circle-o');
        element.classList.add('fa', 'fa-play-circle-o');

    })
    masterPlay.classList.remove('fa', 'fa-play-circle-o');
    masterPlay.classList.add('fa', 'fa-pause-circle-o');


}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        let time = audioElement.currentTime;
        songIndex = parseInt(e.target.id)
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            audioElement.src = `songs/${songIndex + 1}.mp3`;

            e.target.classList.remove('fa', 'fa-play-circle-o');
            e.target.classList.add('fa', 'fa-pause-circle-o');
            gif.style.opacity = 1;
            audioElement.currentTime = time;
            audioElement.play();
            masterPlay.classList.remove('fa', 'fa-play-circle-o');
            masterPlay.classList.add('fa', 'fa-pause-circle-o');
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa', 'fa-pause-circle-o');
            masterPlay.classList.add('fa', 'fa-play-circle-o');
            e.target.classList.remove('fa', 'fa-pause-circle-o');
            e.target.classList.add('fa', 'fa-play-circle-o');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            
            audioElement.currentTime = time;
            gif.style.opacity = 0;
        }

        
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex++;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa', 'fa-play-circle-o');
    masterPlay.classList.add('fa', 'fa-pause-circle-o');
})
document.getElementById('prev').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex--;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;

    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa', 'fa-play-circle-o');
    masterPlay.classList.add('fa', 'fa-pause-circle-o');
})





