window.onload = function () {
    var life = true
    document.querySelector('.x1.y1').scrollIntoView()
    document.querySelector('#loadingmessage').classList.add('hidden')
    var direction = 'left'
    var href = window.location.href.toString()
    var foodEaten = Number(href.substring(href.indexOf('f') + 2))
    var x = 35
    var y = 46
    var SCREEN = 2
    var snake = []
    var moveINT
    var location='home'
    let audio=new Audio
    audio.src='sound/glitchlong.mp3'
    audio.autoplay=true
    setTimeout(() => {
        for (let i = 0; i < foodEaten + 5; i++) {
            snake.push(document.querySelector('.x' + x + '.y' + y))
        }
        snake.forEach((el) => { el.classList.add('snake') })
        document.querySelector('#computer').setAttribute('src','visual/world/computerOff.png')
        moveINT = setInterval(() => {
            if (life)
                NextBlock()
        }, 75);
    }, 3000);
    var neon=document.querySelector('#neon')
    neon.volume=0.1
    neon.play()
    document.querySelectorAll('.y31').forEach((el)=>el.classList.add('block'))
    document.querySelectorAll('.y32').forEach((el)=>el.classList.add('block'))
    document.querySelectorAll('.y1').forEach((el)=>el.classList.add('block'))
    document.querySelectorAll('.y124').forEach((el)=>el.classList.add('block'))
    document.querySelectorAll('.y62').forEach((el)=>el.classList.add('block'))
    document.querySelectorAll('.y94').forEach((el)=>el.classList.add('block'))
    for (let yy = 32; yy <= 62; yy++) {
        document.querySelector('.x65.y'+yy).classList.add('block')
    }
    for (let yy = 114; yy <= 123; yy++) {
        for (let xx = 1; xx <= 5; xx++) {
            document.querySelector('.x'+xx+'.y'+yy).classList.add('block')
        }
    }
    for (let yy = 95; yy <= 113; yy++) {
        document.querySelector('.x1.y'+yy).classList.add('window')
    }
    document.addEventListener('keydown', moveINTkeypressed)
    var lastx
    var lasty
    var lastmove
    function Move() {
        for (let i = 0; i < snake.length - 1; i++) {
            snake[i] = snake[i + 1]
        }
    }
    function NextBlock(auto) {
        if (auto != 'auto')
            LASTSCREEN = SCREEN
        lastx = x;
        lasty = y
        switch (direction) {
            case 'up':
                y--
                break;
            case 'down':
                y++
                break;
            case 'left':
                x--
                break;
            case 'right':
                x++
                break;
        }

        try {
            document.querySelector('.x' + (x) + '.y' + y)
            if ((document.querySelector('.x' + (x) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('computer') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('window'))) {
                
                
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('computer')){
                    document.removeEventListener('keydown',moveINTkeypressed)
                    clearInterval(moveINT)
                    
                    let audio=new Audio
                    audio.src='sound/glitch.mp3'
                    audio.autoplay=true
                    setInterval(() => {
                        try {
                            snake[0].classList.remove('snake')
                            for (let i = 0; i <= snake.length - 2; i++) {
                                snake[i] = snake[i + 1]
                            }
                            snake.splice(snake.length - 1)
                        } catch (error) {
                            window.location.href='computer.php?f='+foodEaten
                        }
                    }, 500);
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('window')){
                    document.removeEventListener('keydown',moveINTkeypressed)
                    clearInterval(moveINT)
                    setInterval(() => {
                        try {
                            snake[0].classList.remove('snake')
                            for (let i = 0; i <= snake.length - 2; i++) {
                                snake[i] = snake[i + 1]
                            }
                            snake.splice(snake.length - 1)
                        } catch (error) {
                            window.location.href='psycho.php?f='+foodEaten
                        }
                    }, 100);
                }
                x = lastx
                y = lasty
                if (document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('cloudblock')) {
                    if (document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('cloudblock')) {
                        if (document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('cloudblock')) {
                            if (document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('cloudblock')) {
                                switch (direction) {
                                    case 'right':
                                        document.querySelector('.x' + (x + 1) + '.y' + y).classList.remove('block')
                                        document.querySelector('.x' + (x + 1) + '.y' + y).classList.remove('snake')
                                        document.querySelector('.x' + (x + 1) + '.y' + y).classList.remove('deadsnake')
                                        break;
                                    case 'left':
                                        document.querySelector('.x' + (x - 1) + '.y' + y).classList.remove('block')
                                        document.querySelector('.x' + (x - 1) + '.y' + y).classList.remove('snake')
                                        document.querySelector('.x' + (x - 1) + '.y' + y).classList.remove('deadsnake')
                                        break;
                                    case 'up':
                                        document.querySelector('.x' + x + '.y' + (y - 1)).classList.remove('block')
                                        document.querySelector('.x' + x + '.y' + (y - 1)).classList.remove('snake')
                                        document.querySelector('.x' + x + '.y' + (y - 1)).classList.remove('deadsnake')
                                        break;
                                    case 'down':
                                        document.querySelector('.x' + x + '.y' + (y + 1)).classList.remove('block')
                                        document.querySelector('.x' + x + '.y' + (y + 1)).classList.remove('snake')
                                        document.querySelector('.x' + x + '.y' + (y + 1)).classList.remove('deadsnake')
                                        break;
                                }
                            }
                        }
                    }

                }
            }
            else {

                snake[0].classList.remove('snake');
                Move();
                snake[snake.length - 1] = document.querySelector('.x' + (x) + '.y' + y)
                snake[snake.length - 1].classList.add('snake');
                

            

            }
            lastmove = direction;
        } catch (error) {
            if (x == 66) {
                x = 0

                if (SCREEN == 4) {
                    y = y % 31
                    SCREEN = 1
                }
                else {
                    y += 31
                    SCREEN++
                }
                NextBlock('auto')
            }
            else if (x == 0) {
                x = 66

                if (SCREEN == 1) {
                    y = 93 + y % 31
                    SCREEN = 4
                }
                else {
                    y -= 31
                    SCREEN--
                }
                NextBlock('auto')
            }
            else if (y == 0) {
                y = 125
                SCREEN = 4
                NextBlock('auto')
            }
            else if (y == 125) {
                y = 0
                SCREEN = 1
                NextBlock('auto')
            }
        }

        if (direction == 'down') {
            if (y == 32) {
                SCREEN = 2
            }
            if (y == 63) {
                SCREEN = 3
            }
            if (y == 94) {
                SCREEN = 4
            }
        }
        if (direction == 'up') {
            if (y == 31) {
                SCREEN = 1
            }
            if (y == 62) {
                SCREEN = 2
            }
            if (y == 93) {
                SCREEN = 3
            }
        }
        INFINITYSCREEN()


        if (auto != 'auto')
            CHANGESCREEN()

    }
    var lastdirection
    function moveINTkeypressed(e) {
        let key = `${e.code}`;
        lastdirection = direction
        switch (key) {
            case 'ArrowRight':
                if (lastmove != 'left')
                    direction = 'right'
                if (lastmove == 'left' && (lastdirection == 'down' || lastdirection == 'up')) {
                    NextBlock(lastdirection)
                    direction = 'right'
                }
                break;
            case 'ArrowLeft':
                if (lastmove != 'right')
                    direction = 'left'
                if (lastmove == 'right' && (lastdirection == 'down' || lastdirection == 'up')) {
                    NextBlock(lastdirection)
                    direction = 'left'
                }
                break;
            case 'ArrowUp':
                if (lastmove != 'down')
                    direction = 'up'
                if (lastmove == 'down' && (lastdirection == 'left' || lastdirection == 'right')) {
                    NextBlock(lastdirection)
                    direction = 'up'
                }
                break;
            case 'ArrowDown':
                if (lastmove != 'up')
                    direction = 'down'
                if (lastmove == 'up' && (lastdirection == 'left' || lastdirection == 'right')) {
                    NextBlock(lastdirection)
                    direction = 'down'
                }
                break;
        }
    }
    var messagetimeout
    function ShowMessage(text, flag) {
        if (text != 0) {
            clearTimeout(messagetimeout)
            document.querySelector('#message').classList.add('hidden');
            document.querySelector('#message').classList.remove('hidden');
            document.querySelector('#message>text').innerHTML = text;
            if (flag != 'constant') {
                messagetimeout = setTimeout(() => {
                    document.querySelector('#message').classList.add('hidden');
                }, 5000);
            }
        }


    }
    var LASTSCREEN
    function INFINITYSCREEN() {

        switch (SCREEN) {
            case 1:
                document.querySelector('.x1.y1').scrollIntoView()
                break;
            case 2:
                document.querySelector('.x1.y32').scrollIntoView()
                break;
            case 3:
                document.querySelector('.x1.y63').scrollIntoView()
                break;
            case 4:
                document.querySelector('.x1.y94').scrollIntoView()
                break;
            default:
                break;
        }
        
    }

    function CHANGESCREEN() {

        if (LASTSCREEN != SCREEN) {
            if (location=='home'){
                document.querySelectorAll('.background').forEach((el)=>el.classList.add('hidden'))
                switch (SCREEN) {
                    case 1:
                        document.querySelector('#notebook').classList.remove('hidden')
                        break;
                    case 2:
                        document.querySelector('#computer').classList.remove('hidden')
                        break;
                    case 4:
                        document.querySelector('#window').classList.remove('hidden')
                        document.querySelector('#woodwindow').classList.remove('hidden')
                        break;
                    default:
                        break;
                }
            }
        }

    }




  
    
    
}
