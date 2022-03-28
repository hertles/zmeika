var snakereplic = []
var snakequestion = []
var snakereplicnumber = 1
var snake = []
var friend = []
var direction='down'
var moveINT
x=40
y=25
snakereplic[1] = 'Привет! Я тут пришел издалека'
snakereplic[2] = 'Прости, что сломал тебе крышу'
snakereplic[3] = 'Ты ведь не против, если я поем немного твоего корма?'
snakereplic[4] = 'Он ведь все равно бесконечный, хехе!'
snakereplic[5] = 'Но на самом деле я пришел не за этим'
snakereplic[6] = 'Ты случайно не знаешь, как стать свободным?'
snakereplic[7] = 'question'
snakequestion[0] = 'Какой странный вопрос...'
function KeyRPressed(e) {
    let key = `${e.code}`
    switch (key) {
        case 'KeyR':
            window.location.href='index.php'
            break;

        default:
            break;
    }
}
function Achieve(){

}
function Choose(variants) {
    let choose = document.querySelector('#chooseouter')
    choose.querySelectorAll('.button').forEach((e) => e.remove())
    for (let i = 0; i < variants.length; i++) {
        let button = document.createElement('div')
        choose.appendChild(button)
        button.classList.add('button')
        button.innerHTML = variants[i]
        button.setAttribute('onclick', 'ABYSS_ENDING()')
    }
}
function ABYSS_ENDING() {
    document.querySelector('#black').classList.remove('hidden')
    document.querySelector('#chooseouter').classList.add('hidden')
    setTimeout(() => {
        let audio = new Audio
        audio.src = 'sound/ABYSS/ILYAMAZO.mp3'
        audio.autoplay = true
    }, 1000);
    Achieve(11,'Abyss Ending')
    setTimeout(() => {
        ShowMessage('Нашли ли вы то, что искали? Нажмите R, если хотите попытать удачу еще раз.', 'constant')
        document.addEventListener('keydown',KeyRPressed)
    }, 8000);
}
function ShowMessage(text) {
    if (text != 0) {
        document.querySelector('#message').classList.add('hidden');
        document.querySelector('#message').classList.remove('hidden');
        document.querySelector('#message>text').innerHTML = text;
    }
}
function ShowMessageAbove(text) {
    document.querySelector('#godmessage').classList.add('hidden');
    document.querySelector('#godmessage').classList.remove('hidden')
    document.querySelector('#godmessage>text').innerHTML = text;

}
window.onload = function () {
    friend[0] = document.querySelector('.x10.y38')
    friend[1] = document.querySelector('.x9.y38')
    friend[2] = document.querySelector('.x9.y39')
    friend[3] = document.querySelector('.x9.y40')
    friend[4] = document.querySelector('.x10.y40')
    friend[5] = document.querySelector('.x11.y40')
    friend[6] = document.querySelector('.x12.y40')
    snake[0] = document.querySelector('.x40.y25')
    snake[1] = document.querySelector('.x40.y25')
    snake[2] = document.querySelector('.x40.y25')
    snake[3] = document.querySelector('.x40.y25')
    snake[4] = document.querySelector('.x40.y25')
    snake[5] = document.querySelector('.x40.y25')
    document.querySelector('#black').classList.add('opacity_hz')
    setTimeout(() => {
        document.querySelector('#black').classList.remove('opacity_hz')
        document.querySelector('#black').classList.add('hidden')
    }, 3000);
    document.querySelector('#loadingmessage').classList.add('hidden')
    for (let i = 29; i <= 58; i++) {
        for (let j = 1; j <= 60; j++) {
            document.querySelector('.x' + j + '.y' + i).classList.remove('hiddencell')
            document.querySelector('.x' + j + '.y' + i).classList.remove('hiddenblock')
        }
    }
    setTimeout(() => {
        document.querySelector('.x1.y29').scrollIntoView()
    }, 100);
    friend.forEach((el) => { el.classList.add('friend'); el.setAttribute('Состав', 'Привет! Меня зовут Змейка') })
    document.querySelector('.x50.y43').classList.add('friendfood')
    opponent = 'snake'
    
    setTimeout(() => {
        document.querySelector('.x40.y29').classList.remove('block')
        let sound=new Audio
        sound.src='sound/remove.mp3'
        sound.autoplay=true
        moveINT=setInterval(() => {
            NextBlock()
        }, 100);
    }, 7000);
    setTimeout(() => {
        direction='left'
    }, 8700);
    setTimeout(() => {
        direction='up'
    }, 9400);
    setTimeout(() => {
        direction='left'
    }, 9500);
    setTimeout(() => {
        clearInterval(moveINT)
    }, 9700);
    setTimeout(() => {
        ShowMessageAbove(snakereplic[snakereplicnumber])
        document.addEventListener('keydown', TalkWithSnake)
    }, 10000);


    Achieve=function(number, text) {
        let username=document.querySelector('.nameOuter').innerHTML
        document.querySelector('#achievement>img').setAttribute('src', "visual/endings/" + number + ".png")
        document.querySelector('#achievement ab').innerHTML = number + '. ' + text
        let achievement = document.querySelector('#achievement')
        achievement.classList.add('achieve')
        achievement.classList.remove('hidden')
        setTimeout(() => {
            achievement.classList.remove('achieve')
            achievement.classList.add('hidden')
        }, 10000);
        $.ajax({
            url:'add_new_ending.php',
            method: 'POST',
            data: {
                number:number,
                username:username
            },
            success: function(){
                let endingcard=document.querySelector('#ending'+number)
                endingcard.setAttribute('src','visual/endings/'+number+'.png')
                //endingcard.classList.add('opened')
            },
            error: function(event){
                console.log(event);
            }
    
        })
    }




    function NextBlock() {
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
        snake[0].classList.remove('snake');
        for (let i = 0; i < snake.length - 1; i++) {
            snake[i] = snake[i + 1]
        }
        snake[snake.length - 1] = document.querySelector('.x' + (x) + '.y' + y)
        snake[snake.length - 1].classList.add('snake');
    }
    function TalkWithSnake(e) {
        let key = `${e.code}`
        switch (key) {
            case 'Enter':
                if (snakereplic[snakereplicnumber+1] == 'question') {
                    document.querySelector('#godmessage').classList.add('hidden')
                    Choose(snakequestion)
                    document.querySelector('#chooseouter').classList.remove('hidden')
                }
                else {
                    snakereplicnumber++
                    ShowMessageAbove(snakereplic[snakereplicnumber])
                }
                break;

            default:
                break;
        }
    }
    
}
