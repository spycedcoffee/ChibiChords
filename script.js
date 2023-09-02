console.log("Welcome to Spotify Otaku")

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Sparkle.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Sparkle", filePath: "songs/Sparkle.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Hikarunara", filePath: "songs/Hikarunara.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Memories", filePath: "songs/Memories.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Crying for rain", filePath: "songs/Crying for rain.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "New Genesis", filePath: "songs/1.mp3", coverPath: "covers/cover5.png"},
    {songName: "Silhouette", filePath: "songs/1.mp3", coverPath: "covers/cover7.jpg"},
    {songName: "Dream Lantern", filePath: "songs/1.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "Blue Bird", filePath: "songs/1.mp3", coverPath: "covers/cover8.jpg"},
    {songName: "a - sparkle", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "b - sparkle", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//.audioElement.play()

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen  to Events 
audioElement.addEventListener('timeupdate', ()=>{
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
