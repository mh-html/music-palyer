let $ = document
let musicBox = [
    {
        id:1,
        nameSign: 'Turn Down For What',
        nameSigner: 'Dj_snake Ft Lil Jon',
        picSigner: './image/snake.jpg',
        path: './music/dj_snake ft lil jon_turn_down for what.mp3'
    },
    {
        id:2,
        nameSign: 'Khosh Be Halam',
        nameSigner: 'Ragheb & Hamid Hiraad',
        picSigner: './image/ragheb.jpg',
        path: './music/Ragheb & Hamid Hiraad - Khosh Be Halam.mp3'
    },
    {
        id:3,
        nameSign: 'Mix Rapi Remix',
        nameSigner: 'Mix Rapi YAS',
        picSigner: './image/yas.jpg',
        path: './music/Mix Rapi   Remix   - - T.me-X-TribalRemixs (2).mp3'
    },
    {
        id:4,
        nameSign: 'Delam Gerefte Az In Hame Gham',
        nameSigner: 'Shahriyar Ebrahimi',
        picSigner: './image/Shahriyar.jpg',
        path: './music/Shahriyar Ebrahimi - Delam Gerefte Az In Hame Gham.mp3'
    },
    {
        id:5,
        nameSign: 'Shakhe Nabat',
        nameSigner: 'Masih And Arash',
        picSigner: './image/Shakhe-Nabat.jpg',
        path: './music/Masih And Arash - Shakhe Nabat (320).mp3'
    },
    {
        id:6,
        nameSign: 'Asheghe Yeki Shodam',
        nameSigner: 'Macan Band',
        picSigner: 'https://upmusics.com/wp-content/uploads/2022/04/vbn-3.jpg',
        path: 'https://irsv.upmusics.com/AliBZ/Macan%20Band%20%7C%20Asheghe%20Yeki%20Shodam%20(320).mp3'
    },
    {
        id:7,
        nameSign: 'Najla ',
        nameSigner: 'Erfan Tahmasbi',
        picSigner: 'https://upmusics.com/wp-content/uploads/2022/04/wa.jpg',
        path: 'https://irsv.upmusics.com/AliBZ/Erfan%20Tahmasbi%20%E2%80%93%20Najla%20(320).mp3'
    },
    {
        id:8,
        nameSign: 'To Baladi',
        nameSigner: 'Arvin Samimi ',
        picSigner: 'https://upmusics.com/wp-content/uploads/2022/04/xcv-2.jpg',
        path: 'https://irsv.upmusics.com/AliBZ/Arvin%20Samimi%20-%20To%20Baladi%20(320).mp3'
    },
    {
        id:9,
        nameSign: 'Khoshnam',
        nameSigner: 'Saeed Shariat',
        picSigner: 'https://upmusics.com/wp-content/uploads/2022/04/xcv.jpg',
        path: 'https://irsv.upmusics.com/AliBZ/Saeed%20Shariat%20%7C%20Khoshnam%20(320).mp3'
    },
    {
        id:10,
        nameSign: ' Atre Bahar',
        nameSigner: 'Aron Afshar',
        picSigner: 'https://upmusics.com/wp-content/uploads/2022/04/IMG_20220406_210952_989.jpg',
        path: 'https://irsv.upmusics.com/AliBZ/Aron%20Afshar%20%7C%20Atre%20Bahar%20(320).mp3'
    },
    {
        id:11,
        nameSign: 'Marget Sim Biomah',
        nameSigner: 'Morteza Bab',
        picSigner: 'https://upmusics.com/wp-content/uploads/2022/04/awr-1.jpg',
        path: 'https://irsv.upmusics.com/AliBZ/Morteza%20Bab%20%7C%20Marget%20Sim%20Biomah%20(320).mp3'
    },
    {
        id:12,
        nameSign: 'Begir Delamo',
        nameSigner: ' Amir Radan',
        picSigner: 'https://upmusics.com/wp-content/uploads/2022/04/zv.jpg',
        path: 'https://irsv.upmusics.com/AliBZ/Amir%20Radan%20%7C%20Begir%20Delamo%20(320).mp3'
    }
    
];

// -------Creat list of music-------
let listItem = $.querySelector('.music-list')
let newItem , idCounter = -1
musicBox.forEach(function(item){
    newItem = $.createElement('div')
    newItem.classList.add('list-item')
    idCounter++
    newItem.setAttribute('id', idCounter)
    newItem.innerHTML = 
    `
    <div class="image-item">
        <img src="${item.picSigner}" alt="music-image">
    </div>
    <div class="text-list">
        <p class="name-list-music">${item.nameSign}</p>
        <p class="name-list-signer">${item.nameSigner}</p>
    </div>
`
    listItem.addEventListener('click', listLoadMusic)
    listItem.append(newItem)
})

// -------Variable-------
let audio = $.querySelector('audio')
let playPause = $.querySelector('.play-pause')
let nextMusic = $.querySelector('.next')
let previousMusic = $.querySelector('.back')
let symbolPlayPause = $.querySelector('.symbol')
let musicFlag = false
let countMusic = 0

let titleName = $.querySelector('.name-music')
let titleSigner = $.querySelector('.name-signer')
let coverSigner = $.querySelector('#img')

let start = $.querySelector('#start-player')
let end = $.querySelector('#end-player')
end.innerHTML = musicBox.length

let currendTime = $.querySelector('.currend-time')
let durationTime = $.querySelector('.duration-time')

let currentMusic = 0
let startTimeMusic = 0
let endTimeMusic = 0
let minutesMusic = 0
let secondMusic = 0

let lineTimer = $.querySelector('.timer-line_currend')
let lineMainTimer = $.querySelector('.timer-line')

// -------------Funcion-------------
function onOffMusic(){
    !musicFlag ? turnOnMusic() : turnOffMusic()
}

function turnOnMusic(){
    audio.play()
    symbolPlayPause.setAttribute('class', 'fas fa-pause symbol')
    musicFlag = true
}

function turnOffMusic(){
    audio.pause()
    symbolPlayPause.setAttribute('class', 'fas fa-play symbol')
    musicFlag = false
}

function next(){
    ++countMusic
    if(countMusic === musicBox.length){
        countMusic = 0
    }
    loadMusic(countMusic)
}

function previous(){
    --countMusic
    if(countMusic === -1){
        countMusic = musicBox.length -1
    }
    loadMusic(countMusic)
}

function loadMusic(countMusic){
    titleName.innerHTML = musicBox[countMusic].nameSign
    titleSigner.innerHTML = musicBox[countMusic].nameSigner
    coverSigner.src = musicBox[countMusic].picSigner
    audio.src = musicBox[countMusic].path
    start.innerHTML = musicBox[countMusic].id
    clearInterval(timer)
    turnOnMusic()
}

function listLoadMusic(e){
    if(e.target.localName === "img"){
        loadMusic(e.target.parentElement.parentElement.id)
    }else{
        alert("برای انتخاب اهنگ لطفا روی تصویر اهنگ ضربه بزنید")
    }
}
let durMusic
function durationMusic(e){
        durMusic  = Math.floor(e.target.duration)
        let durMinMusic  = Math.floor(durMusic / 60)
        let durSecMusic = durMusic % 60

        if(durSecMusic < 10){
            durationTime.innerHTML = durMinMusic + " : 0"+ durSecMusic 
        }else{
            durationTime.innerHTML = durMinMusic + " : "+ durSecMusic
        }
}

let timer 
function timeMusic(e){
     timer = setInterval(function(){
        currentMusic = Math.floor(e.target.currentTime)
        minutesMusic = Math.floor(currentMusic/60)
        secondMusic = currentMusic % 60

        if(secondMusic < 10){
            currendTime.innerHTML = minutesMusic + " : 0"+ secondMusic 
        }else{
            currendTime.innerHTML = minutesMusic + " : "+ secondMusic
        }
        lineTimer.style.width = (currentMusic / durMusic) * 100 + "%"

        if(currentMusic === durMusic){
            next()
            clearInterval(timer)
        }
    }, 1000);
}

function moveTimeLine(e){
     let symbolTimeLine = e.offsetX
     audio.currentTime = (symbolTimeLine / this.clientWidth) * audio.duration
}

// -------Add event listener-------
playPause.addEventListener('click', onOffMusic)
nextMusic.addEventListener('click', next)
previousMusic.addEventListener('click', previous)
audio.addEventListener('durationchange' , timeMusic)
audio.addEventListener('durationchange' , durationMusic)
lineMainTimer.addEventListener('click', moveTimeLine)