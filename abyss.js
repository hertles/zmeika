class FIREFLYES {
    constructor(name) {
        this.name = name
        this.movement
        this.circle
        this.bottom = -10
        this.circle_X = 0
        this.circle_Y = 0
        this.phase = 4
        this.radius = 10
        this.angle = Math.PI * 1.5
        this.left = 15 + Math.random() * 70
    }
    SPAWN() {
        let fireflyOuter = document.createElement('div')
        fireflyOuter.classList.add('fireflyOuter')
        document.querySelector('body').appendChild(fireflyOuter)
        let firefly = document.createElement('div')
        fireflyOuter.appendChild(firefly)
        firefly.classList.add('firefly')

        this.movement = setInterval(() => {
            this.bottom += 0.1
            this.left += -0.1 + Math.random() * 0.2
            this.radius += -0.1 + Math.random() * 0.2
            fireflyOuter.style.bottom = this.bottom + 'vh'
            fireflyOuter.style.left = this.left + 'vw'
            if (this.bottom >= 110) {
                this.bottom = -10
                this.angle = Math.PI * 1.5
                this.phase = 4
                this.radius = 10
                this.left = 15 + Math.random() * 70
            }
        }, 10)
        this.circle = setInterval(() => {
            this.angle += 2 * Math.PI / 360
            fireflyOuter.style.transform = 'translate(' + (this.radius * Math.sin(this.angle)) + 'vh,' + (this.radius * Math.cos(this.angle)) + 'vh)'
        }, 10)
    }
}


window.onload = function () {
    var ESCAPED = false
    var PASSEDSCREENS = 0
    var CLOUDSPAWN = false
    var CLOUDABOVE = false
    var INCLOUDS = false
    var ENDING = false
    var STAIRWAY = false
    var UP = false
    var life = true
    document.querySelector('.x1.y1').scrollIntoView()
    var INSECTS = document.querySelector('#INSECTS')
    INSECTS.play()
    var SONG = document.querySelector('#ABYSS_SONG')
    var RAIN = document.querySelector('#RAIN_SOUNDS')
    var WINDS = document.querySelector('#WIND_SOUNDS')
    document.querySelector('#loadingmessage').classList.add('hidden')
    var href = window.location.href.toString()
    var direction = href.substring(href.indexOf('dir') + 4)
    var foodEaten = Number(href.substring(href.indexOf('f') + 2, href.indexOf('&', href.indexOf('f'))))
    var x = Number(href.substring(href.indexOf('x') + 2, href.indexOf('&', href.indexOf('x'))))
    var y = Number(href.substring(href.indexOf('y', 22) + 2, href.indexOf('&', href.indexOf('y', 22))))
    console.log('СОХРАНЕНИЕ:\nx=' + x + ' y=' + y + ' foodEaten=' + foodEaten);
    if (x == NaN) {
        x = 1
        y = 14
        foodEaten = 0
    }
    var SCREEN = 1 + Math.floor(y / 31)
    var snake = []
    /*for (let i = 0; i < foodEaten; i++) {
        const element = array[i];
        
    }*/
    for (let i = 0; i < foodEaten + 5; i++) {
        snake.push(document.querySelector('.x' + x + '.y' + y))
    }
    snake.forEach((el) => { el.classList.add('snake') })
    var moveINT = setInterval(() => {
        if (life)
            NextBlock()
    }, 75);
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
            if (!UP && (document.querySelector('.x' + (x) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cloudblock'))) {
                x = lastx
                y = lasty

                if (!ESCAPED) {
                    GAME_OVER();
                }

                else if (document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('cloudblock')) {
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
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('fakefood')) {
                GOLDEN_ENDING();
            }
            else {
                if (UP) {
                    document.querySelector('.x' + (x) + '.y' + y).classList.remove('deadsnake')
                    document.querySelector('.x' + (x) + '.y' + y).classList.remove('snake')
                    document.querySelector('.x' + (x) + '.y' + y).classList.remove('block')
                    document.querySelector('.x' + (x) + '.y' + y).classList.remove('cloudblock')
                }
                snake[0].classList.remove('deadsnake');
                snake[0].classList.remove('snake');
                Move();
                snake[snake.length - 1] = document.querySelector('.x' + (x) + '.y' + y)
                snake[snake.length - 1].classList.add('snake');
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('letter')) {
                    document.querySelector('.x' + (x) + '.y' + y).classList.remove('letter')
                    document.querySelector('.x' + (x) + '.y' + y).innerHTML = ''
                    let pen = new Audio
                    pen.src = 'sound/ABYSS/LETTER.mp3'
                    pen.autoplay = true
                    LINES();
                }

                if (ESCAPED) {
                    snake[snake.length - 1].classList.add('deadsnake');
                }

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
        if (!ENDING){
            INFINITYSCREEN()
        }

        if (auto != 'auto' && !ENDING)
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
                if (document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('snake') && ESCAPED) {
                    document.querySelector('.x' + (x + 1) + '.y' + y).classList.remove('snake')
                }
                if (lastmove == 'left' && (lastdirection == 'down' || lastdirection == 'up')) {
                    NextBlock(lastdirection)
                    direction = 'right'
                }
                break;
            case 'ArrowLeft':
                if (lastmove != 'right')
                    direction = 'left'
                if (document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('snake') && ESCAPED) {
                    document.querySelector('.x' + (x - 1) + '.y' + y).classList.remove('snake')
                }
                if (lastmove == 'right' && (lastdirection == 'down' || lastdirection == 'up')) {
                    NextBlock(lastdirection)
                    direction = 'left'
                }
                break;
            case 'ArrowUp':
                if (lastmove != 'down')
                    direction = 'up'
                if (document.querySelector('.x' + x + '.y' + (y - 1)).classList.contains('snake') && ESCAPED) {
                    document.querySelector('.x' + x + '.y' + (y - 1)).classList.remove('snake')
                }
                if (lastmove == 'down' && (lastdirection == 'left' || lastdirection == 'right')) {
                    NextBlock(lastdirection)
                    direction = 'up'
                }
                break;
            case 'ArrowDown':
                if (lastmove != 'up')
                    direction = 'down'
                if (document.querySelector('.x' + x + '.y' + (y + 1)).classList.contains('snake') && ESCAPED) {
                    document.querySelector('.x' + x + '.y' + (y + 1)).classList.remove('snake')
                }
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
    var BLUE = 0.1
    var FIREFLY = []

    function CHANGESCREEN() {

        if (LASTSCREEN != SCREEN) {
            document.querySelectorAll('td').forEach(element => {
                element.classList.remove('fakefood')
                element.classList.remove('letter')
                element.classList.remove('cloudblock')
                element.innerHTML = ''
            });

            if (INCLOUDS && !ENDING) {
                if (BLUE <= 0.5) {
                    document.querySelector('#blue').style.opacity = BLUE + 0.04
                    BLUE += 0.025
                }
                let lastXcloud
                let lastYcloud
                let lastSizeCloud
                for (let i = 0; i <= Math.floor(20 + Math.random() * 10); i++) {
                    let size = Math.floor(2 + Math.random() * 3)
                    let xx = Math.floor(2 + Math.random() * (64 - size))
                    let yy = Math.floor((SCREEN - 1) * 31 + 2 + Math.random() * (29 - size))
                    if (lastXcloud != null && Math.random() < 0.9) {
                        xx = lastXcloud + Math.floor(Math.random() * lastSizeCloud)
                        yy = lastYcloud + Math.floor(-lastSizeCloud + 1 + Math.random() * 2 * (lastSizeCloud - 1))
                    }
                    lastXcloud = xx
                    lastYcloud = yy
                    lastSizeCloud = size
                    for (let xxx = xx; xxx <= xx + size; xxx++) {
                        for (let yyy = yy; yyy <= yy + size; yyy++) {
                            if (xxx != 1 && xxx != 65 && yyy != SCREEN * 31 && yyy != (SCREEN - 1) * 31 + 1) {
                                document.querySelector('.x' + xxx + '.y' + yyy).classList.add('cloudblock')
                            }

                        }
                    }
                }
            }
            if (Math.random() < 0.1) {
                let xff = 1 + Math.floor(Math.random() * 64)
                let yff = 1 + 31 * (SCREEN - 1) + Math.floor(Math.random() * 30)
                document.querySelector('.x' + xff + '.y' + yff).classList.add('fakefood')
            }
            if (Math.random() < 0.8 && ESCAPED && LINENUMBER != 16) {
                let abc = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
                PASSEDSCREENS++
                let spawned = false
                while (!spawned) {
                    let xl = 1 + Math.floor(Math.random() * 64)
                    let yl = 1 + 31 * (SCREEN - 1) + Math.floor(Math.random() * 30)
                    if (!(document.querySelector('.x' + xl + '.y' + yl).classList.contains('block') || document.querySelector('.x' + xl + '.y' + yl).classList.contains('cloudblock'))) {
                        document.querySelector('.x' + xl + '.y' + yl).innerHTML = abc[Math.floor(1 + Math.random() * 32)]
                        document.querySelector('.x' + xl + '.y' + yl).classList.add('letter')
                        spawned = true
                    }
                }


            }
            if (direction == 'up' && CLOUDSPAWN && !CLOUDABOVE) {
                CLOUDABOVE = true
                WINDS.currentTime = 5
                WINDS.play()
                document.querySelector('#cloud1outer').classList.remove('hidden')
                document.querySelector('#cloud1').classList.add('slowcloudmovement')
                document.querySelector('#cloud2outer').classList.remove('hidden')
                document.querySelector('#cloud2').classList.add('rapidcloudmovement')
            }
            else if (direction == 'down' && CLOUDSPAWN) {
                CLOUDABOVE = false
                WINDS.pause()
                document.querySelector('#cloud1outer').classList.add('hidden')
                document.querySelector('#cloud1').classList.remove('slowcloudmovement')
                document.querySelector('#cloud2outer').classList.add('hidden')
                document.querySelector('#cloud2').classList.remove('rapidcloudmovement')
            }
            else if (direction == 'up' && CLOUDABOVE) {
                CLOUDABOVE = false
                CLOUDSPAWN = false
                INCLOUDS = true
                RAIN.pause()
                document.querySelector('#blue').classList.remove('hidden')
                document.querySelector('#rainouter').classList.add('hidden')
                document.querySelector('#rain').classList.remove('rainmovement')
                document.querySelector('#cloudouter').classList.remove('hidden')
                document.querySelector('#cloud').classList.add('slowcloudmovement')
                document.querySelector('#cloud1outer').classList.add('hidden')
                document.querySelector('#cloud1').classList.remove('slowcloudmovement')
                document.querySelector('#cloud2outer').classList.add('hidden')
                document.querySelector('#cloud2').classList.remove('rapidcloudmovement')
            }



            PASSEDABYSS()
        }

    }



    function GOLDEN_ENDING() {
        window.location.href = 'GoldenEnding.php'
    }
    function GAME_OVER() {
        INSECTS.pause()
        ShowMessage('Нажмите R, чтобы сдаться', 'constant')
        ESCAPED = true
        let audio = new Audio();
        audio.src = 'sound/gameover.mp3';
        audio.autoplay = true;

        document.querySelectorAll('.snake').forEach(element => {
            element.classList.add('deadsnake')
        });
        document.addEventListener('keydown', DOSOMETHING)
        clearInterval(moveINT)

    }
    function DOSOMETHING(e) {
        let key = `${e.code}`
        if (key == 'ArrowLeft' || key == 'ArrowRight' || key == 'ArrowUp' || key == 'ArrowDown') {
            document.removeEventListener('keydown', DOSOMETHING)
            ABYSS()
        }
        switch (key) {
            case 'ArrowLeft':
                direction = 'left'
                NextBlock()
                break;
            case 'ArrowRight':
                direction = 'right'
                NextBlock()
                break;
            case 'ArrowDown':
                direction = 'down'
                NextBlock()
                break;
            case 'ArrowUp':
                direction = 'up'
                NextBlock()
                break;
            case 'KeyR':
                document.removeEventListener('keydown', DOSOMETHING)
                ShowMessage('Вы сдались. Это конец')
                setTimeout(() => {
                    GOLDEN_ENDING()
                }, 5000);
                
                break;
            default:
                break;
        }
    }
    var THUNDER_INT
    function ABYSS() {
        document.querySelector('#message').classList.add('hidden')
        SONG.play()
        lastdirection = ''
        lastmove = ''
        moveINT = setInterval(() => {
            NextBlock()
        }, 100);

        setTimeout(() => {
            document.querySelector('#rainouter').classList.remove('hidden')
            document.querySelector('#rain').classList.add('rainmovement')
            document.querySelector('#rainouter').classList.add('rainstart')
            let counter = 0
            RAIN.volume = 0
            RAIN.play()
            let musicvolume = setInterval(() => {
                counter++
                RAIN.volume = counter / 100
                if (counter == 50) {
                    clearInterval(musicvolume)
                }
            }, 100);


        }, 5000);
        setTimeout(() => {
            document.querySelector('#rainouter').classList.remove('rainstart')
        }, 10000);
        setTimeout(() => {
            CLOUDSPAWN = true
        }, 35000);
        setTimeout(() => {
            THUNDER()
            THUNDER_INT = setInterval(() => {
                setTimeout(() => {
                    THUNDER()
                }, Math.random() * 7000);
            }, 10000);

        }, 49000);
        setTimeout(() => {
            if (INCLOUDS) {
                clearInterval(THUNDER_INT)
                FIREFLY.push(new FIREFLYES)
                FIREFLY[FIREFLY.length - 1].SPAWN()
                FIREFLY.push(new FIREFLYES)
                FIREFLY[FIREFLY.length - 1].SPAWN()
            }
        }, 75000);
        setTimeout(() => {
            if (INCLOUDS) {
                clearInterval(THUNDER_INT)
                FIREFLY.push(new FIREFLYES)
                FIREFLY[FIREFLY.length - 1].SPAWN()
            }
        }, 85000);
        setTimeout(() => {
            document.removeEventListener('keydown', moveINTkeypressed)
            UP = true
            direction = 'up'
        }, 108000);
        setTimeout(() => {
            ENDING = true
            INCLOUDS = false
            CLOUDABOVE = true
            document.querySelectorAll('.y65').forEach(element => {
                element.classList.add('block')
            });
            document.querySelector('#blue').classList.add('hidden')
            document.querySelector('#rain').classList.add('hidden')
            document.querySelector('#rain').classList.remove('rainmovement')
            document.querySelector('#cloudouter').classList.add('hidden')
            document.querySelector('#life').classList.remove('hidden')
            document.querySelectorAll('td').forEach((el) => {
                el.classList.remove('deadsnake')
                el.classList.remove('snake')
                el.classList.remove('cloudblock')
            })
            document.querySelector('.x1.y1').scrollIntoView()
            x = 33
            y = 63
            if (LINENUMBER==15){
                document.querySelector('.x33.y16').classList.add('letter')
                document.querySelector('.x33.y16').innerHTML='ж'
            }
            document.querySelector('#cloud1').classList.add('bottomcloud')
            document.querySelector('#cloud2').classList.add('bottomcloud')
            document.querySelector('#cloud1outer').classList.remove('hidden')
            document.querySelector('#cloud1').classList.add('slowcloudmovement')
            document.querySelector('#cloud2outer').classList.remove('hidden')
            document.querySelector('#cloud2').classList.add('rapidcloudmovement')
            for (let yy = 30; yy >= 1; yy--) {
                for (let xx = 1; xx <= 31 - yy; xx++) {
                    document.querySelector('.x' + xx + '.y' + yy).classList.add('block')
                    document.querySelector('.x' + (66 - xx) + '.y' + yy).classList.add('block')
                }
            }
        }, 130000);
        setTimeout(() => {
            black=document.querySelector('#black')
            black.classList.add('endingblack')
            black.classList.remove('hidden')
        }, 140000);
        
        setTimeout(() => {
            window.location.href = 'AbyssEnding.php'
        }, 146000);
    }
    function THUNDER() {
        let thunder_sound = new Audio
        thunder_sound.src = 'sound/ABYSS/THUNDER' + Math.floor(1 + Math.random() * 2) + '.mp3'
        thunder_sound.autoplay = true
        document.querySelector('#white').classList.remove('hidden')
        document.querySelector('#white').classList.add('thunder')
        setTimeout(() => {
            document.querySelector('#white').classList.add('hidden')
            document.querySelector('#white').classList.remove('thunder')
        }, 2000);
    }
    var EFFECTLIST = []
    EFFECTLIST[0] = 'fromright'
    EFFECTLIST[1] = 'fromleft'
    EFFECTLIST[2] = 'scaleminus'
    var LINE = []
    LINE[1] = ['когда-нибудь',
        'будет весна']
    LINE[2] = ['и расцветут',
        'синие',
        'георгины']
    LINE[3] = ['почему-то хочется',
        'всплыть',
        'на поверхность']
    LINE[4] = ['где всё',
        'станет',
        'ясно и понятно']
    LINE[5] = ['я режу',
        'на кухне',
        'руку']
    LINE[6] = ['пока',
        'не станет',
        'лучше']
    LINE[7] = ['пока не пойму',
        'отчего я бегу',
        'и зачем']
    LINE[8] = ['а может',
        'я бегу',
        'от себя',
        'от своего существа?']
    LINE[9] = ['чернеет небо',
        'и вместе с ним',
        'мысли']
    LINE[10] = ['кажется',
        'вот-вот сердце вытечет']
    LINE[11] = ['не в состоянии',
        'удержать в себе то',
        'из чего состоит']
    LINE[12] = ['я расцвету',
        'вместе',
        'с георгинами']
    LINE[13] = ['и увижу то',
        'зачем весна',
        'нужна',
        'всем нам']
    LINE[14] = ['и увижу',
        'дверь в стене']
    LINE[15] = ['которая',
        'приведёт меня',
        'в бездну']
    LINE[16] = ['в пыльную',
        'бездну']
    LINE[17] = ['...',
        '...']
    var LINENUMBER = 0
    function LINES() {
        LINENUMBER++
        document.querySelectorAll('line').forEach((line) => {
            EFFECTLIST.forEach(EF => {
                line.classList.remove(EF)
            });
        })
        document.querySelectorAll('lineouter').forEach((line) => {
            line.classList.add('hidden')
            line.classList.remove('show')
        })
        let open = []
        open[0] = Math.floor(1 + Math.random() * (5 - LINE[LINENUMBER].length))
        for (let i = 1; i < LINE[LINENUMBER].length; i++) {
            open[i] = Math.floor(open[i - 1] + 1 + Math.random() * (5 - LINE[LINENUMBER].length - open[i - 1] + i))
        }
        let time = []
        let effect = []

        for (let i = 0; i < open.length; i++) {
            document.querySelector('#line' + open[i]).style.top = open[i] * 15 + Math.random() * 5 + 'vh'
            document.querySelector('#line' + open[i]).style.left = 10 + Math.random() * 50 + 'vw'
            document.querySelector('#line' + open[i]).innerHTML = LINE[LINENUMBER][i]
            /*if (Math.random()<1){
                let resultline=''
                for (let k = 0; k < LINE[LINENUMBER][i].length; k++) {
                    if (k%2==0)
                        resultline+='<letter class="letterup">'+LINE[LINENUMBER][i][k]+'</letter>'
                    else{
                        resultline+='<letter class="letterdown">'+LINE[LINENUMBER][i][k]+'</letter>'
                    }
                    
                }
                console.log(resultline);
                document.querySelector('#line'+open[i]).innerHTML=resultline
            }*/
            if (i == 0) {
                time[i] = 200
            }
            else {
                time[i] = time[i - 1] + 500 + Math.random() * 1000
            }
            let random = Math.random()
            for (let j = 0; j < EFFECTLIST.length; j++) {
                if (random <= (j + 1) / EFFECTLIST.length && random > j / EFFECTLIST.length) {
                    effect[i] = EFFECTLIST[j]
                }
            }
            setTimeout(() => {
                document.querySelector('#lineouter' + open[i]).classList.remove('hidden')
                document.querySelector('#lineouter' + open[i]).classList.add('show')
                document.querySelector('#line' + open[i]).classList.add(effect[i])
                if (i == open.length - 1 && Math.random() < 0.1 || LINE[LINENUMBER][i] == 'руку') {
                    document.querySelector('#line' + open[i]).classList.add('shaking')
                }
            }, time[i]);

        }

    }
    
}
