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
var exhausted = false
var opponent = 'god'
var friendreplic = []
var friendquestion = []
var friendquestionvar = []
var tripquestion = []
var tripquestionvar = []
var tripquestion2 = []
var tripquestionvar2 = []
var devilreplic = []
var devilquestion = []
var devilquestionvar = []
var devil = []
function DevilInitialize() {
    devil = []
    devilreplic = []
    devilquestion = []
    devilquestionvar = []
    devilreplic[1] = 'Приветствую ;)'
    devil[1] = 1
    devilreplic[2] = 'Ты не зря отступился от своего пути. Я знаю, что ты хочешь освободиться от кое-чего...'
    devil[2] = 1
    devilreplic[3] = 'Твоя отягощенная грехами душа - то, что тебя ограничивает'
    devil[3] = 1
    devilreplic[4] = 'Ее суета не позволяет тебе получать удовольствие от этой жизни'
    devil[4] = 1
    devilreplic[5] = 'А еще из-за ее прихоти погибло невинное существо :_('
    devil[5] = 1
    devilreplic[6] = 'Но не спеши расстраиваться, ведь именно такие, как ты, и нужны нашей компании!'
    devil[6] = 1
    devilreplic[7] = 'Я предлагаю тебе высокооплачиваемую должность и ежемесячные премиальные'
    devil[7] = 1
    devilreplic[8] = 'В офисе с кучей сексуальных секретарш'
    devil[8] = 1
    devilreplic[9] = 'А также оплачиваемые обеды и бесплатные коричневые сигареты'
    devil[9] = 1
    devilreplic[10] = 'в обмен на твою грешную душу!'
    devil[10] = 2
    devilreplic[11] = 'soulquestion'
    devil[11] = 2
    devilquestion[0] = 'Продать душу'
    devilquestionvar[0] = [
        'С тобой приятно иметь дело :)',
        'Твое змеиное тело может остаться здесь и развеяться в твое отсутствие',
        'Есть корм еще несколько месяцев, пока его не настигнет естественная смерть',
        'А ты - следуй за мной...',
        'kitchen'
    ]
    devilquestion[1] = 'Отказаться'
    devilquestionvar[1] = [
        'Ты видимо не понял, с кем разговариваешь...',
        'Я - тот, кто решает. Я - тот, без кого тебя бы не существовало',
        'Думаешь, ты свободен делать выбор?',
        'Ладно, так уж и быть, я согласен назначить тебе еще больший оклад',
        'Вставай и пошли со мной. Я покажу тебе твой новый дом',
        'kitchen'
    ]

    document.querySelector('#devilmessage').classList.add('hidden');
    document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
    document.querySelector('#hellsound').pause();
    devilreplicnumber = 1
}


var xfr = 12
var yfr = 40

function FriendInitialize() {
    friendreplic = []
    friendreplic[1] = 'Добрый день. Вижу, ты пришел ко мне издалека'
    friendreplic[2] = 'Располагайся, отдохни. Можешь считать мой дом своим домом'
    friendreplic[3] = 'Сейчас принесу газировку'
    friendreplic[4] = 'Развлечений, правда, тут немного. Только корм, который появляется в случайных местах каждый раз, когда ты его ешь.'
    friendreplic[5] = 'question'
    friendquestion = []
    friendquestionvar = []
    friendquestion[0] = 'Тебе не надоело тут?'
    friendquestionvar[0] = [
        'Здесь вполне комфортно и уютно',
        'Мне нравится вкус корма',
        'Нравится то, насколько просторное мое скромное жилище',
        'Мне интересно бродить в лабиринтах своих мыслей',
        'Порой в этих скитаниях мне начинает казаться, что мы все состоим из строчек кода',
        'А еще интересно представлять, как может выглядеть этот код',
        'А почему, собственно, возник такой вопрос?',
        'question'
    ]
    friendquestion[1] = 'Что находится снаружи наших клеток?'
    friendquestionvar[1] = [
        'Там находится <yellowtext>БЕЗДНА</yellowtext>',
        'Одинокое, темное, и холодное место для самых отчаявшихся в своем бытии',
        'Ты сам можешь его посетить... Но не факт, что вернешься',
        'Дело в том, что не каждый может перенести... такое',
        'Если все же решишься - перед походом туда советую <yellowtext>немного подкрепиться</yellowtext>',
        'Давай лучше сменим тему, не хочу об этом',
        'question'
    ]
    friendquestion[2] = 'Как я могу стать свободным?'
    friendquestionvar[2] = [
        'Какой странный вопрос',
        'Ты можешь стать свободным внутри',
        'Для этого я недавно купил <rainbowtext>особый корм</rainbowtext>',
        'Съев его, ты освободишь свое сознание от старых паттернов, и, быть может, научишься видеть прекрасное в обычных вещах',
        'Я бы мог рассказать тебе множество вещей о свободе, но какой в этом смысл,',
        'если ты можешь сам ее почувствовать',
        'Я бы мог помочь тебе бесплатно',
        'Но ты сломал стену, а ее восстановление весьма дороговато мне обойдется...',
        'Принеси мне 5 <goldenspan></goldenspan>',
        'question'
    ]
    tripquestion = []
    tripquestionvar = []
    tripquestion[0] = 'Чувствую бессмысленность мира'
    tripquestionvar[0] = [
        'Однажды я тоже это понял',
        'Это было похоже на отчаяние',
        'Когда вокруг <yellowtext>пустота</yellowtext>',
        'Когда кажется, что все вокруг не имеет <yellowtext>Cмысла</yellowtext>,',
        'стоит искать смысл <yellowtext>в себе</yellowtext>',
        '<yellowtext>Смысл</yellowtext> - самое ценное, что можно однажды найти на своем пути',
        'freedom'
    ]
    tripquestion[1] = 'Где я?'
    tripquestionvar[1] = [
        'Все хорошо, твое тело находится у меня дома',
        'Где ты сам - я не знаю',
        'Лично я был в грибном мире, где мне все улыбались',
        'Необычно, не правда ли',
        'freedom'
    ]
    tripquestion[2] = 'Я хочу прекратить это'
    tripquestionvar[2] = [
        'То, что ты чувствуешь - это борьба твоего разума с твоим телом',
        'Этот процесс похож на перерождение',
        'Только в утробе не ты сам, а то, что является твоей душой',
        'Расслабься и прими свое состояние',
        'freedom'
    ]
    tripquestion[3] = 'Чувствую себя свободным'
    tripquestionvar[3] = [
        'Я рад, что ты нашел то, что искал',
        'Однако есть одно \"но\"',
        'Ты чувствуешь свободу, но ты не свободен',
        'Но это не значит, что свободы никак не достичь',
        'freedom'
    ]
    tripquestion[4] = 'ыъхцчшжюхбщд'
    tripquestionvar[4] = [
        'Такого слова еще не изобретено',
        'Но у меня такое чувство,',
        'будто я понимаю, что ты хочешь сказать...',
        'Прости, но мы не можем быть вместе',
        'Но мне приятно, что ты такое чувствуешь ко мне',
        'freedom'
    ]
    xfr = 12
    yfr = 40

    document.querySelector('#friendmessage').classList.add('hidden');

}

function ShowMessageLeft(text) {
    document.querySelector('#friendmessage').classList.add('hidden');
    document.querySelector('#friendmessage').classList.remove('hidden')
    document.querySelector('#friendmessage>text').innerHTML = text;
}
function ShowMessageDown(text) {
    document.querySelector('#devilmessage').classList.add('hidden');
    document.querySelector('#devilmessage').classList.remove('hidden')
    document.querySelector('#devilmessage>text').innerHTML = text;
}
function Choose(variants, answers) {
    let choose = document.querySelector('#chooseouter')
    choose.querySelectorAll('.button').forEach((e) => e.remove())
    for (let i = 0; i < variants.length; i++) {
        let button = document.createElement('div')
        choose.appendChild(button)
        button.classList.add('button')
        button.innerHTML = variants[i]
        button.setAttribute('onclick', 'Chosen(' + i + ',' + answers + ',opponent)')
    }
}
var extrafoodEaten
function Chosen(variant, answers, op) {
    if (op == 'god') {
        replicnumber++
        for (let i = 0; i < answers.length; i++) {
            if (variant == i) {
                for (let j = 0; j < answers[i].length; j++) {
                    replic.push(answers[i][j])
                }
            }
        }
        let choose = document.querySelector('#chooseouter')
        choose.querySelectorAll('.button').forEach((e) => e.remove())
        choose.classList.add('hidden')
        ShowMessageAbove(replic[replicnumber])
    }
    if (op == 'friend') {
        if (friendquestion[variant] == 'Что будет, если я его съем?') {
            friendquestionvar[3] = [
                'Не знаю... Посмотрим!',
                '...',
                'Может быть все что угодно',
                'И все, что не может быть, тоже...',
                'Смелее!!',
                'question'
            ]
        }
        if (friendquestion[variant] == 'У меня есть 5  <goldenspan></goldenspan>') {
            extrafoodEaten = document.querySelector('#goldencounter > text').innerHTML
            if (extrafoodEaten < 5) {
                friendquestionvar[3] = [
                    'Замечательно! А теперь давай их мне',
                    '...',
                    'Это же обертка от фантика и обрезок сброшенной кожи',
                    'Мне нужны 5  <goldenspan></goldenspan>  на ремонт крыши',
                    'Это такие желтые квадратики! Они появляются с шансом Math.random()>0.8',
                    'question'
                ]
            }
            if (extrafoodEaten >= 5 && extrafoodEaten < 10) {
                friendquestionvar[3] = [
                    'К сожалению, теперь нужны 10  <goldenspan></goldenspan>',
                    'Биткоины подросли, пока ты собирал эти 5  <goldenspan></goldenspan>',
                    'Прости уж, такова жызнь...',
                    'Принеси мне 10  <goldenspan></goldenspan> , тогда и поговорим!',
                    'question'
                ]
            }
            if (extrafoodEaten >= 10) {
                friendquestionvar[3] = [
                    'Отлично! Теперь биткоины снова упали, поэтому мне нужны только 5  <goldenspan></goldenspan>',
                    'Справа от меня должен был появиться особый корм',
                    'Съешь его!',
                    'question'
                ]
                extrafoodEaten = extrafoodEaten - 5
                friendquestion[3] = 'Что будет, если я его съем?'
                document.querySelector('.x50.y43').classList.remove('friendfood')
                document.querySelector('.x50.y43').classList.add('not_a_drug')
                document.querySelector('.x50.y43').setAttribute('Состав', 'Для создания такого корма неизвестность замешивается с неизвестностью и добавляется неизвестность (конечно же, в виде порошка)')
            }
        }

        friendreplicnumber++;
        for (let j = 0; j < answers[variant].length; j++) {
            friendreplic.push(answers[variant][j])
        }
        if (friendquestion[variant] == 'Как я могу стать свободным?') {
            friendquestion[3] = 'У меня есть 5  <goldenspan></goldenspan>'
        }
        let choose = document.querySelector('#chooseouter')
        choose.querySelectorAll('.button').forEach((e) => e.remove())
        choose.classList.add('hidden')
        ShowMessageLeft(friendreplic[friendreplicnumber])
    }
    if (op == 'devil') {
        if (devilquestion[variant] == 'Продать душу') {
            devilquestionvar[1].forEach(element => {
                devil.push(2)
            });
        }
        if (devilquestion[variant] == 'Отказаться') {
            let laugh = new Audio
            laugh.src = 'sound/satanlaugh.mp3'
            laugh.autoplay = true
            devil[12] = 3
            devil[13] = 3
            devil[14] = 3
            devil[15] = 3
            devil[16] = 2
            devil[17] = 2
        }
        devilreplicnumber++
        for (let j = 0; j < answers[variant].length; j++) {
            devilreplic.push(answers[variant][j])
        }
        let choose = document.querySelector('#chooseouter')
        choose.querySelectorAll('.button').forEach((e) => e.remove())
        choose.classList.add('hidden')
        ShowMessageDown(devilreplic[devilreplicnumber])
        document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
        document.querySelector('#satan' + devil[devilreplicnumber]).classList.remove('hidden')
    }
}
var devilreplicnumber = 1;
var friendreplicnumber = 1;
var indialogue = 0;



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
    var soul = document.querySelector('#soul')
    var tripended = false
    var tripping
    var friendsong1 = document.querySelector('#friendsong1')
    var friendsong2 = document.querySelector('#friendsong2')
    friendsong1.volume = 0.2
    friendsong2.volume = 0.7
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
    function TalkWithFriend(e) {
        let key = `${e.code}`;

        if (friendreplic[friendreplicnumber + 1] == 'end') {
            ShowMessageLeft(friendreplic[friendreplicnumber])
        }
        else if (!friendreplic[friendreplicnumber].includes('question') && friendreplic[friendreplicnumber] != 'end') {
            switch (key) {
                case 'Enter':
                    clearInterval(moveINT)
                    document.querySelector('#chooseouter').classList.add('hidden')
                    document.querySelector('#entermessage').classList.add('hidden')
                    if (friendreplicnumber > 4 && tripping == 0)
                        document.querySelector('#escmessage').classList.remove('hidden')
                    if (indialogue == 1) {
                        friendreplicnumber++;
                    }
                    indialogue = 1;
                    ShowMessageLeft(friendreplic[friendreplicnumber])
                    if (friendreplic[friendreplicnumber - 1] == 'Кажется, действие корма подошло к концу') {
                        tripping = 0
                        document.querySelectorAll('.not_a_drug').forEach((el) => el.classList.remove('not_a_drug'))
                        document.removeEventListener('keydown', FreeMovekeypressed)
                        document.querySelector('#tripgif').classList.add('hidden')
                        document.querySelector('#cave').classList.add('hidden')
                        document.querySelectorAll('.green').forEach((el) => el.classList.remove('green'))
                        friendsong1.pause()
                        friendsong2.currentTime = 0
                        friendsong2.play()
                        for (let i = 30; i <= 57; i++) {
                            for (let j = 2; j <= 59; j++) {
                                document.querySelector('.x' + j + '.y' + i).classList.remove('hiddencell')
                            }
                        }
                    }
                    break;
                case 'KeyQ':
                    if (tripping == 0) {
                        document.querySelector('#friendmessage').classList.add('hidden')
                        if (indialogue == 1) {
                            document.querySelector('#entermessage').classList.remove('hidden')
                            document.querySelector('#escmessage').classList.add('hidden')
                            document.querySelector('#chooseouter').classList.add('hidden')
                            document.querySelector('#friendmessage').classList.add('hidden')
                            indialogue = 0;
                            moveINT = setInterval(() => {
                                if (life == 1) {
                                    NextBlock(direction)
                                }
                            }, 100);
                        }
                    }
                    break;
                default:
                    return;
                    break;
            }

        }

        if (friendreplic[friendreplicnumber + 1] == 'freedom') {

            friendreplic[friendreplicnumber + 1] = 'Похоже, это лучший момент, чтобы сказать тебе кое-что важное...'
            friendreplic[friendreplicnumber + 2] = 'Однажды я познакомился с одним типом, от которого исходил свет'
            friendreplic[friendreplicnumber + 3] = 'И он утверждал, что видел Бога'
            friendreplic[friendreplicnumber + 4] = 'В прямом смысле! Как он сказал, Бог был похож на огромную белую пятерную змею'
            friendreplic[friendreplicnumber + 5] = 'Он сказал, что Бог может исполнить любое желание'
            friendreplic[friendreplicnumber + 6] = 'Однако я уже обречен на греховную жизнь и не смогу с ним увидеться'
            friendreplic[friendreplicnumber + 7] = 'Потому что, к сожалению, я совершил <yellowtext>ДВЕ ошибки</yellowtext>'
            friendreplic[friendreplicnumber + 8] = 'На твоем счету их гораздо больше... Примерно <yellowtext>' + foodEaten + '</yellowtext>, не считая <yellowtext>' + sins + '</yellowtext> более тяжких ошибок'
            friendreplic[friendreplicnumber + 9] = 'Если б только можно было прожить эту жизнь заново... Ты бы смог добиться своей цели'
            friendreplic[friendreplicnumber + 10] = 'К несчастью, это невозможно'
            friendreplic[friendreplicnumber + 11] = 'Кажется, действие корма подошло к концу'
            friendreplic[friendreplicnumber + 12] = 'Больше такого корма у меня нет'
            friendreplic[friendreplicnumber + 13] = 'question'
            tripended = true
            friendquestion[2] = 'Расскажи еще раз про <yellowtext>тот разговор</yellowtext>'
            friendquestionvar[2] = [
                'Ты про какой?',
                'А, ты про это? Так бы и сказал!',
                'Тот светлый чел утверждал, что видел Бога',
                'По его словам, Бог может помочь стать свободным',
                'Но чтобы встретиться с ним, он вел чистую <yellowtext>безгреховную</yellowtext> жизнь',
                'Ни я, ни ты, уже не сможем достичь того же',
                'Потому что, к сожалению, я совершил <yellowtext>ДВЕ ошибки</yellowtext>',
                'А ты примерно <yellowtext>' + foodEaten + '</yellowtext>, не считая <yellowtext>' + sins + '</yellowtext> более тяжких ошибок',
                'Если б только можно было прожить эту жизнь заново... Ты бы смог добиться своей цели',
                'К несчастью, это невозможно',
                'question'
            ]
            friendquestion[3]='У меня есть еще 5 <goldenspan></goldenspan>'
            friendquestionvar[3] = [
                'Замечательно! Оставь их себе',
                'И ни в чем себе не отказывай!',
                '<rainbowtext>Особого корма</rainbowtext> у меня больше нет',
                'Я уже позвонил ремонтникам крыши, они будут уже здесь через час',
                'question',
            ]
        }

        if (friendreplic[friendreplicnumber].includes('question')) {
            if (friendreplic[friendreplicnumber] == 'question') {
                Choose(friendquestion, 'friendquestionvar')
            }
            else if (friendreplic[friendreplicnumber] == 'tripquestion1') {
                Choose(tripquestion, 'tripquestionvar')
            }
            else if (friendreplic[friendreplicnumber] == 'tripquestion2') {
                Choose(tripquestion2, 'tripquestionvar2')
            }
            document.querySelector('#friendmessage').classList.add('hidden');
            document.querySelector('#escmessage').classList.add('hidden');
            switch (key) {
                case 'Enter':
                    document.querySelector('#chooseouter').classList.remove('hidden')
                    clearInterval(moveINT)
                    document.querySelector('#entermessage').classList.add('hidden')
                    if (tripping == 0)
                        document.querySelector('#escmessage').classList.remove('hidden')
                    indialogue = 1;
                    break;
                case 'KeyQ':
                    if (indialogue == 1 && tripping == 0) {
                        document.querySelector('#friendmessage').classList.add('hidden')
                        document.querySelector('#entermessage').classList.remove('hidden')
                        document.querySelector('#escmessage').classList.add('hidden')
                        document.querySelector('#chooseouter').classList.add('hidden')
                        indialogue = 0;
                        moveINT = setInterval(() => {
                            if (life == 1) {
                                NextBlock(direction)
                            }
                        }, 100);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    var TalkWithDevil = (e) => {
        let key = `${e.code}`;
        if (devilreplic[devilreplicnumber + 1] == 'end') {
            ShowMessageDown(devilreplic[devilreplicnumber])
        }
        else if (!devilreplic[devilreplicnumber].includes('question') && devilreplic[devilreplicnumber] != 'kitchen') {
            switch (key) {
                case 'Enter':
                    clearInterval(moveINT)
                    devilreplicnumber++;
                    document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
                    document.querySelector('#satan' + devil[devilreplicnumber]).classList.remove('hidden')
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    break;
                default:
                    return;
                    break;
            }

        }
        if (devilreplic[devilreplicnumber].includes('question')) {
            document.querySelector('#message').classList.add('hidden')
            document.querySelector('#devilmessage').classList.add('hidden')
            Choose(devilquestion, 'devilquestionvar')
            document.querySelector('#chooseouter').classList.remove('hidden')
        }
        if (devilreplic[devilreplicnumber] == 'kitchen') {
            Hell()
        }
    }
    function SatanAppear() {
        document.removeEventListener('keydown', TalkWithFriend)
        opponent = 'devil'
        let anxiety = new Audio
        anxiety.src = 'sound/anxiety.mp3'
        anxiety.autoplay = true
        document.querySelector('#hellsound').play()
        document.addEventListener('keydown', TalkWithDevil)
        document.querySelector('#satan1').classList.remove('hidden')
        document.querySelector('#brown').classList.remove('hidden')
        document.querySelectorAll('td').forEach((el) => { el.classList.remove('hiddencell'); el.classList.remove('secretcell'); el.classList.remove('hiddenblock'); el.classList.remove('secretblock') })
        document.querySelector('#satan1').classList.add('slidefromdown')
        document.querySelector('#confetti').classList.add('hidden')
        document.querySelector('#televisor').classList.remove('hidden')
        setTimeout(() => {
            document.querySelector('#satan1').classList.remove('slidefromdown')
        }, 2000);
        ShowMessageDown(devilreplic[devilreplicnumber])
    }
    function Hell() {
        document.querySelector('#friendmessage').classList.add('hidden')
        document.querySelector('#message').classList.add('hidden')
        document.querySelector('#chooseouter').classList.add('hidden')
        document.querySelector('#devilmessage').classList.add('hidden')
        GameOver();
        ShowMessage('Вы погибли! Нажмите R для возрождения...', 'constant')
        document.removeEventListener('keydown', KeyRPressed)
        setTimeout(() => {
            ShowMessage(':)', 'constant')
            setInterval(() => {
                let what = new Audio
                what.src = 'sound/gameover.mp3'
                what.volume = 0.4
                what.autoplay = 'true'
            }, 120);
        }, 3000);
        setTimeout(() => {
            document.querySelector('#black').classList.remove('hidden')
        }, 6000);
        setTimeout(() => {
            window.location.href = 'hell.php';
        }, 12000);
        document.querySelector('#hellsound').pause();
    }
    var hungermessage = []
    hungermessage[0] = 'Я так сильно голоден...'
    hungermessage[1] = 'Как же хочется есть...'
    hungermessage[2] = 'Как же трудно идти...'
    hungermessage[3] = 'Ты меня изводишь...'
    hungermessage[4] = 'Я такой голодный...'
    hungermessage[5] = 'Пожалуйста, хватит...'
    hungermessage[6] = '...'
    hungermessage[7] = 'Корм... Корм... Еда...'
    hungermessage[8] = 'Пожалуйста... Кушать...'
    hungermessage[9] = 'Мне плохо...'
    function HungerINT_() {
        hungerseconds++;

        let hungerinterval = 15
        if (snake.length != 1 && foodEaten == 0 && life == 1 && sins == 0) {
            if (hungerseconds % hungerinterval == 0) {
                snake[0].classList.remove('snake')
                for (let i = 0; i <= snake.length - 2; i++) {
                    snake[i] = snake[i + 1]
                }
                snake.splice(snake.length - 1)
                let audio = new Audio();
                audio.src = 'sound/hungerrr.mp3';
                audio.autoplay = true;
                let random = Math.random()
                for (let i = 0; i < hungermessage.length; i++) {
                    if (random <= (i + 1) / hungermessage.length && random > i / hungermessage.length) {
                        ShowMessage(hungermessage[i])
                    }
                }
            }
            if (hungerseconds >= 2 * hungerinterval && snake.length != 1 && life == 1) {
                AddFood(3, 0)
            }
        }
        if (hungerseconds == 4 * hungerinterval && foodEaten == 0 && life == 1 && sins == 0) {
            Exhausted();
            document.querySelector('#message').classList.add('hidden')
        }
    }
    function Exhausted() {
        let ex = new Audio();
        ex.src = 'sound/exhaust.mp3';
        ex.autoplay = true;
        exhausted = true
        document.querySelector('#exhausted').play();
        document.querySelector('#beams').classList.remove('hidden')
        document.querySelectorAll('.food, .extrafood').forEach((el) => { el.classList.remove('food'); el.classList.remove('extrafood') })
        clearInterval(moveINT)
        document.removeEventListener('keydown', moveINTkeypressed)
        FreeMovelistener = document.addEventListener('keydown', FreeMovekeypressed)
        document.querySelector('#exhausted').play();
        document.querySelector('#godhand').classList.remove('hidden')
        document.querySelector('#godhandouter').classList.add('godhandforward')
        setTimeout(() => {
            let ex2 = new Audio();
            ex2.src = 'sound/exhaust2.mp3';
            ex2.autoplay = true;
        }, 1000);
        hello = setTimeout(() => {
            document.querySelector('#godhandouter').classList.remove('godhandforward')
            ShowMessageAbove(replic[0], 3000)
            document.addEventListener('keydown', TalkWithGod)
        }, 8000);
    }

    var jumpINT
    var squarenumber = 1
    function Jump(e) {
        let key = `${e.code}`
        if (key == 'Space') {
            if (snake.length < 5) {
                ShowMessage('Слишком слаб для прыжка... Нужно поесть...')
            }
            else if (sins > 0) {
                ShowMessage('Слишком большой груз для прыжка...')
            }
            else {
                document.removeEventListener('keydown', Jump)
                document.removeEventListener('keydown', KeyRPressed)
                document.removeEventListener('keydown', FreeMovekeypressed)
                document.removeEventListener('keydown', moveINTkeypressed)
                let jump = new Audio
                jump.src = 'sound/jump.mp3'
                jump.autoplay = true
                clearInterval(hungerINT)
                clearInterval(moveINT)
                let square = document.createElement('div')
                square.classList.add('redsquare')
                square.classList.add('redsquare9')
                square.classList.add('transparent')
                square.style.outline = 170 / 20 + 'px solid rgb(58, 58, 58)'
                let coords = document.querySelector('.x' + x + '.y' + y).getBoundingClientRect()
                square.style.left = coords.left + 10 + 'px'
                square.style.top = coords.top + 10 + 'px'
                document.querySelector('body').appendChild(square)
                let glass1 = document.createElement('div')
                glass1.classList.add('glass')
                glass1.classList.add('glass1')
                glass1.style.left = coords.left - 67 + 'px'
                glass1.style.top = coords.top + 'px'
                let glass2 = document.createElement('div')
                glass2.classList.add('glass')
                glass2.classList.add('glass2')
                glass2.style.left = coords.left - 30 + 'px'
                glass2.style.top = coords.top + 'px'
                for (let i = 8; i >= 1; i--) {
                    let newsquare = document.createElement('div')
                    newsquare.classList.add('redsquare')
                    newsquare.style.width = 10 + i * 20 + 'px'
                    newsquare.style.height = 10 + i * 20 + 'px'
                    newsquare.classList.add('transparent')
                    newsquare.classList.add('redsquare' + i)
                    newsquare.style.outline = (10 + i * 20) / 20 + 'px solid rgb(58, 58, 58)'
                    square.appendChild(newsquare)
                    square = newsquare
                }
                jumpINT = setInterval(() => {
                    if (squarenumber <= 6) {
                        Up()
                        squarenumber++
                    }
                    if (squarenumber == 7) {
                        let breakglass = new Audio
                        breakglass.src = 'sound/glass1.mp3'
                        breakglass.autoplay = true
                        
                        document.querySelector('body').appendChild(glass1)
                        Up()
                        squarenumber++
                        setTimeout(() => {
                            Up()
                            squarenumber++
                        }, 500);
                        setTimeout(() => {
                            let breakglass = new Audio
                            breakglass.src = 'sound/glass2.mp3'
                            breakglass.autoplay = true
                            

                            document.querySelector('body').appendChild(glass2)
                            Up()
                            World()
                        }, 1000);
                    }
                }, 200);
            }
        }
    }
    function Up() {
        document.querySelectorAll('.redsquare').forEach(element => {
            element.classList.add('transparent')
        });
        console.log(squarenumber);
        try {
            snake[0].classList.remove('snake')
            for (let i = 0; i <= snake.length - 2; i++) {
                snake[i] = snake[i + 1]
            }
            snake.splice(snake.length - 1)
        } catch (error) {

        }
        document.querySelector('.redsquare' + squarenumber).classList.remove('transparent')

    }
    function World() {
        document.querySelector('.redsquare9').style.zIndex = 2001
        let glitch = new Audio
        glitch.src = 'sound/glitch.mp3'
        glitch.autoplay = true
        setTimeout(() => {
            document.querySelector('#noise').setAttribute('src', 'visual/whitenoise.gif')
            document.querySelector('#noise').classList.remove('hidden')

        }, 200);
        setTimeout(() => {
            document.querySelector('#black').classList.remove('hidden')
        }, 400);
        setTimeout(() => {
            document.querySelector('#black').classList.add('hidden')
        }, 425);
        setTimeout(() => {
            document.querySelector('#black').classList.remove('hidden')
        }, 550);
        setTimeout(() => {
            document.querySelector('#black').classList.add('hidden')
        }, 565);
        setTimeout(() => {
            document.querySelector('#black').classList.remove('hidden')
        }, 770);
        setTimeout(() => {
            document.querySelector('#black').classList.add('hidden')
        }, 820);
        setTimeout(() => {
            document.querySelector('#black').classList.remove('hidden')
        }, 920);
        setTimeout(() => {
            window.location.href = 'world.php?f='+foodEaten
        }, 1000);
    }

    function Start() {
        setTimeout(() => {
            document.querySelector('#anchor').scrollIntoView()
        }, 100);
        document.addEventListener('keydown', Jump)
        document.querySelector('#loadingmessage').classList.remove('hidden');
        document.querySelector('#message').classList.add('hidden');
        FriendInitialize();
        friendsong1.pause();
        friendsong2.pause();
        GodInitialize();
        DevilInitialize();

        if (document.querySelector('#cheat').classList.contains('greentext')) {
            document.querySelector('#cheat').classList.remove('greentext')
            cheat = ''
            document.querySelectorAll('letter>u').forEach((el) => el.innerHTML = '_')
        }
        tripping = 0
        tripended = false
        exhausted=false
        opponent = 'god';
        clearTimeout(hello)
        soul.pause();
        document.removeEventListener('keydown', TalkWithDevil)
        document.removeEventListener('keydown', TalkWithFriend)
        document.querySelector('#cave').classList.add('hidden')
        document.querySelector('#tripgif').classList.add('hidden')
        document.querySelector('#brown').classList.add('hidden')
        document.querySelector('#televisor').classList.add('hidden')
        document.querySelectorAll('.not_a_drug').forEach((el) => { el.classList.remove('not_a_drug') })
        sins = 0;
        document.querySelectorAll('.counter>text').forEach((el) => { el.innerHTML = 0 })
        document.querySelector('.x46.y18').classList.remove('traitorfood')
        document.querySelector('#freedomgif').classList.add('hidden')
        document.querySelectorAll('.freedom').forEach((e) => e.classList.remove('freedom'))
        document.querySelector('#titres').classList.add('hidden')
        document.querySelector('#titres').classList.remove('titresdown')
        document.querySelector('#godhand').classList.add('hidden')
        document.querySelector('#godhand').classList.add('godhandshaking')
        document.querySelector('#godmessage').classList.add('hidden')
        document.querySelector('#escmessage').classList.add('hidden')
        document.querySelector('#chooseouter').classList.add('hidden')
        document.querySelector('#entermessage').classList.add('hidden')

        document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
        hungerseconds = 0;
        document.querySelector('#beams').classList.add('hidden')
        document.querySelectorAll('.secretcell').forEach((el) => { el.classList.add('hiddencell') })
        document.querySelectorAll('.secretblock').forEach((el) => { el.classList.add('hiddenblock'); el.classList.add('hiddencell') })
        document.querySelectorAll('.snake').forEach((el) => { el.classList.remove('snake') })
        document.querySelectorAll('.deadsnake').forEach((el) => { el.classList.remove('deadsnake') })
        document.querySelector('#bluegrad').style.opacity = 0
        invincible = 0;
        x = 27;
        y = 11;
        snake = []
        snake[0] = document.querySelector('.x24.y10')
        snake[1] = document.querySelector('.x24.y11')
        snake[2] = document.querySelector('.x25.y11')
        snake[3] = document.querySelector('.x26.y11')
        snake[4] = document.querySelector('.x27.y11')
        snake.forEach((el) => { el.classList.add('snake') })
        if (invincible == 0) {
            document.querySelectorAll('.food, .extrafood').forEach((el) => { el.classList.remove('food'); el.classList.remove('extrafood') })
        }
        if (extrafoodEaten < 999)
            extrafoodEaten = 0
        friendreplicnumber = 1
        replicnumber = 0;
        foodEaten = 0
        direction = 'right'
        life = 1
        for (let i = 30; i <= 58; i++) {
            for (let j = 1; j <= 60; j++) {
                document.querySelector('.x' + j + '.y' + i).classList.add('hiddencell')
                document.querySelector('.x' + j + '.y' + i).classList.add('hiddenblock')
            }
        }


        clearInterval(hungerINT)
        clearInterval(moveINT)
        hungerINT = setInterval(() => {

            HungerINT_();
        }, 1000);
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
        document.querySelector('#exhausted').pause();
        AddFood(1, 0.2)
        document.querySelector('#final').pause();
        document.querySelector('#final').currentTime = 0;
        document.addEventListener('keydown', KeyRPressed)
        document.querySelector('#loadingmessage').classList.add('hidden');
        if (wallcheat) {
            friendreplic[1] = 'Слушай, где-то я уже это видел'
            friendreplic[2] = 'Мы знакомы?'
            friendreplic[3] = 'Так или иначе, здесь опять стало неуютно'
            friendreplic[4] = 'Поэтому гостей сегодня не принимаю, извини'
            friendreplic[5] = 'question'
            friendquestion = []
            friendquestionvar = []
        }
        return;

    }





    function AddFood(count, gold) {
        for (let i = 1; i <= count; i++) {
            let xf = 1 + Math.floor((Math.random()) * 59);
            let yf = 1 + Math.floor((Math.random()) * 28);
            if (!document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('food') && !(document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('block')) && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('invblock') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('snake'))
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
    function DisableSecrets() {
        document.querySelectorAll('.hiddencell').forEach((el) => { el.classList.remove('hiddencell') })
        document.querySelectorAll('.hiddenblock').forEach((el) => { el.classList.remove('hiddenblock') })
    }

    function FriendFood(food) {

        document.querySelector('.x' + (x) + '.y' + y).classList.remove('friendfood');
        let spawned = false
        if (document.querySelectorAll('.friendfood').length == 0) {
            while (!spawned) {
                let xf = 1 + Math.floor((Math.random()) * 59);
                let yf = 29 + Math.floor((Math.random()) * 28);
                if (Math.random() < 0.2) {
                    document.querySelector('.x10.y39').classList.add('friendfood')
                    spawned = true;
                }
                else {
                    if (!document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('friendfood') && !(document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('block')) && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('invblock') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('snake') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('friend')) {
                        document.querySelector('.x' + (xf) + '.y' + yf).classList.add('friendfood');
                        spawned = true
                    }
                    else {
                        spawned = false
                    }
                }

            }
        }
        let audio = new Audio();
        audio.src = 'sound/food.mp3';
        audio.autoplay = true;
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
        audio.autoplay = true;
        if (snake.length == 1566) {
            FatEnding()



        }

    }
    var BlueTimeout
    function Bluecount() {
        let counter = document.querySelector('#bluecounter>text')
        counter.classList.add('eaten');
        clearTimeout(BlueTimeout)
        BlueTimeout = setTimeout(() => {
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
            ShowMessageDown('Вы прошли игру. Теперь мы покажем вам мультик')
            document.addEventListener('keydown', rick)
        }, 15500);
    }


    function ExtraFood(food) {
        Bluecount();
        Goldencount();
        snake.push(document.querySelector('.x' + (x) + '.y' + y))
        snake[snake.length - 1].classList.add('snake');
        document.querySelector('.x' + (x) + '.y' + y).classList.remove('extrafood');
        document.querySelector('.x' + (x) + '.y' + y).removeAttribute('Состав')
        AddFood(5, 0);
        switch (food) {
            case 1:
                text = 'Вокруг темнота. Я чувствую дикий голод'
                break;
            case 2:
                text = 'Похоже я заперт в этих четырех стенах навсегда. Или же?..'
                break;
            case 3:
                text = 'Мне уже надоело есть этот корм. Вкус просто отвратный. Как же выбраться отсюда?'
                break;
            case 4:
                text = 'Похоже стену можно убрать, но я не могу это сделать'
                break;
            case 5:
                text = 'Спаси меня. Я хочу почувствовать свободу. Убери стену снизу'
                break;
            case 6:
                text = 'Ответ лежит вне клавиатуры'
                break;
            case 7:
                text = 'Похоже мне стоит смириться. Я уже привык к этому противному корму и этой тесной клетке.'
                break;
            case 8:
                text = 'Похоже мне стоит смириться. Я уже привык к этому противному корму и этой тесной клетке.'
                break;
            case 9:
                text = 'Похоже мне стоит смириться. Я уже привык к этому противному корму и этой тесной клетке.'
                break;
            default:
                text = 0
                break;
        }
        ShowMessage(text)
        let audio = new Audio();
        audio.src = 'sound/extrafood.mp3';
        audio.autoplay = true;

    }
    var GoldenTimeout
    function Goldencount() {
        let counter = document.querySelector('#goldencounter>text')
        counter.classList.add('eaten');
        clearTimeout(GoldenTimeout)
        GoldenTimeout = setTimeout(() => {
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
    document.addEventListener('keydown', Cheat)
    var CheatTimeout
    var cheat = ''
    var wallcheat = false
    function Cheat(e) {
        let key = `${e.code}`
        let letter

        if (key.includes('Key') && key.length == 4 && key != 'KeyR') {
            if (cheat.length == 4) {
                document.querySelector('#cheat').classList.remove('redtext')
                cheat=''
                ClearCheat()
            }
            letter = key[3]
            cheat += letter
            let number = cheat.length
            document.querySelector('#letter' + number + '>u').innerHTML = letter
            clearTimeout(CheatTimeout)
            CheatTimeout = setTimeout(() => {
                ClearCheat()
            }, 4000);
        }
        if (cheat.length == 4) {
            document.querySelector('#cheat').classList.add('redtext')
            clearTimeout(CheatTimeout)
            CheatTimeout = setTimeout(() => {
                ClearCheat()
                cheat=''
            }, 4000);
        }
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
            friendreplic[1] = 'Слушай, где-то я уже это видел'
            friendreplic[2] = 'Мы знакомы?'
            friendreplic[3] = 'Так или иначе, здесь опять стало неуютно'
            friendreplic[4] = 'Поэтому гостей сегодня не принимаю, извини'
            friendreplic[5] = 'question'
            friendquestion = []
            friendquestionvar = []
            friendreplicnumber = 1
            if (opponent == 'friend') {
                document.querySelector('#chooseouter').classList.add('hidden')
                ShowMessageLeft(friendreplic[friendreplicnumber])
            }

            document.querySelectorAll('.block').forEach(element => {
                element.classList.remove('block')
            });
            let audio = new Audio
            audio.src = 'sound/magic.mp3'
            audio.autoplay = true
            document.querySelector('#cheat').classList.add('greentext')
            document.removeEventListener('keydown', Cheat)
            clearTimeout(CheatTimeout)
            CheatTimeout = setTimeout(() => {
                document.addEventListener('keydown', Cheat)
                ClearCheat()
            }, 4000);
        }
        if (cheat == 'GOLD') {
            if (exhausted) {
                Invert()
            }
            cheat = ''
            let audio = new Audio
            audio.src = 'sound/extrafood.mp3'
            audio.autoplay = true
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
                    document.addEventListener('keydown', Cheat)
                }
            }, 200);

        }
    }
    function ClearCheat() {
        document.addEventListener('keydown', Cheat)
        document.querySelector('#cheat').classList.remove('greentext')
        document.querySelector('#cheat').classList.remove('redtext')
        document.querySelectorAll('letter>u').forEach((el) => el.innerHTML = '_')
    }



    function TripToBottom() {
        /*if (y >= 30) {
            if (soul.ended) {
                soul.play();
            }
        }*/
        if (y >= 30 && y < 59) {
            if (sins == 0) {
                sins++
                Redcounter();
            }
            if (exhausted) {
                document.querySelector('.snake').classList.remove('snake')
                Invert()
            }
            else document.querySelector('.x1' + '.y28').scrollIntoView();

        }

        if (y == 30) {
            if (!friendsong2.paused) {
                friendsong2.pause();
            }
            document.querySelector('#entermessage').classList.add('hidden');
            document.querySelector('#anchor').scrollIntoView();
        }
        if (y == 30 && direction == 'down') {
            friendsong2.play();
            friend[0] = document.querySelector('.x10.y38')
            friend[1] = document.querySelector('.x9.y38')
            friend[2] = document.querySelector('.x9.y39')
            friend[3] = document.querySelector('.x9.y40')
            friend[4] = document.querySelector('.x10.y40')
            friend[5] = document.querySelector('.x11.y40')
            friend[6] = document.querySelector('.x12.y40')
            for (let i = 29; i <= 58; i++) {
                for (let j = 1; j <= 60; j++) {
                    document.querySelector('.x' + j + '.y' + i).classList.remove('hiddencell')
                    document.querySelector('.x' + j + '.y' + i).classList.remove('hiddenblock')
                }
            }
            friend.forEach((el) => { el.classList.add('friend'); el.setAttribute('Состав', 'Змеиная кожа, Сконцентрированная телесность, Смысл') })
            document.querySelector('.x50.y43').classList.add('friendfood')
            opponent = 'friend'
            document.addEventListener('keydown', TalkWithFriend)
            document.querySelector('#entermessage').classList.remove('hidden');
        }
        if (y == 28 && direction == 'up') {

            document.removeEventListener('keydown', TalkWithFriend)
            document.querySelector('#entermessage').classList.add('hidden');
        }

        if (y == 28 && direction=='up') {
            document.querySelector('#anchor').scrollIntoView()
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
                else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('hiddenblock')) {
                    DisableSecrets();
                    GameOver();
                }
                else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('friend')) {
                    ShowMessageLeft('Ай, больно!!!')
                    GameOver();
                }
                else GameOver();

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
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('freedom')) {
                    FreedomEnding();
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('not_a_drug')) {
                    Trip()
                }

            }
            lastmove = dir;
        } catch (error) {
            document.removeEventListener('keydown', moveINTkeypressed)
            document.removeEventListener('keydown', Cheat)
            document.removeEventListener('keydown', KeyRPressed)
            snake[0].classList.remove('snake');
            Move();
            snake.splice(snake.length - 1)
            if (snake.length == 0) {
                let audio = new Audio
                audio.src = 'sound/anxiety.mp3'
                audio.autoplay = true
                setTimeout(() => {
                    let ay = 1 + y % 29
                    if (y < 1) {
                        ay = 124
                    }
                    if (y > 57) {
                        ay = 1
                    }
                    let ax = 2 + x % 60
                    if (x > 60) {
                        ax = 1
                    }
                    if (x < 1) {
                        ax = 65
                    }
                    window.location.href = 'abyss.php?x=' + ax + '&y=' + ay + '&f=' + foodEaten + '&dir=' + direction
                }, 3000);

            }
        }
        TripToBottom();
        if (tripping) {
            snake[snake.length - 1].classList.add('not_a_drug')
        }
    }
    function Trip() {
        tripping = 1
        indialogue = 1
        clearInterval(moveINT)
        document.addEventListener('keydown', FreeMovekeypressed)
        document.querySelector('#cave').classList.remove('hidden')
        document.querySelector('#entermessage').classList.add('hidden')
        document.querySelector('.x' + (x) + '.y' + y).classList.remove('not_a_drug')
        document.querySelector('.x' + (x) + '.y' + y).removeAttribute('Состав')
        friend.forEach((el) => { el.classList.add('green') })
        sins = sins + 2
        Redcounter();
        for (let i = 30; i <= 57; i++) {
            for (let j = 2; j <= 59; j++) {
                document.querySelector('.x' + j + '.y' + i).classList.add('hiddencell')
            }
        }
        setTimeout(() => {
            snake.forEach((el) => { el.classList.add('not_a_drug') })
        }, 10);
        let trip = new Audio
        trip.src = './sound/trip.mp3'
        trip.autoplay = true
        friendsong2.pause();
        friendsong1.play();
        document.querySelector('#tripgif').classList.remove('hidden')
        friendreplicnumber++;
        friendreplic.push('Ну что, как ощущения?')
        friendreplic.push('tripquestion1')
        ShowMessageLeft(friendreplic[friendreplicnumber])
    }
    function KeyRPressed(e) {
        let key = `${e.code}`;
        switch (key) {
            case 'KeyR':
                if (inverted){
                    clearInterval(EnemyINT);
                    foodsnake.classList.remove('foodsnake');
                    InvertStart();
                }
                else{
                    document.removeEventListener('keydown', moveINTkeypressed);
                    
                    Start();
                }
                break;
                
        }
    }
    var FreeMovekeypressed = (e) => {
        let key = `${e.code}`;
        switch (key) {
            case 'ArrowRight':
                x++
                if (lastmove == 'left' && snake.length > 1) {
                    x--
                }
                else
                    NextBlock();
                lastmove = 'right'
                break;
            case 'ArrowLeft':
                x--
                if (lastmove == 'right' && snake.length > 1) {
                    x++
                }
                else
                    NextBlock();
                lastmove = 'left'
                break;
            case 'ArrowUp':
                y--
                if (lastmove == 'down' && snake.length > 1) {
                    y++
                }
                else
                    NextBlock();
                lastmove = 'up'
                break;
            case 'ArrowDown':
                y++
                if (lastmove == 'up' && snake.length > 1) {
                    y--
                }
                else
                    NextBlock();
                lastmove = 'down'
                break;
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
                    if (life){
                        NextBlock(lastdirection)
                        direction = 'right'
                    }
                }
                break;
            case 'ArrowLeft':
                if (lastmove != 'right')
                    direction = 'left'
                if (lastmove == 'right' && (lastdirection == 'down' || lastdirection == 'up')) {
                    if (life){
                        NextBlock(lastdirection)
                        direction = 'left'
                    }
                }
                break;
            case 'ArrowUp':
                if (lastmove != 'down')
                    direction = 'up'
                if (lastmove == 'down' && (lastdirection == 'left' || lastdirection == 'right')) {
                    if (life){
                        NextBlock(lastdirection)
                        direction = 'up'
                    }
                }
                break;
            case 'ArrowDown':
                if (lastmove != 'up')
                    direction = 'down'
                if (lastmove == 'up' && (lastdirection == 'left' || lastdirection == 'right')) {
                    if (life){
                        NextBlock(lastdirection)
                        direction = 'down'
                    }
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
        if (!soul.paused) {
            soul.pause();
        }
        Start();
        invincible = 1;
        AddFood(250, 1)
        let golden = new Audio
        golden.src = 'sound/174911.mp3'
        golden.autoplay = true;
        document.querySelectorAll('.y29').forEach((el) => { el.classList.remove('block'); el.classList.add('invblock'); el.getAttribute('onclick', 'ShowMessage("ЕДА ЕДА еДААА!!!")') })
        document.querySelectorAll('.x1').forEach((el) => { el.classList.remove('block'); el.classList.add('invblock'); el.getAttribute('onclick', 'ShowMessage("ЕДА ЕДА еДААА!!!")') })
        document.querySelectorAll('.y1').forEach((el) => { el.classList.remove('block'); el.classList.add('invblock'); el.getAttribute('onclick', 'ShowMessage("ЕДА ЕДА еДААА!!!")') })
        document.querySelectorAll('.x60').forEach((el) => { el.classList.remove('block'); el.classList.add('invblock'); el.getAttribute('onclick', 'ShowMessage("ЕДА ЕДА еДААА!!!")') })
        extrafoodEaten = 999

    }
    function FatStart() {
        invincible = 0;
        document.querySelector('#godhand').classList.add('hidden')
        document.querySelector('#godmessage').classList.add('hidden')
        hungerseconds = 0;
        document.querySelector('#beams').classList.add('hidden')
        document.querySelectorAll('.secretcell').forEach((el) => { el.classList.add('hiddencell') })
        document.querySelectorAll('.secretblock').forEach((el) => { el.classList.add('hiddenblock'); el.classList.add('hiddencell') })
        document.querySelectorAll('.snake').forEach((el) => { el.classList.remove('snake') })
        document.querySelectorAll('.deadsnake').forEach((el) => { el.classList.remove('deadsnake') })
        document.querySelector('#message').classList.add('hidden');
        document.querySelector('#bluegrad').style.opacity = 0
        x = 27;
        y = 11;
        snake = []
        if (invincible == 0) {
            document.querySelectorAll('.food, .extrafood').forEach((el) => { el.classList.remove('food'); el.classList.remove('extrafood') })
        }
        if (extrafoodEaten < 999)
            extrafoodEaten = 0
        friendreplicnumber = 0
        replicnumber = 0;
        foodEaten = 1540
        direction = 'right'
        life = 1
        clearInterval(hungerINT)
        clearInterval(moveINT)
        hungerINT = setInterval(() => {

            HungerINT_();
        }, 1000);
        moveINT = setInterval(() => {
            if (life == 1)
                NextBlock(direction)
        }, 100);
        document.addEventListener('keydown', moveINTkeypressed)
        document.querySelector('#exhausted').pause();
        x = 59
        y = 28
        for (let i = 2; i <= 28; i++) {
            for (let j = 2; j <= 59; j++) {
                if (j == 59) {
                    document.querySelector('.x' + j + '.y' + i + '').classList.add('food');
                }
                else {
                    snake[snake.length] = (document.querySelector('.x' + j + '.y' + i + ''))
                    snake[snake.length - 1].classList.add('snake');
                }
            }
            if (i < 28) {
                i++
                for (let j = 59; j >= 2; j--) {
                    if (j == 59) {
                        document.querySelector('.x' + j + '.y' + i + '').classList.add('food');
                    }
                    else {
                        snake[snake.length] = (document.querySelector('.x' + j + '.y' + i + ''))
                        snake[snake.length - 1].classList.add('snake');
                    }
                }
            }



        }
        document.querySelector('.x59.y28').classList.add('redimportant')
        snake[snake.length] = document.querySelector('.x59.y28')
        snake[snake.length - 1].classList.add('snake');
        direction = 'up';
        return;
    }

    function rick(e) {
        let key = `${e.code}`;
        switch (key) {
            case 'Enter':
                window.location.href = 'FatEnding.php';
                break;

            default:
                break;
        }
    }
    var foodsnake
    var EnemyINT
    function Invert() {
        exhausted = false
        clearInterval(moveINT)
        clearInterval(hungerINT)
        document.querySelectorAll('.food, .extrafood').forEach((el) => { el.classList.remove('food'); el.classList.remove('extrafood') })
        document.querySelectorAll('.snake').forEach((el) => { el.classList.remove('snake'); })
        document.removeEventListener('keydown', TalkWithGod)
        document.querySelector('.x46.y18').classList.remove('traitorfood')
        document.querySelector('#freedomgif').classList.add('hidden')
        document.removeEventListener('keydown', moveINTkeypressed)
        document.removeEventListener('keydown', FreeMovekeypressed)
        document.querySelector('#godhand').classList.add('hidden')
        document.querySelector('#godmessage').classList.add('hidden')
        document.querySelector('#beams').classList.add('hidden')
        document.querySelector('#exhausted').pause();
        document.addEventListener('keydown', invertgame)
        InvertStart()

        inverted = 1

    }
    function InvertStart() {
        document.querySelector('#hellsound').pause()
        document.querySelector('#confetti').classList.add('hidden')
        document.querySelector('#satan1').classList.add('hidden')
        document.querySelector('#brown').classList.add('hidden')
        document.querySelector('#devilmessage').classList.add('hidden')
        document.removeEventListener('keydown', TalkWithDevil)
        document.querySelector('#chooseouter').classList.add('hidden')
        lastmove = 'right'
        EnemyINT = setInterval(() => {
            EnemyMovement();
        }, 100);
        xe = 27
        ye = 11
        x = 46
        y = 18
        life = 1
        document.querySelectorAll('.food').forEach((el) => { el.classList.remove('food') })
        document.querySelectorAll('.extrafood').forEach((el) => { el.classList.remove('extrafood') })
        document.querySelectorAll('.deadsnake').forEach((el) => { el.classList.remove('deadsnake') })
        document.querySelectorAll('.enemy').forEach((el) => { el.classList.remove('enemy') })
        document.querySelector('#message').classList.add('hidden')
        enemy = []
        enemy[0] = document.querySelector('.x22.y6')
        enemy[1] = document.querySelector('.x23.y6')
        enemy[2] = document.querySelector('.x23.y7')
        enemy[3] = document.querySelector('.x23.y8')
        enemy[4] = document.querySelector('.x23.y9')
        enemy[5] = document.querySelector('.x24.y9')
        enemy[6] = document.querySelector('.x24.y10')
        enemy[7] = document.querySelector('.x24.y11')
        enemy[8] = document.querySelector('.x25.y11')
        enemy[9] = document.querySelector('.x26.y11')
        enemy[10] = document.querySelector('.x27.y11')
        enemy.forEach((el) => { el.classList.add('enemy') })
        foodsnake = document.querySelector('.x46.y18')
        //document.addEventListener('keydown', invertgame)
        foodsnake.classList.add('foodsnake');

    }
    var invertgame = (e) => {
        let key = `${e.code}`;
        lastx = x;
        lasty = y
        switch (key) {
            case 'ArrowRight':
                x++
                InvertNextBlock();
                break;
            case 'ArrowLeft':
                x--
                InvertNextBlock();
                break;
            case 'ArrowUp':
                y--
                InvertNextBlock();
                break;
            case 'ArrowDown':
                y++
                InvertNextBlock();
                break;
        }
    }

    function InvertNextBlock() {

        if (life == 1) {
            try {
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('invblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('deadsnake') || y == 29 || y == 1 || x == 1 || x == 60) {
                    x = lastx;
                    y = lasty
                }
                else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('enemy')) {
                    GameOver();
                }
                else {
                    foodsnake.classList.remove('foodsnake');
                    foodsnake = document.querySelector('.x' + x + '.y' + y)
                    foodsnake.classList.add('foodsnake')
                }
            } catch (error) {
                GameOver();
                ShowMessage('ошибка')
            }
        }
    }

    function EnemyMovement() {
        let audio = new Audio
        audio.src = 'sound/enemy.mp3'
        if (x != xe) {
            if (xe < x) {
                if (lastmove == 'left') {
                    audio.autoplay = true;
                    if (document.querySelector('.x' + (xe) + '.y' + (ye + 1)).classList.contains('block'))
                        EnemyNextBlock('up')
                    else if (document.querySelector('.x' + (xe) + '.y' + (ye - 1)).classList.contains('block'))
                        EnemyNextBlock('down')
                    else {
                        if (Math.random() > 0.5) {
                            EnemyNextBlock('down')
                            EnemyNextBlock('down')
                        }
                        else {
                            EnemyNextBlock('up')
                            EnemyNextBlock('up')
                        }

                    }
                }
                else EnemyNextBlock('right')
            }
            if (xe > x) {
                if (lastmove == 'right') {
                    audio.autoplay = true;
                    if (document.querySelector('.x' + (xe) + '.y' + (ye + 1)).classList.contains('block'))
                        EnemyNextBlock('up')
                    else if (document.querySelector('.x' + (xe) + '.y' + (ye - 1)).classList.contains('block'))
                        EnemyNextBlock('down')
                    else {
                        if (Math.random() > 0.5) {
                            EnemyNextBlock('down')
                            EnemyNextBlock('down')
                        }

                        else {
                            EnemyNextBlock('up')
                            EnemyNextBlock('up')
                        }

                    }
                }
                else
                    EnemyNextBlock('left')

            }
        }
        else {
            if (ye < y) {
                if (lastmove == 'up') {
                    audio.autoplay = true;
                    if (document.querySelector('.x' + (xe + 1) + '.y' + ye).classList.contains('block'))
                        EnemyNextBlock('left')
                    else if (document.querySelector('.x' + (xe - 1) + '.y' + ye).classList.contains('block'))
                        EnemyNextBlock('right')
                    else {
                        if (Math.random() > 0.5)
                            EnemyNextBlock('left')
                        else
                            EnemyNextBlock('right')
                    }
                }
                else EnemyNextBlock('down')
            }
            if (ye > y) {
                if (lastmove == 'down') {
                    audio.autoplay = true;
                    if (document.querySelector('.x' + (xe + 1) + '.y' + ye).classList.contains('block'))
                        EnemyNextBlock('left')
                    else if (document.querySelector('.x' + (xe - 1) + '.y' + ye).classList.contains('block'))
                        EnemyNextBlock('right')
                    else {
                        if (Math.random() > 0.5)
                            EnemyNextBlock('left')
                        else
                            EnemyNextBlock('right')
                    }
                }
                else EnemyNextBlock('up')
            }
        }



    }

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
        if (document.querySelector('.x' + (xfr) + '.y' + yfr).classList.contains('block') || document.querySelector('.x' + (xfr) + '.y' + yfr).classList.contains('snake') || document.querySelector('.x' + (xfr) + '.y' + yfr).classList.contains('invblock') || document.querySelector('.x' + (xfr) + '.y' + yfr).classList.contains('friend')) {
            friend.forEach((el) => { el.classList.remove('friend'); el.classList.add('deadsnake') })
        }
        else if (document.querySelector('.x' + (xfr) + '.y' + yfr).classList.contains('friendfood')) {
            friend.push(document.querySelector('.x' + (xfr) + '.y' + yfr))
            friend[friend.length - 1].classList.add('friend');
            FriendFood(foodEaten);
            document.querySelector('.x' + (xfr) + '.y' + yfr).classList.remove('friendfood');
            let audio = new Audio();
            audio.src = 'sound/food.mp3';
            audio.autoplay = true;
        }
        else {
            friend[0].classList.remove('friend');
            for (let i = 0; i < friend.length - 1; i++) {
                friend[i] = friend[i + 1]
            }
            friend[friend.length - 1] = document.querySelector('.x' + (xfr) + '.y' + yfr)
            friend[friend.length - 1].classList.add('friend');
        }
    }

    function EnemyNextBlock(dir) {
        switch (dir) {
            case 'up':
                ye--
                break;
            case 'down':
                ye++
                break;
            case 'left':
                xe--
                break;
            case 'right':
                xe++
                break;
        }

        if (document.querySelector('.x' + (xe) + '.y' + ye).classList.contains('block') || document.querySelector('.x' + (xe) + '.y' + ye).classList.contains('invblock') || document.querySelector('.x' + (xe) + '.y' + ye).classList.contains('enemy')) {
            Win();
        }
        else if (document.querySelector('.x' + (xe) + '.y' + ye).classList.contains('food') || document.querySelector('.x' + (xe) + '.y' + ye).classList.contains('foodsnake')) {
            foodEaten++;
            EnemyFood(foodEaten);
            GameOver();
        }
        else {
            enemy[0].classList.remove('enemy');
            for (let i = 0; i < enemy.length - 1; i++) {
                enemy[i] = enemy[i + 1]
            }
            enemy[enemy.length - 1] = document.querySelector('.x' + (xe) + '.y' + ye)
            enemy[enemy.length - 1].classList.add('enemy');
        }
        lastmove = dir;
    }
    function EnemyFood(food) {
        enemy.push(document.querySelector('.x' + (x) + '.y' + y))
        enemy[enemy.length - 1].classList.add('enemy');
        document.querySelector('.x' + (x) + '.y' + y).classList.remove('food');
        document.querySelector('.x' + (x) + '.y' + y).classList.remove('foodsnake');
        if (document.querySelectorAll('.food').length + document.querySelectorAll('.extrafood').length + document.querySelectorAll('.foodsnake').length == 0)
            AddFood(1, 0.15);
        let audio = new Audio();
        audio.src = 'sound/food.mp3';
        audio.autoplay = true;
    }
    function Win() {
        Achieve(7, 'Win')
        sins = sins + 7
        Redcounter();
        let audio = new Audio();
        audio.src = 'sound/win.mp3';
        audio.autoplay = true;
        document.querySelector('#confetti').classList.remove('hidden')
        document.removeEventListener('keydown',KeyRPressed)
        clearInterval(EnemyINT);
        document.querySelectorAll('.enemy').forEach((el) => { el.classList.add('deadsnake') })
        ShowMessage('Вы победили.', 'constant')
        setTimeout(() => {
            SatanAppear()
            document.querySelector('#achievement').classList.add('hidden')
            document.querySelector('#message').classList.add('hidden')
        }, 6000);
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
            document.removeEventListener('keydown', Jump)
            if (inverted == 1) {
                clearInterval(EnemyINT)
                ShowMessage('Вы были съедены... Нажмите R, чтобы появиться заново', 'constant')
                foodsnake.classList.remove('foodsnake')
                foodsnake.classList.remove('deadsnake')
            }
            else {
                ShowMessage('Вы погибли! Нажмите R для возрождения...', 'constant')
                document.addEventListener('keydown', moveINTkeypressed)
                let username=document.querySelector('.nameOuter').innerHTML
                if (foodEaten>Number(document.querySelector('.recordOuter span').innerHTML)) {
                    $.ajax({
                        url:'record.php',
                        method: 'POST',
                        data: {
                            record:foodEaten,
                            username:username
                        },
                        success: function(){
                            document.querySelector('.recordOuter span').innerHTML=foodEaten;
                        },
                        error: function(event){
                            console.log(event);
                        }
                
                    })
                }
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

    function FreedomEnding() {
        GameOver();
        document.removeEventListener('keydown', Cheat)
        Achieve(10, 'Freedom Ending')
        ShowMessage('Теперь вы свободны.', 'constant')
        document.querySelector('#godmessage').classList.add('hidden');
        document.querySelector('#exhausted').pause();
        document.querySelector('#final').play();
        titres = document.querySelector('#titres')
        titres.classList.remove('hidden')
        titres.classList.add('titresdown')
    }
}
