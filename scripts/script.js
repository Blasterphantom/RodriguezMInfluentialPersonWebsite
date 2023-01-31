let onePorterText = document.getElementById("onePorterText");
let home = document.getElementById("home");
let music = document.getElementById("music");
let festivals = document.getElementById("festivals");
let influence = document.getElementById("influence");

home.addEventListener("click", function(){
    document.location.href = '../pages/index.html';
})

music.addEventListener("click", function(){
    document.location.href = '../pages/music.html';
})

festivals.addEventListener("click", function(){
    document.location.href = '../pages/festival.html';
})

influence.addEventListener("click", function(){
    document.location.href = '../pages/influence.html';
    // PlayMusic();
})


PorterText();

function PorterText(){
    onePorterText.innerHTML = "\"Porter Robinson has been a great influence in my life since high school. Even before I knew him by name, the song he wrote with Zedd titled 'Clarity' touched my soul with a beat I truly resonated with. During my senior year, a music video called 'Shelter' released. It was an animated video designed like an anime, and I just remember being taken to a world I've never seen before. He's only released 2 anime music videos, and I've cried a total of 2 times while watching for the first time. Something about the feeling, the meaning behind his music moves people to become better than they were yesterday. No matter where I end up, I always have his music as my Shelter\" -Marcel"
}

// function PlayMusic(){
//     var audio = new Audio('../assets/porterMusic.mp3');
//     audio.play();
// }