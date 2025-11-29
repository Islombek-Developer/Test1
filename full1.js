import { songs } from "./music.js";

let musicTable = document.getElementById("music");
let inp = document.getElementById("inp")

let currentBtn = null
let currentAudio = new Audio()

function alldata(filteredSongs){
    musicTable.innerHTML = ""
    filteredSongs.map(item => {
        const tr = document.createElement("tr");
        tr.className = "grid grid-cols-4 items-center py-4 px-5 hover:bg-[#333] transition-all duration-200";
    
        tr.innerHTML = `
            <td class="text-white text-lg">${item.title}</td>
    
            <td class="flex justify-center">
            <a href="./singlr.html?card-id=${item.id}">
            <img 
            class="music-img w-[80px] h-[80px] rounded-[50%] object-cover cursor-pointer" 
            src="${item.cover}" 
            data-audio="${item.audio}"
            data-title="${item.title}"
        >
            </a>
               
            </td>
    
            <td class="flex justify-center">
                <button class="btn px-3 py-2 bg-green-600 rounded-lg" data-audio="${item.audio}">
                play
                </button>
            </td>
    
            <td class="flex justify-center">
                <span class="time text-blue-400">00:00</span>
            </td>
        `;
    
        musicTable.appendChild(tr);
    
    });
    addPlayEvents()
}
alldata(songs);

inp.addEventListener("keyup",()=>{
    console.log(inp.value);
    let filtered = songs.filter(song=>{
        return song.title.includes(inp.value)
    })
   alldata(filtered);
})


function addPlayEvents(){
    
document.querySelectorAll(".btn").forEach(button=>{
  

    button.addEventListener("click",()=>{
    let audio = button.dataset.audio
     let tr = button.closest("tr")
     let timeSpan = tr.querySelector(".time")
     let musicImg = tr.querySelector(".music-img")
     
if(currentBtn && !currentBtn==button){
    currentAudio.pause()
    currentBtn.innerHTML = "play" 
    musicImg.classList.remove("spin-slow ")
  
}
if(currentBtn === button){
    if (!currentAudio.paused) {
        currentAudio.pause();
        button.innerHTML = "play";
        musicImg.classList.remove("spin-slow")
        return;
    }
   
    if (currentAudio.paused) {
        currentAudio.play();
        button.innerHTML = "pause";
        musicImg.classList.add("spin-slow")
        return;
    }
    else {
      
        currentAudio.src = audioSrc;
        currentAudio.currentTime = 0; 
        currentAudio.play();
        button.innerHTML = "pause";
        musicImg.classList.add("spin-slow ")
        currentBtn = button;
    }
}
        if(currentAudio && !currentAudio.paused)
        { currentAudio.pause()
             currentBtn.innerHTML = "play" 

             musicImg.classList.add("spin-slow")


            }
             
        else{
        
          currentAudio.src = audio
            currentAudio.play()
            button.innerHTML = "pause"
            musicImg.classList.add("spin-slow")
            currentBtn = button
            currentAudio.ontimeupdate = ()=>{
        
                let minut=   Math.floor(currentAudio.currentTime/60)
                let second =   Math.floor(currentAudio.currentTime%60)
    
                    timeSpan.innerHTML = `${minut.toString().padStart(2,"0")}:${second.toString().padStart(2,"0")}`
                    localStorage.setItem("musicState", JSON.stringify({
                        src: button.dataset.audio,
                        currentTime: currentAudio.currentTime
                    }));
             
            }
            currentAudio.onended = () => {
                button.innerHTML = "play";      
                timeSpan.innerHTML = "00:00";   
             musicImg.classList.add("spin-slow")

              
            };
            
       
        }
       
    })
  
   
})
}