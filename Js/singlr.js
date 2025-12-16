import { songs } from "./music.js";

let singleImg = document.getElementById("singleImg");
let singleTit = document.getElementById("singleTit");
let singleArt = document.getElementById("single_artist");
let playBtn = document.getElementById("play");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let currentTimeEl = document.getElementById("currentTime");
let durationEl = document.getElementById("duration");
let progress = document.getElementById("progress");


let url = location.search;
let id = new URLSearchParams(url).get("card-id");
let currentAudio = new Audio()
let currentIndex = songs.findIndex(item => item.id ==id);
function allMusic(){
    let song = songs[currentIndex]
    singleImg.src = `${song.cover}`
    singleTit.innerHTML = `${song.title}`
    singleArt.innerHTML = `${song.artist}`

    currentAudio.src = song.audio
    currentAudio.addEventListener("loadedmetadata",()=>{
        durationEl.innerHTML = formatTime(currentAudio.duration)
        progress.max = currentAudio.duration
    })

    }

allMusic()
playBtn.addEventListener("click",()=>{
if(currentAudio.paused){
    currentAudio.play()
}else{
    currentAudio.pause()
}
})
prevBtn.addEventListener("click",()=>{
    currentIndex--
    if(currentIndex <0) currentIndex =songs.length -1
    allMusic()
    currentAudio.play()
})
nextBtn.addEventListener("click",()=>{
    currentIndex++
    if(currentIndex >= songs.length) currentIndex = 0
    allMusic()
    currentAudio.play()
})
currentAudio.addEventListener("timeupdate",()=>{
    currentTimeEl.innerHTML = formatTime(currentAudio.currentTime)
    progress.value = currentAudio.currentTime
})
progress.addEventListener("input",()=>{
    currentAudio.currentTime = progress.value
})
function formatTime(time){
    let min = Math.floor(time/60)
    let src = Math.floor(time%60)
    if(sec>10)sec="0"+sec
    return`${min}:${sec}`
}