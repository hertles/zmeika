if (cheat == 'HELL') {
    cheat = ''
    document.querySelector('#cheat').classList.add('greentext')
    document.removeEventListener('keydown', Cheat)
    clearTimeout(CheatTimeout)
    Hell()
}
if (cheat == 'FATE') {
    cheat = ''
    document.removeEventListener('keydown', Cheat)
    document.querySelector('#cheat').classList.add('greentext')
    clearTimeout(CheatTimeout)
    FatStart()
}
if (cheat == 'WALL') {
    wallcheat = true
    cheat = ''
        document.querySelectorAll('.block').forEach(element => {
        element.classList.remove('block')
    });
}
if (cheat == 'GOLD') {
    cheat = ''
    let count = 0
    document.removeEventListener('keydown', Cheat)
    document.querySelector('#cheat').classList.add('greentext')
    let GOLD = setInterval(() => {
        if (count < 10) {
            extrafoodEaten += Math.floor(Math.random() * 50)
            Goldencount()
            let audio = new Audio
            audio.src = 'sound/extrafood.mp3'
            audio.autoplay = true
            count++
        }
        else {
            clearInterval(GOLD)
            cheat = ''
            ClearCheat()
        }
    }, 200);

}