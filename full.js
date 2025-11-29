let music = document.getElementById("music");
let currentAudio = null;
const songs = [
    {
        id: 1,
        title: "Eminem",
        artist: "Mockingbird",
        img: "https://images.genius.com/481d2a614d302cd50d06082bea096266.1000x1000x1.png"
    },
    {
        id: 2,
        title: "Eminem",
        artist: "Lose Yourself",
        img: "https://i.scdn.co/image/ab67616d0000b2736644e5616a8689c2649a0e01"
    },
    {
        id: 3,
        title: "Eminem",
        artist: "Godzilla",
        img: "https://i.scdn.co/image/ab67616d0000b2732f44aec83b20e40f3baef73c"
    }
]

songs.map((song,index) => {
    let tr = document.createElement("tr");
    name_cell.textContent = index +1

    music.append(name_cell)
    let img_cell = document.createElement("td")
    let img = document.createElement("img")
    img.src = songs.song
    img.alt = songs.name
    img_cell.appendChild(img_cell)
    const tit_cell =document.createElement("td")
    tit_cell.textContent = songs.title
    music.appendChild(tit_cell)
    const control_cell = document.createElement("td")
    const playbtn = document.createElement("button")
    playbtn.textContent = "Play"
})