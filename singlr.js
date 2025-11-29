import { songs } from "./music.js";

let url = location.search
let id = new URLSearchParams(url).get("card-id")
let index = songs.find(itme=>{
    return itme.id == id
})
console.log(index);
img.src = `${index.cover}`
title.innerHTML = `${index.title}`
