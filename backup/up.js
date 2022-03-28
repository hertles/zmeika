var replic = []
var replicnumber
var question = []



function ShowMessageAbove(text) {
    document.querySelector('#godmessage').classList.add('hidden');
    document.querySelector('#godmessage').classList.remove('hidden')
    document.querySelector('#godmessage>text').innerHTML = text;

}

var questionvar = []
function GodInitialize(){
    questionvar=[]
    question = []
    replic = []
    questionvar[0] = [
        'Я - часть нашего мира, даже существование которой трудно объяснить.',
        'Ее трудно помыслить ибо то, что мыслит и есть Я.',
        'Ведь мыслить вовне может каждый, мыслить внутрь - все равно что блуждание в лабиринте без выхода.',
        'Ты мог подумать, что Я - это бог, но нет. Я - это ты.',
        'continue'
    ]
    questionvar[1] = [
        'Ты - это человек, сидящий за ноутбуком и играющий в змейку в браузере.',
        'Твой IP-адрес: 178.66.159.66.',
        'Ты сидишь с браузера: Opera.',
        'Твоя операционная система: Windows',
        'Не удивляйся, Я знаю о тебе все.',
        'Хотя я еще не видел твою историю браузера...',
        '*проверяет историю браузера*',
        'Лучше бы не знал.',
        'continue'
    ]
    questionvar[2] = [
        'Есть.',
        'Все зависит от того, как ты сам определяешь для себя свободу.',
        'Например, ты можешь перейти в мир, где вместо двух - три измерения.',
        'Для этого достаточно просто прыгнуть.',
        'Либо же... отсюда недалеко есть переход в Бездну.',
        'Какой бы из этих способов ты не выбрал, тебя будет ограничивать твое тело.',
        'Ты станешь свободнее, но не будешь свободным.',
        'continue'
    ]
    questionvar[3] = [
        'Корм сделан из сконцентрированной телесности.',
        'Для его создания рутина замешивается с равнодушием.',
        'Коптится 30 минут на душном огне.',
        'И сохнет на открытом воздухе, пока не дойдет до кондиции комфорта.',
        'continue'
    ]
    replic[0] = 'Здравствуй.'
    replic[1] = 'Вижу, ты хочешь стать свободным...'
    replic[2] = 'Возможно, мне придется, тебя огорчить, но единственный способ стать по-настоящему свободным - '
    replic[3] = 'это освободиться от своей телесной оболочки.'
    replic[4] = 'Я готов тебе помочь стать тем, кем ты хочешь.'
    replic[5] = 'Перед освобождением ты можешь задать мне один вопрос.'
    replic[6] = 'question'
    question[0] = 'Кто ты?'
    question[1] = 'Кто я?'
    question[2] = 'Есть ли другие способ стать свободным?'
    question[3] = 'Из чего сделан мой корм?'
}





var hungerINT;
var moveINT;
var hungerseconds;





function TalkWithGod(e) {
    if (replic[replicnumber] == 'Готов?') {
        document.querySelector('#freedomgif').classList.remove('hidden')
        document.querySelector('.x46.y18').classList.add('traitorfood')
        document.querySelector('.x24.y8').classList.add('freedom')
        document.querySelector('.x24.y9').classList.add('freedom')
        document.querySelector('.x24.y10').classList.add('freedom')
        document.querySelector('.x24.y11').classList.add('freedom')
        document.querySelector('.x24.y12').classList.add('freedom')
        document.querySelector('.x18.y13').classList.add('freedom')
        document.querySelector('.x19.y13').classList.add('freedom')
        document.querySelector('.x20.y13').classList.add('freedom')
        document.querySelector('.x21.y13').classList.add('freedom')
        document.querySelector('.x22.y13').classList.add('freedom')
        document.querySelector('.x23.y13').classList.add('freedom')
        document.querySelector('.x23.y13').classList.add('freedom')
        document.querySelector('.x23.y13').classList.add('freedom')
        document.querySelector('.x23.y13').classList.add('freedom')
        document.querySelector('.x20.y14').classList.add('freedom')
        document.querySelector('.x21.y14').classList.add('freedom')
        document.querySelector('.x22.y14').classList.add('freedom')
        document.querySelector('.x19.y7').classList.add('freedom')
        document.querySelector('.x20.y7').classList.add('freedom')
        document.querySelector('.x21.y7').classList.add('freedom')
        document.querySelector('.x22.y7').classList.add('freedom')
        document.querySelector('.x23.y7').classList.add('freedom')
        document.querySelector('.x18.y8').classList.add('freedom')
        document.querySelector('.x18.y9').classList.add('freedom')
        document.querySelector('.x18.y10').classList.add('freedom')
        document.querySelector('.x18.y11').classList.add('freedom')
        document.querySelector('.x18.y12').classList.add('freedom')
        document.querySelector('.x18.y13').classList.add('freedom')
        document.querySelector('#godhand').classList.remove('godhandshaking')
    }
    else if (replic[replicnumber] != 'question' && replic[replicnumber] != 'end') {
        let key = `${e.code}`;
        switch (key) {
            case 'Enter':
                replicnumber++;
                break;

            default:
                return;
                break;
        }
        ShowMessageAbove(replic[replicnumber])
    }
    if (replic[replicnumber + 1] == 'continue') {
        replic[replicnumber + 1] = 'Что ж, теперь нам пора в путь.'
        replic[replicnumber + 2] = 'Готов?'
    }

    if (replic[replicnumber] == 'question') {
        Choose(question, 'questionvar')
        document.querySelector('#godmessage').classList.add('hidden');
        document.querySelector('#chooseouter').classList.remove('hidden');
    }
}