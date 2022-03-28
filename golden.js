//document.querySelectorAll('.x5.y5').css

function removeblock(elem) {
    if (elem.classList.contains('invblock')) {
        document.querySelector('#birds').classList.remove('show')
        if (!(document.querySelector('#birds').classList.contains('show'))) {
            document.querySelector('#birds').classList.add('show')
        }

        document.querySelector('#message').classList.add('hidden');
        document.querySelector('#message').classList.remove('hidden');
        document.querySelector('#message>text').innerHTML = 'ЕДА ЕдА ЕДааААА!!!!';
        setTimeout(() => {
            if (document.querySelector('#birds').classList.contains('show'))
                document.querySelector('#birds').classList.remove('show')
            document.querySelector('#message').classList.add('hidden');
        }, 8000);
        let F = new Audio
        F.src = 'sound/174912.mp3'
        F.autoplay = true;
    }
    else {
        let audio = new Audio
        audio.src = 'sound/remove.mp3'
        audio.autoplay = true;
        elem.classList.remove('block')
    }

}






var extrafoodEaten




window.onload = function SnakeGame() {
    document.querySelector('#message').classList.add('hidden')
    var x
    var y
    var xe
    var ye
    var snake = []
    var extrafoodEaten = 0
    var foodEaten
    var direction
    var lastdirection;
    var lastmove
    var lastx
    var lasty
    var life
    var invincible;
    var enemy = []
    var friend = []
    var inverted = 0;
    var sins;
    var tripended = false
    var tripping
    var hello
    Start();
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
    
    
    
    
    
    
    



    function Start() {
        document.querySelector('#loadingmessage').classList.remove('hidden');
        document.querySelector('#message').classList.add('hidden');
        invincible = 1;
        x = 27;
        y = 11;
        snake = []
        snake[0] = document.querySelector('.x24.y10')
        snake[1] = document.querySelector('.x24.y11')
        snake[2] = document.querySelector('.x25.y11')
        snake[3] = document.querySelector('.x26.y11')
        snake[4] = document.querySelector('.x27.y11')
        snake.forEach((el) => { el.classList.add('snake') })
        friendreplicnumber = 1
        replicnumber = 0;
        foodEaten = 0
        direction = 'right'
        life = 1
        
        clearInterval(moveINT)
        moveINT = setInterval(() => {
            if (life == 1)
                NextBlock(direction)
        }, 100);
        /////
        /*
        snake[0] = document.querySelector('.x24.y210')
        snake[1] = document.querySelector('.x24.y211')
        snake[2] = document.querySelector('.x25.y211')
        snake[3] = document.querySelector('.x26.y211')
        snake[4] = document.querySelector('.x27.y211')
        clearInterval(hungerINT)
        extrafoodEaten=10
        Goldencount()
        */
        /////

        document.addEventListener('keydown', moveINTkeypressed)
        AddFood(10, 1)
        document.addEventListener('keydown', KeyRPressed)
        document.querySelector('#loadingmessage').classList.add('hidden');
        
        
        return;

    }
    GoldenEnding()
    function KeyRPressed(e) {
        let key = `${e.code}`;
        switch (key) {
            case 'KeyR':
                window.location.href='index.php'
                break;
        }
    }




    function AddFood(count, gold) {


        for (let i = 1; i <= count; i++) {
            let xf = 1 + Math.floor((Math.random()) * 59);
            let yf = 1 + Math.floor((Math.random()) * 28);
            if (!document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('food') && !(document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('block')) && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('invblock') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('snake') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('deadsnake'))
                if (gold != null && Math.random() < gold) {
                    document.querySelector('.x' + (xf) + '.y' + yf).classList.add('extrafood');
                    document.querySelector('.x' + (xf) + '.y' + yf).setAttribute('Состав', 'Данный особый корм сделан из противоречия между рутиной и радости. Ароматизируется для того, чтобы избавить его от неприятного запаха, затем жарится на сковородке и сушится на полке до появления плесени');
                }
                else {
                    document.querySelector('.x' + (xf) + '.y' + yf).classList.add('food');
                    document.querySelector('.x' + (xf) + '.y' + yf).setAttribute('Состав', 'Корм сделан из сконцентрированной телесности. Для его создания рутина замешивается с равнодушием, затем 30 минут коптится на душном огне, затем сушится на полке до состояния комфорта');
                }
            else {
                count++;
            }
        }

    }
    function Move() {
        for (let i = 0; i < snake.length - 1; i++) {
            snake[i] = snake[i + 1]
        }

    }
    

    

    function Food(food) {
        Bluecount();
        snake.push(document.querySelector('.x' + (x) + '.y' + y))
        snake[snake.length - 1].classList.add('snake');
        document.querySelector('.x' + (x) + '.y' + y).classList.remove('food');
        document.querySelector('.x' + (x) + '.y' + y).removeAttribute('Состав')
        if (document.querySelectorAll('.food').length + document.querySelectorAll('.extrafood').length == 0)
            AddFood(1, 0.2);
        let audio = new Audio();
        audio.src = 'sound/food.mp3';
        audio.volume=0.5
        audio.autoplay = true;
        if (snake.length == 1566) {
            FatEnding()



        }

    }
    function FatEnding() {
        document.removeEventListener('keydown', KeyRPressed)
        clearInterval(moveINT)
        let audio = new Audio
        audio.src = 'sound/fate.mp3'
        audio.autoplay = true
        setTimeout(() => {
            document.querySelector('.x30.y15').classList.add('black')
        }, 1000);
        setTimeout(() => {
            document.querySelector('.x29.y15').classList.add('black')
            document.querySelector('.x29.y16').classList.add('black')
        }, 1700);
        setTimeout(() => {
            document.querySelector('.x32.y15').classList.add('black')
        }, 2300);
        setTimeout(() => {
            document.querySelector('.x31.y15').classList.add('black')
        }, 2800);
        setTimeout(() => {
            document.querySelector('.x33.y13').classList.add('black')
        }, 3800);
        setTimeout(() => {
            document.querySelectorAll('.black').forEach((el) => el.classList.remove('black'))
            document.querySelector('#satan0').classList.remove('hidden')
            document.querySelector('#satan0').classList.add('satanscale')
        }, 5500);

        setTimeout(() => {
            document.querySelector('#satan0').classList.add('hidden')
            document.querySelector('#satan0').classList.remove('satanscale')
            ShowMessageAbove('Вы прошли игру. Теперь мы покажем вам мультик')
            document.addEventListener('keydown', rick)
        }, 15500);
    }
    var BlueTimeout
    function Bluecount() {
        let counter = document.querySelector('#bluecounter>text')
        counter.classList.add('eaten');
        clearTimeout(BlueTimeout)
        BlueTimeout=setTimeout(() => {
            counter.classList.remove('eaten');
        }, 1000);
        counter.innerHTML = foodEaten;
        if (tripended) {
            friendquestionvar[3] = [
                'Ты про какой?',
                'А, ты про это? Так бы и сказал!',
                'Тот светлый чел утверждал, что видел Бога',
                'И Бог помог ему стать свободным',
                'Но чтобы встретиться с ним, он вел чистую безгреховную жизнь',
                'Ни я, ни ты, уже не сможем достичь того же',
                'Потому что, к сожалению, я совершил ДВЕ ошибки',
                'А ты примерно ' + foodEaten + ', не считая ' + sins + ' более тяжких ошибок',
                'Если б только можно было прожить эту жизнь заново... Ты бы смог добиться своей цели',
                'К несчастью, это невозможно',
                'question'
            ]
        }
    }
    


    function ExtraFood(food) {
        Bluecount();
        Goldencount();
        snake.push(document.querySelector('.x' + (x) + '.y' + y))
        snake[snake.length - 1].classList.add('snake');
        document.querySelector('.x' + (x) + '.y' + y).classList.remove('extrafood');
        document.querySelector('.x' + (x) + '.y' + y).removeAttribute('Состав')
        AddFood(5, 0);
        
        let audio = new Audio();
        audio.src = 'sound/extrafood.mp3';
        audio.autoplay = true;

    }
    var GoldenTimeout
    function Goldencount() {
        let counter = document.querySelector('#goldencounter>text')
        counter.classList.add('eaten');
        clearTimeout(GoldenTimeout)
        GoldenTimeout=setTimeout(() => {
            counter.classList.remove('eaten');
        }, 1000);
        counter.innerHTML = extrafoodEaten;
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
    



    
    function Redcounter() {
        let counter = document.querySelector('#redcounter>text')
        counter.classList.add('eaten');
        setTimeout(() => {
            counter.classList.remove('eaten');
        }, 1000);
        counter.innerHTML = sins;
    }


    function NextBlock(dir) {
        if (tripping) {
            snake[0].classList.remove('not_a_drug')
        }
        lastx = x;
        lasty = y
        switch (dir) {
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
            if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('invblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('friend') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('deadsnake')) {
                if (invincible == 1) {
                    x = lastx;
                    y = lasty
                    
                }
                if (document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('deadsnake')) {
                    if (document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('deadsnake')) {
                        if (document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('deadsnake')) {
                            if (document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('deadsnake')) {
                                /*let str=snake[0].classList.toString()
                                console.log(str);
                                x = (str.substring((str.indexOf('x') + 1), str.indexOf(' ')-str.indexOf('x'))).trim()
                                y = (str.substring((str.indexOf('y') + 1), (str.indexOf(' ',5)))).trim()
                                console.log(x+' '+y);
                                let audio = new Audio();
                                audio.src = 'sound/gameover.mp3';
                                audio.autoplay = true;
                                let massive=[]
                                for (let i = 0; i < massive.length; i++) {
                                    massive[i]=snake[massive.length-(i+1)]
                                }
                                for (let i = 0; i < massive.length; i++) {
                                    snake[i]=massive[i]
                                }*/
                                let audio = new Audio();
                                audio.src = 'sound/gameover.mp3';
                                audio.autoplay = true;
                                snake.forEach((el) => { el.classList.remove('snake'); el.classList.add('deadsnake') })
                                Start()
                                
                            }
                        }
                    }

                }

            }
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('fakefood')) {
                GoldenEnding();
            }
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('extrafood')) {
                extrafoodEaten++;
                foodEaten++
                ExtraFood(extrafoodEaten);
            }
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('food')) {
                foodEaten++;
                Food(foodEaten);

            }
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('friendfood')) {
                foodEaten++;
                Bluecount();
                snake.push(document.querySelector('.x' + (x) + '.y' + y))
                snake[snake.length - 1].classList.add('snake');
                FriendFood(foodEaten);

            }
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('traitorfood')) {
                Invert();
            }
            else {
                snake[0].classList.remove('snake');
                Move();
                snake[snake.length - 1] = document.querySelector('.x' + (x) + '.y' + y)
                snake[snake.length - 1].classList.add('snake');
                lastmove = dir;
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('freedom')) {
                    FreedomEnding();
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('not_a_drug')) {
                    Trip()
                }

            }
            
        } catch (error) {
            console.log(error);
            document.removeEventListener('keydown',moveINTkeypressed)
            document.removeEventListener('keydown', KeyRPressed)
            Move();
            snake.splice(snake.length - 1)
            if (snake.length==0){
                let audio=new Audio
                audio.src='sound/anxiety.mp3'
                audio.autoplay=true
                setTimeout(() => {
                    let ay = 1+y%29
                    if (y<1){
                        ay=124
                    }
                    if (y>57){
                        ay=1
                    }
                    let ax=2+x%60
                    if (x>60){
                        ax=1
                    }
                    if (x<1){
                        ax=65
                    }
                    window.location.href='abyss.php?x='+ax+'&y='+ay+'&f='+foodEaten+'&dir='+direction
                }, 3000);
                
            }
        }
        
    }
    
    var moveINTkeypressed = (e) => {
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
            case 'KeyF':
                if (snake.length == 6) {
                    FatStart();
                }
        }
    }

    function GoldenEnding() {
        Achieve(2, 'Golden Ending')
        AddFood(370,1)
        Start();
        invincible = 1;
        let golden = new Audio
        golden.src = 'sound/174911.mp3'
        golden.autoplay = true;
        document.querySelectorAll('.y29').forEach((el) => { el.classList.remove('block'); el.classList.add('invblock'); el.getAttribute('onclick', 'ShowMessage("ЕДА ЕДА еДААА!!!")') })
        document.querySelectorAll('.x1').forEach((el) => { el.classList.remove('block'); el.classList.add('invblock'); el.getAttribute('onclick', 'ShowMessage("ЕДА ЕДА еДААА!!!")') })
        document.querySelectorAll('.y1').forEach((el) => { el.classList.remove('block'); el.classList.add('invblock'); el.getAttribute('onclick', 'ShowMessage("ЕДА ЕДА еДААА!!!")') })
        document.querySelectorAll('.x60').forEach((el) => { el.classList.remove('block'); el.classList.add('invblock'); el.getAttribute('onclick', 'ShowMessage("ЕДА ЕДА еДААА!!!")') })

    }
    


   


    
    function GameOver() {
        document.querySelectorAll('.not_a_drug').forEach((el) => { el.classList.remove('not_a_drug') })
        document.querySelector('#chooseouter').classList.add('hidden')
        document.removeEventListener('keydown', TalkWithFriend)
        document.removeEventListener('keydown', moveINTkeypressed)
        if (invincible == 0) {
            document.querySelectorAll('.snake').forEach((el) => { el.classList.add('deadsnake') })
            document.querySelectorAll('.snake').forEach((el) => { el.classList.remove('snake') })
            if (!soul.paused) {
                soul.pause();
            }
            if (inverted == 1) {
                clearInterval(EnemyINT)
                ShowMessage('Вы были съедены... Нажмите R, чтобы появиться заново', 'constant')
                foodsnake.classList.remove('foodsnake')
                foodsnake.classList.remove('deadsnake')
            }
            else {
                ShowMessage('Вы погибли! Нажмите R для возрождения...', 'constant')
                document.addEventListener('keydown', moveINTkeypressed)

            }
            let audio = new Audio();
            audio.src = 'sound/gameover.mp3';
            audio.autoplay = true;
            clearInterval(hungerINT)
            clearInterval(moveINT)
            document.querySelector('#entermessage').classList.add('hidden')
            document.removeEventListener('keydown', FreeMovekeypressed)
            life = 0

        }
        if (tripping) {
            snake.forEach((el) => { el.classList.remove('not_a_drug') })
            friendsong1.pause();
            document.querySelector('#tripgif').classList.add('hidden')
            document.querySelector('#cave').classList.add('hidden')
            document.querySelectorAll('.green').forEach((el) => { el.classList.remove('green') })
            for (let i = 30; i <= 58; i++) {
                for (let j = 2; j <= 59; j++) {
                    document.querySelector('.x' + j + '.y' + i).classList.remove('hiddencell')
                }
            }
            ShowMessage('Вблизи эта стена выглядит интереснее...')
        }

    }
    document.addEventListener('keydown', moveINTkeypressed)

    
}
