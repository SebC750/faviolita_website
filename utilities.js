const IMAGE_DIMENSIONS = {
    width: 200,
    height: 200
}

const RAFFLE_START_DATE = new Date("02-14-2025")
const RAFFLE_END_DATE = new Date("03-24-2025")
let prizes = [
    {
        "source": "assets/foto_premio1.jpeg",
        "alt": "Photo one of the prizes"
    },
    {
        "source": "assets/foto_premio2.jpeg",
        "alt": "Photo two of the prizes"
    },
    {
        "source": "assets/foto_premio3.jpeg",
        "alt": "Photo three of the prizes"
    },
    {
        "source": "assets/foto_premio4.jpeg",
        "alt": "Photo four of the prizes"
    },
    {
        "source": "assets/foto_premio5.jpeg",
        "alt": "Photo five of the prizes"
    }
]
document.addEventListener("DOMContentLoaded", function () {
    let showcase_gallery = document.getElementById("prize-showcase")
    showcase_gallery.innerHTML = ""
    for (let i = 0; i < prizes.length; i++) {
        showcase_gallery.innerHTML += `<img 
    class="object-cover p-2 cursor-pointer"
    data-bs-toggle="modal" data-bs-target="#image_modal"
    src="${prizes[i].source}" 
    alt="${prizes[i].alt}" 
    height="${IMAGE_DIMENSIONS.height}"
    width="${IMAGE_DIMENSIONS.width}"
    onclick="getSelectedImage('${prizes[i].source}', '${prizes[i].alt}')"
/>`
            ;
    }
})

document.addEventListener("DOMContentLoaded", setInterval(function () {
    let currentDate = new Date
    let endDate = RAFFLE_END_DATE
    let timeElapsed = endDate - currentDate;
    let seconds = Math.floor((timeElapsed / 1000) % 60);
    let minutes = Math.floor((timeElapsed / 1000 / 60) % 60);
    let hours = Math.floor((timeElapsed / 1000 / 60 / 60) % 24);
    let days = Math.floor(timeElapsed / 1000 / 60 / 60 / 24);
    let currentTimeLeft = document.getElementById("end-date")

    currentTimeLeft.innerHTML = `(${days} dias, ${hours} horas, ${minutes} minutos y ${seconds} segundos)`
}, 1000)
)

function getSelectedImage(prizeSource, prizeAlt) {
    let container = document.getElementById("selected-image-container")
    container.innerHTML = `<img 
    class="w-100 h-100 object-cover"
    src=${prizeSource} 
    alt=${prizeAlt} 
    height=${IMAGE_DIMENSIONS.height}
    width=${IMAGE_DIMENSIONS.width}/>`
}