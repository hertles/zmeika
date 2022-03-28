function ShowMessageLeft(text) {
    document.querySelector('#friendmessage').classList.add('hidden');
    document.querySelector('#friendmessage').classList.remove('hidden')
    document.querySelector('#friendmessage>text').innerHTML = text;
}
var messagetimeout
function ShowMessage(text, flag) {
    if (text != 0) {
        clearTimeout(messagetimeout)
        document.querySelector('#message').classList.add('hidden');
        document.querySelector('#message').classList.remove('hidden');
        document.querySelector('#message>text').innerHTML = text;
        if (flag != 'constant') {
            if (flag==undefined){
                flag=5000
            }
            messagetimeout = setTimeout(() => {
                document.querySelector('#message').classList.add('hidden');
            }, flag);
        }
    }


}
var answers = []
var questions = []
class Replic {
    constructor(theme, replic, change) {
        this.theme = theme
        this.replic = replic
        this.change = change
    }

}
var friendreplic = []
var friendreplicnumber = 1
var snakenfind=false
friendreplic.push(new Replic('hello', 'Здравствуй!'))
friendreplic.push(new Replic('hello', 'Я слышу твой голос откуда-то... снаружи?'))
friendreplic.push(new Replic('hello', 'Но не вижу тебя'))
friendreplic.push(new Replic('hello', 'Где ты?'))
friendreplic.push(new Replic('hello', 'question_where'))

friendreplic.push(new Replic('question_where', 'Я - бог', 'where_god'))
friendreplic.push(new Replic('question_where', 'Я твой внутренний голос', 'where_voice'))
friendreplic.push(new Replic('question_where', 'Я застрял в текстурах', 'where_textures'))
friendreplic.push(new Replic('question_where', 'Рассказать все как есть', 'where_here'))

friendreplic.push(new Replic('where_here', 'Ага, вот оно как'))
friendreplic.push(new Replic('where_here', 'Что ж, я, в общем-то знал,'))
friendreplic.push(new Replic('where_here', 'что никакой ты не Бог и не внутренний голос, и в текстурах не застрял'))
friendreplic.push(new Replic('where_here', 'Спасибо за честность','begin'))

friendreplic.push(new Replic('where_god', 'Я в тебя не верю'))
friendreplic.push(new Replic('where_god', 'Докажи, что ты - Бог'))
friendreplic.push(new Replic('where_god', 'Сделай клетки, из которых я состою, кубическими!'))
friendreplic.push(new Replic('where_god', '...'))
friendreplic.push(new Replic('where_god', 'Не можешь?'))
friendreplic.push(new Replic('where_god', 'Тогда и не надо мне тут врать!'))
friendreplic.push(new Replic('where_god', 'lie_question'))

friendreplic.push(new Replic('where_voice', 'Я способен различить по оттенку твоего голоса'))
friendreplic.push(new Replic('where_voice', 'Что ты - не я'))
friendreplic.push(new Replic('where_voice', 'И что ты мне сейчас врешь!'))
friendreplic.push(new Replic('where_voice', 'lie_question'))

friendreplic.push(new Replic('where_textures', 'Бедняжка!'))
friendreplic.push(new Replic('where_textures', 'Правда, здесь нет таких текстур, в которых можно застрять'))
friendreplic.push(new Replic('where_textures', 'Так что будь добр, скажи честно!!'))
friendreplic.push(new Replic('where_textures', 'lie_question'))

friendreplic.push(new Replic('lie_question', 'Рассказать все как есть', 'true'))

friendreplic.push(new Replic('true', 'А я-то на секунду поверил! Ха-ха!'))
friendreplic.push(new Replic('true', 'Теперь-то мне все стало ясно','begin'))

friendreplic.push(new Replic('begin', 'Значит, слухи не врут, и мы действительно находимся в игре'))
friendreplic.push(new Replic('begin', 'Я думаю, зная это, можно провернуть здесь пару шалостей!'))
friendreplic.push(new Replic('begin', 'question'))

friendreplic.push(new Replic('question', 'Давай пороемся в коде игры','cheats'))
friendreplic.push(new Replic('question', 'Давай отформатируем C://','delete'))
friendreplic.push(new Replic('question', 'Давай создадим вирус','virus_begin'))

friendreplic.push(new Replic('cheats', 'Хорошая мысль!'))
friendreplic.push(new Replic('cheats', 'Попробуй заглянуть в Visual Studio Code.'))
friendreplic.push(new Replic('cheats', 'Думаю, он открыт на панели задач'))
friendreplic.push(new Replic('cheats', 'А вдруг на эту игру могут быть читы?'))
friendreplic.push(new Replic('cheats', 'Меня переполняет любопытство!'))
friendreplic.push(new Replic('cheats', 'question'))

friendreplic.push(new Replic('delete', 'Попробовать стоит'))
friendreplic.push(new Replic('delete', 'Чисто ради эксперимента'))
friendreplic.push(new Replic('delete', 'Войди в Проводник'))
friendreplic.push(new Replic('delete', 'Затем выбери диск C'))
friendreplic.push(new Replic('delete', 'Затем отформатируй его!'))
friendreplic.push(new Replic('delete', 'question'))

friendreplic.push(new Replic('virus_begin', 'Слушай, я не знаю, как это сделать...'))
friendreplic.push(new Replic('virus_begin', 'Сто пудов надо с кодом что-то колдовать'))
friendreplic.push(new Replic('virus_begin', 'Открой Visual Studio Code снизу, посмотри по вкладкам,'))
friendreplic.push(new Replic('virus_begin', 'Если откопаешь что-то интересное, беги с этим ко мне!'))
friendreplic.push(new Replic('virus_begin', 'question'))

friendreplic.push(new Replic('virus_find', 'Дай посмотреть!'))
friendreplic.push(new Replic('virus_find', '*читает*'))
friendreplic.push(new Replic('virus_find', 'Ого! Значит, можно клонировать самого себя'))
friendreplic.push(new Replic('virus_find', 'Для этого нужно нажать одну простую комбинацию клавиш'))
friendreplic.push(new Replic('virus_find', 'Попробуй нажать Ctrl V'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Вау! Давай еще'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Давай еще раз!'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Давай еще'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Еще штук 5'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Еще штук 5'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Еще штук 5'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Еще штук 5'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Еще штук 5'))
friendreplic.push(new Replic('virus_find', 'wait'))
friendreplic.push(new Replic('virus_find', 'Отлично, хватит','virus'))

friendreplic.push(new Replic('virus', 'А теперь смотри:'))
friendreplic.push(new Replic('virus', 'Теперь они живут своей жизнью','continue_spawning'))
friendreplic.push(new Replic('virus', 'Каждый из них может создать себе подобного'))
friendreplic.push(new Replic('virus', '','wait_spawning'))
friendreplic.push(new Replic('virus', 'Куда это они?','virus_gone'))
friendreplic.push(new Replic('virus', 'end'))
friendreplic.push(new Replic('virus', 'end'))

friendreplic.push(new Replic('final', 'Теперь наш вирус распространился по всему свету'))
friendreplic.push(new Replic('final', 'Наши агенты есть в Вашингтоне, на головных компьютерах Apple'))
friendreplic.push(new Replic('final', 'Теперь мы имеем возможность влиять на все ключевые события'))
friendreplic.push(new Replic('final', 'Мы можем стать неприлично богатыми'))
friendreplic.push(new Replic('final', 'А можем избавиться от бедности в мире'))
friendreplic.push(new Replic('final', 'Что же ты будешь делать с этой безграничной властью?'))
friendreplic.push(new Replic('final', 'Что же ты будешь делать с этой безграничной властью?','power_ending'))
friendreplic.push(new Replic('final', '','power_ending'))


function Chosen(change) {
    
    answers = []
    friendreplic.forEach(element => {
        answers.push(element.theme)
    });
    friendreplicnumber = answers.indexOf(change)
    /*for (let i = 0; i < answers.length; i++) {
        if (variant == i) {
            for (let j = 0; j < answers[i].length; j++) {
                psyreplic.push(answers[i][j])
                psy.push(emotions[i][j])
            }
        }
    }*/
    let choose = document.querySelector('#chooseouter')
    choose.querySelectorAll('.button').forEach((e) => e.remove())
    choose.classList.add('hidden')
    ShowMessageLeft(friendreplic[friendreplicnumber].replic)
    
}
window.onload = function () {
    
    var life = true
    document.querySelector('.x1.y1').scrollIntoView()
    document.querySelector('#loadingmessage').classList.add('hidden')
    var direction = 'right'
    var href = window.location.href.toString()
    var foodEaten = Number(href.substring(href.indexOf('f') + 2))
    var x = 1
    var y = 19
    var snake = []
    var moveINT
    var mode = 'desktop'
    var friendsong2 = document.querySelector('#friendsong2')
    for (let i = 0; i < foodEaten + 5; i++) {
        snake.push(document.querySelector('.x' + x + '.y' + y))
    }
    snake.forEach((el) => { el.classList.add('snake') })
    moveINT = setInterval(() => {
        NextBlock()
    }, 75);
    document.addEventListener('keydown', moveINTkeypressed)
    let FullscreenListener = (e) => {
        document.querySelector('#loadingmessage').requestFullscreen()
    }
    document.addEventListener('keydown',FullscreenListener)
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
    function KeyRPressed(e) {
        let key = `${e.code}`
        if (key == 'KeyR') {
            document.exitFullscreen()
            window.location.href = 'index.php'
        }
    }
    document.addEventListener('keydown',KeyRPressed)
    class Clone{
        constructor(name){
            this.name=name
            this.x=0
            this.y=0
            this.direction='right'
            this.interval=Math.floor(400+Math.random()*400)
            this.cloneBody=[]
            this.CloneMoveINT
        }
        #Move(dir){
            switch (dir) {
                case 'up':
                    this.y--
                    break;
                case 'down':
                    this.y++
                    break;
                case 'left':
                    this.x--
                    break;
                case 'right':
                    this.x++
                    break;
            }
            try {
                if (this.cloneBody[1]!=this.cloneBody[0]){
                    this.cloneBody[0].classList.remove('clone')
                }
                for (let i = 0; i < this.cloneBody.length - 1; i++) {
                    this.cloneBody[i] = this.cloneBody[i + 1]
                }
                this.cloneBody[this.cloneBody.length - 1] = document.querySelector('.x'+this.x+'.y'+this.y)
                this.cloneBody[this.cloneBody.length - 1].classList.add('clone');
            } catch (error) {
                try {
                    this.cloneBody[0].classList.remove('clone')
                } catch (error) {
                    
                }
            }
        }
        Spawn(){
            let born=new Audio
            born.src='sound/born.mp3'
            born.autoplay=true
            for (let i = 0; i < 5; i++) {
                this.cloneBody[i]=(document.querySelector('.x'+this.x+'.y'+this.y))
                this.cloneBody[i].classList.add('clone')
            }
            this.CloneMoveINT=setInterval(() => {
                this.#Move(this.direction)
            }, this.interval);
            setTimeout(() => {
                this.direction='up'
            }, this.interval);
            setTimeout(() => {
                this.direction='right'
            }, this.interval*2);
            setTimeout(() => {
                this.direction='up'
            }, this.interval*3);
            setTimeout(() => {
                clearInterval(this.CloneMoveINT)
            }, this.interval*4);
        }
        GoToMail(){
            this.interval=Math.floor(this.interval/4)
            clearInterval(this.CloneMoveINT)
            this.CloneMoveINT=setInterval(() => {
                if (this.x<=13)
                    this.direction='right'
                else if (this.x>=22)
                    this.direction='left'
                else
                    this.direction='up'
                this.#Move(this.direction)
            }, this.interval);
        }
        Destroy(){
            clearInterval(this.CloneMoveINT)
            this.cloneBody=[]
        }
    }
    var clone = []
    function SpawnClone(){
        let newClone=new Clone
        clone.push(newClone)
        newClone.x=Math.floor(1+Math.random()*62)
        newClone.y=Math.floor(3+Math.random()*33)
        newClone.Spawn()
    }
    function CtrlV(e) {
        let key=`${e.code}`
        if (key=='KeyV' && friendreplic[friendreplicnumber+1].replic=='wait'){
            friendreplicnumber+=2
            ShowMessageLeft(friendreplic[friendreplicnumber].replic)
            SpawnClone()
        }
    }
    function SnakenFind() {
        let find=new Audio
        find.src='sound/find.mp3'
        find.autoplay=true
        document.addEventListener('keydown',CtrlV)
        friendreplic.forEach(replic => {
            if (replic.change=='virus_begin'){
                replic.replic='Я нашел какой-то вирусный код'
                replic.change='virus_find'
            }
        });
    }
    
    var lastx
    var lasty
    var lastmove
    function Move() {
        for (let i = 0; i < snake.length - 1; i++) {
            snake[i] = snake[i + 1]
        }
    }
    var format=0
    var addresateChoosed=false
    var sended=false
    function NextBlock(auto) {
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
            if ((document.querySelector('.x' + (x) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('disk') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('format') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('code_index') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('code_snaken') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('code_cheats') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('code_hell') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('addresate') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('send'))) {
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('disk')){
                    if (format==0){
                        format=1
                        let click = new Audio
                        click.src = 'sound/click.mp3'
                        click.autoplay = true
                        document.querySelector('#explorer').setAttribute('src','visual/world/explorerContextMenu.png')
                        for (let xx = 17; xx <= 28; xx++) {
                            for (let yy = 19; yy <= 20 ; yy++) {
                                document.querySelector('.x' + (xx) + '.y'+yy).classList.add('format')
                            }
                        }
                    }
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('format')){
                    if (format==1){
                        format=2
                        let click = new Audio
                        click.src = 'sound/click.mp3'
                        click.autoplay = true
                        document.querySelector('#explorer').setAttribute('src','visual/world/explorerContextMenuFormat.png')
                        FormatAll()
                    }
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('addresate')){
                    if (!addresateChoosed){
                        let click = new Audio
                        click.src = 'sound/click.mp3'
                        click.autoplay = true
                        document.querySelector('#mail').setAttribute('src','visual/world/mailaddresate.png')
                        addresateChoosed=true
                    }
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('send')){
                    if (addresateChoosed && !sended){
                        let click = new Audio
                        click.src = 'sound/click.mp3'
                        click.autoplay = true
                        sended=true
                        Sended()
                    }
                    else{
                        let click = new Audio
                        click.src = 'sound/click.mp3'
                        click.autoplay = true
                        document.querySelector('#mailnot').classList.remove('hidden')
                        document.querySelector('#mailnot').classList.add('opacity_hz')
                        setTimeout(() => {
                            document.querySelector('#mailnot').classList.add('hidden')
                            document.querySelector('#mailnot').classList.remove('opacity_hz')
                        }, 3000);
                    }
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('code_index')){
                    if (mode!='code'){
                        mode='code'
                        ChangeWindow()
                    }
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('code_snaken')){
                    if (mode!='code_snaken'){
                        mode='code_snaken'
                        ChangeWindow()
                        if (snakenfind==false){
                            snakenfind=true
                            SnakenFind()
                        }
                    }
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('code_cheats')){
                    if (mode!='code_cheats'){
                        mode='code_cheats'
                        ChangeWindow()
                    }
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('code_hell')){
                    if (mode!='code_hell'){
                        mode='code_hell'
                        ChangeWindow()
                    }
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
            if ((x == 11 || x == 12 || x == 13) && y == 37) {
                if (mode != 'browser' && mode != 'mail' && mode != 'zmeika') {
                    mode = 'zmeika'
                    ChangeWindow()
                    if (!clonesGone){
                        document.addEventListener('keydown', TalkWithFriend)
                        document.querySelector('#entermessage').classList.remove('hidden')
                    }
                    friendsong2.play()
                }

            }
            if (x >= 13 && x <= 22 && y == 0) {
                if (mode == 'zmeika') {
                    mode = 'mail'
                    ChangeWindow()
                    if (clonesGone){
                        clone.forEach(eachclone=>{
                            eachclone=undefined
                        })
                        document.querySelectorAll('td').forEach(td=>{
                            td.classList.remove('clone')
                        })
                        for (let xx = 15; xx <= 51; xx++) {
                            for (let yy = 15; yy <= 30; yy++) {
                                document.querySelector('.x'+xx+'.y'+yy).classList.add('clone')
                            }
                        }
                        for (let xx = 18; xx <= 61; xx++) {
                            for (let yy = 6; yy <= 10; yy++) {
                                document.querySelector('.x'+xx+'.y'+yy).classList.add('addresate')
                            }
                        }
                        for (let xx = 16; xx <= 19; xx++) {
                            for (let yy = 33; yy <= 33; yy++) {
                                document.querySelector('.x'+xx+'.y'+yy).classList.add('send')
                            }
                        }
                    }
                }
            }
            if (x >= 2 && x <= 12 && y == 0) {
                if (mode == 'mail') {
                    mode = 'zmeika'
                    ChangeWindow()
                    if (!clonesGone){
                        document.addEventListener('keydown', TalkWithFriend)
                        document.querySelector('#entermessage').classList.remove('hidden')
                    }   
                    friendsong2.play()
                }
            }
            if ((x == 9 || x == 10) && y == 37) {
                if (mode != 'code') {
                    mode = 'code'
                    ChangeWindow()
                    for (let yy = 2; yy <= 3; yy++) {
                        for (let xx = 3; xx <= 7; xx++) {
                            document.querySelector('.x'+xx+'.y'+yy).classList.add('code_index')
                        }
                    }
                    for (let yy = 2; yy <= 3; yy++) {
                        for (let xx = 8; xx <= 12; xx++) {
                            document.querySelector('.x'+xx+'.y'+yy).classList.add('code_cheats')
                        }
                    }
                    for (let yy = 2; yy <= 3; yy++) {
                        for (let xx = 13; xx <= 17; xx++) {
                            document.querySelector('.x'+xx+'.y'+yy).classList.add('code_snaken')
                        }
                    }
                    for (let yy = 2; yy <= 3; yy++) {
                        for (let xx = 18; xx <= 22; xx++) {
                            document.querySelector('.x'+xx+'.y'+yy).classList.add('code_hell')
                        }
                    }
                }

            }
            if ((x == 5 || x == 6) && y == 37) {
                if (mode != 'explorer') {
                    mode = 'explorer'
                    ChangeWindow()
                    for (let xx = 8; xx <= 18; xx++) {
                        for (let yy = 7; yy <= 8; yy++) {
                            document.querySelector('.x'+xx+'.y'+yy).classList.add('disk')
                        }
                    }
                }

            }
            x = lastx
            y = lasty
        }



    }

    function ChangeWindow() {
        document.removeEventListener('keydown', TalkWithFriend)
        let click = new Audio
        click.src = 'sound/click.mp3'
        click.autoplay = true
        document.querySelectorAll('td').forEach(td=>{
            td.classList.remove('disk');
            td.classList.remove('format')
            td.classList.remove('send');
            td.classList.remove('addresate')
        })
        if (!mode.includes('code')){
            document.querySelectorAll('td').forEach(td=>{
                td.classList.remove('code_index')
                td.classList.remove('code_cheats')
                td.classList.remove('code_snaken')
                td.classList.remove('code_hell')
            })
        }
        if (clonesGone){
            document.querySelectorAll('td').forEach(td=>{
                td.classList.remove('clone');
            })
            clone.forEach(eachclone=>{
                eachclone.Destroy()
            })
        }
        document.querySelectorAll('.background').forEach((el) => el.classList.add('hidden'))
        document.querySelector('#explorer').setAttribute('src','visual/world/explorer.png')
        format=0
        document.querySelector('#' + mode).classList.remove('hidden')
        document.querySelector('#entermessage').classList.add('hidden')
        document.removeEventListener('keydown', TalkWithFriend)
        friendsong2.pause()
    }
    var spawnInt
    var clonesGone=false
    function ContinueSpawning(){
        let counter=0
        let mod=20
        spawnInt=setInterval(() => {
            counter++
            if (counter%mod==0){
                SpawnClone()
                if (mod!=1)
                    mod--
            }
            if (counter==200){
                clearInterval(spawnInt)
            }
        }, 100);
    }
    function VirusGone() {
        clearInterval(spawnInt)
        clone.forEach(eachclone=>{
            eachclone.GoToMail()
        })
        clonesGone=true
    }
    var indialogue = false
    function TalkWithFriend(e) {
        let key = `${e.code}`
        if (friendreplic[friendreplicnumber + 1].replic == 'wait') {
            ShowMessageLeft(friendreplic[friendreplicnumber].replic)
        }
        else if (friendreplic[friendreplicnumber+1].replic.includes('question')) {
            
            switch (key) {
                case 'Enter':
                    
                    document.querySelector('#friendmessage').classList.add('hidden');
                    questions = []
                    answers = []

                    friendreplic.forEach(rep => {
                        if (rep.theme == friendreplic[friendreplicnumber + 1].replic) {
                            questions.push(rep.replic)
                            answers.push(rep.change)
                        }
                    });
                    clearInterval(moveINT)
                    Choose(questions, answers)
                    document.querySelector('#chooseouter').classList.remove('hidden')
                    document.querySelector('#entermessage').classList.add('hidden')
                    if (friendreplicnumber > 5 && !sended)
                        document.querySelector('#escmessage').classList.remove('hidden')
                    indialogue = true;
                    break;
                case 'KeyQ':
                    if (!sended){
                        document.querySelector('#friendmessage').classList.add('hidden');
                        if (indialogue == true) {
                            moveINT = setInterval(() => {
                                NextBlock()
                            }, 75);
                            document.querySelector('#friendmessage').classList.add('hidden')
                            document.querySelector('#entermessage').classList.remove('hidden')
                            document.querySelector('#escmessage').classList.add('hidden')
                            document.querySelector('#chooseouter').classList.add('hidden')
                            indialogue = false;
                        }
                    }
                    
                    break;
                default:
                    break;
            }

        }
        else if (!friendreplic[friendreplicnumber+1].replic.includes('question') && friendreplic[friendreplicnumber] != 'wait') {
            switch (key) {
                case 'Enter':
                    
                    clearInterval(moveINT)
                    document.querySelector('#entermessage').classList.add('hidden')
                    if (friendreplicnumber > 5 && !sended)
                        document.querySelector('#escmessage').classList.remove('hidden')
                    if (indialogue) {
                        friendreplicnumber++;
                    }
                    if (friendreplic[friendreplicnumber].change=='continue_spawning') {
                        ContinueSpawning()
                    }
                    else if (friendreplic[friendreplicnumber].change=='virus_gone') {
                        
                    }
                    else if (friendreplic[friendreplicnumber+1].change=='wait_spawning') {
                        document.querySelector('#friendmessage').classList.add('hidden')
                        document.removeEventListener('keydown',TalkWithFriend)
                        setTimeout(() => {
                            friendreplicnumber+=2;
                            document.addEventListener('keydown',TalkWithFriend)
                            ShowMessageLeft(friendreplic[friendreplicnumber].replic)
                            VirusGone()
                        }, 17000);
                    }
                    else if (friendreplic[friendreplicnumber].change=='power_ending') {
                        document.querySelector('#friendmessage').classList.add('hidden')
                        document.removeEventListener('keydown',TalkWithFriend)
                        PowerEnding()
                    }
                    else if (friendreplic[friendreplicnumber].change != undefined) {
                        answers = []
                        friendreplic.forEach(element => {
                            answers.push(element.theme)
                        });
                        friendreplicnumber = answers.indexOf(friendreplic[friendreplicnumber].change, 1) - 1
                    }
                    indialogue = true;
                    ShowMessageLeft(friendreplic[friendreplicnumber].replic)
                    if (friendreplic[friendreplicnumber].replic=='end'){
                        document.querySelector('#friendmessage').classList.add('hidden')
                        document.querySelector('#entermessage').classList.add('hidden')
                    }
                    break;
                case 'KeyQ':
                    if (!sended){
                        document.querySelector('#friendmessage').classList.add('hidden')
                        if (indialogue) {
                            moveINT = setInterval(() => {
                                NextBlock()
                            }, 75);
                            document.querySelector('#entermessage').classList.remove('hidden')
                            document.querySelector('#escmessage').classList.add('hidden')
                            document.querySelector('#chooseouter').classList.add('hidden')
                            document.querySelector('#friendmessage').classList.add('hidden')
                            indialogue = false;
    
                        }
                    }
                    break;
                default:
                    return;
                    break;
            }
        }

    }
    function Choose(variants, change) {
        let choose = document.querySelector('#chooseouter')
        choose.querySelectorAll('.button').forEach((e) => e.remove())
        for (let i = 0; i < variants.length; i++) {
            let button = document.createElement('div')
            choose.appendChild(button)
            button.classList.add('button')
            button.innerHTML = variants[i]
            button.setAttribute('onclick', 'Chosen("' + change[i] + '")')
        }
        choose.classList.remove('hidden')
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
    function FormatAll(){
        clearInterval(moveINT)
        document.removeEventListener('keydown',moveINTkeypressed)
        document.querySelector('#glitch').setAttribute('src','visual/whitenoise.gif')
        setTimeout(() => {
            document.querySelector('#glitch').classList.remove('hidden')
            let glitch=new Audio
            glitch.src='sound/glitch.mp3'
            glitch.autoplay=true
        }, 3000);
        setTimeout(() => {
            document.querySelector('#black').classList.remove('hidden')
        }, 6000);
        setTimeout(() => {
            document.exitFullscreen()
            window.location.href='worldBroken.php?f='+foodEaten
        }, 8000);
    }
    var friend=[]
    var xfr=7
    var yfr=1
    function FriendNextBlock(dir) {
        switch (dir) {
            case 'up':
                yfr--
                break;
            case 'down':
                yfr++
                break;
            case 'left':
                xfr--
                break;
            case 'right':
                xfr++
                break;
        }
            if (friend[1]!=friend[0])
            friend[0].classList.remove('friend');
            for (let i = 0; i < friend.length - 1; i++) {
                friend[i] = friend[i + 1]
            }
            friend[friend.length - 1] = document.querySelector('.x' + (xfr) + '.y' + yfr)
            friend[friend.length - 1].classList.add('friend');
    }
    function Sended(){
        let success = new Audio
        success.src = 'sound/success.mp3'
        success.autoplay = true
        document.querySelector('#mail').setAttribute('src','visual/world/mailok.png')
        document.removeEventListener('keydown',moveINTkeypressed)
        clearInterval(moveINT)
        document.querySelectorAll('td').forEach(td=>{
            td.classList.remove('clone')
        })
        let power=document.querySelector('#power')
        power.play()
        setTimeout(() => {
            for (let i = 0; i < 7; i++) {
                friend[i]=document.querySelector('.x'+xfr+'.y'+yfr);
            }
            document.querySelector('.x'+xfr+'.y'+yfr).classList.add('friend')
            let dir='down'
            let friendInt=setInterval(() => {
                if (xfr==7 && yfr==5){
                    dir='right'
                }
                if (xfr==10 && yfr==5){
                    dir='down'
                }
                if (xfr==10 && yfr==10){
                    dir='left'
                }
                if (xfr==9 && yfr==10){
                    dir='down'
                }
                if (xfr==9 && yfr==12){
                    dir='right'
                }
                if (xfr==12 && yfr==12){
                    clearInterval(friendInt)
                    answers = []
                        friendreplic.forEach(element => {
                            answers.push(element.theme)
                        });
                        friendreplicnumber = answers.indexOf('final', 1)
                        document.addEventListener('keydown',TalkWithFriend)
                        indialogue=true
                        ShowMessageLeft(friendreplic[friendreplicnumber].replic)
                        
                }
                else
                    FriendNextBlock(dir)
            }, 100);
        }, 2000);
    }
    function PowerEnding(){
        document.querySelector('#black').classList.add('opacity_zh')
        document.querySelector('#black').classList.remove('hidden')
        setTimeout(() => {
            document.querySelector('#black').classList.remove('opacity_zh')
        }, 3000);
        setTimeout(() => {
            document.querySelector('#black').classList.add('opacity_hz')
            document.querySelectorAll('.background').forEach((el) => el.classList.add('hidden'))
            document.querySelectorAll('td').forEach(td=>{
                td.classList.remove('clone')
                td.classList.remove('snake')
                td.classList.remove('friend')
            })
            document.querySelector('#friendmessage').classList.add('hidden')
            document.querySelector('#entermessage').classList.add('hidden')
            document.querySelector('#escmessage').classList.add('hidden')
            document.querySelector('#earth').classList.remove('hidden')
        }, 6000);
        setTimeout(() => {
            document.querySelector('#black').classList.remove('opacity_hz')
            document.querySelector('#black').classList.add('hidden')
        }, 9000);
        setTimeout(() => {
            document.querySelector('#apple').classList.add('opacity_zh')
            document.querySelector('#apple').classList.remove('hidden')
        }, 15000);
        setTimeout(() => {
            document.querySelector('#apple').classList.remove('opacity_zh')
            let newClone=new Clone
            clone.push(newClone)
            newClone.x=47
            newClone.y=10
            newClone.Spawn()
        }, 18000);
        setTimeout(() => {
            Achieve(9,'Power Ending')
        }, 21000);
        setTimeout(() => {
            ShowMessage('Получили ли вы то, что искали? Нажмите R, чтобы попытать удачу еще раз','constant')
        }, 24000);
    }






}
