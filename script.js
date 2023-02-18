console.log("welcome to music")
// initializing the Event
let songIndex=0;
let audioElement=new Audio('song/1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')

let songs=[
    {songName:"Salame-Isq",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Salame-Isq",filePath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"Salame-Isq",filePath:"song/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"Salame-Isq",filePath:"song/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"Salame-Isq",filePath:"song/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"Salame-Isq",filePath:"song/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Salame-Isq",filePath:"song/7.mp3",coverPath:"cover/7.jpg"},
]

// let audioElement = new Audio('1.mp3')
// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add("fa-pause-circle" );
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;

    }
})

//listen to the events
audioElement.addEventListener("timeupdate",()=>{
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress)
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
})
