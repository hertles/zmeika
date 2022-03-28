var cell
var dishspawned
var fearspawned
var deathspawned
var xportal = []
var yportal = []
var magic = false
var indialogue = false
var portals = false
function CountElements(mas, string) {
    let count = 0
    mas.forEach(el => {
        if (el == string) {
            count++
        }
    });
    return count
}
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
function Portal(elem, color) {
    if (!(elem.classList.contains('block') || elem.classList.contains('snake') || elem.classList.contains('kitchenblock') || elem.classList.contains('cat') || elem.classList.contains('ice'))) {
        document.querySelectorAll('td').forEach((el) => el.classList.remove(color + 'portal'))
        elem.classList.add(color + 'portal')
        str = ('' + elem.classList).toString()
        if (xportal['red'] == null && xportal['blue'] == null) {
            xportal['red'] = (str.substr((str.indexOf('x') + 1), str.indexOf('y') - 2)).trim()
            yportal['red'] = (str.substr((str.indexOf('y') + 1), (str.indexOf(' ') - 1))).trim()
            xportal['blue'] = xportal['red']
            yportal['blue'] = yportal['red']
        }
        xportal[color] = (str.substr((str.indexOf('x') + 1), str.indexOf('y') - 2)).trim()
        yportal[color] = (str.substr((str.indexOf('y') + 1), (str.indexOf(' ') - 1))).trim()

        let audio = new Audio();
        audio.src = 'sound/' + color + 'portal.mp3';
        audio.autoplay = true;

    }
    if (elem.classList.contains('ice')){
        elem.classList.remove('ice')
        let ice = new Audio();
        ice.src = 'sound/ice.mp3';
        ice.autoplay = true;
    }

}
class Food {
    constructor(name) {
        this.name = name
        this.ing = []
        this.cook = []
        this.parameters = {
            'blur': 0,
            'hurt': 0,
            'green': 0,
            'yellow': 0,
            'purple': 0,
            'catfood': 0,
            'fear': 0,
            'freeze': 0,
            'firespawn': 0,
            'thoughts': 0,
            'death': 0,
            'nothing': 0,
            'poison': 0,
            'portals': 0,
            'magic': 0,
            'sounds': 0,
            'food': 0,
            'extrafood': 0,
            'not_a_drug': 0
        }
    }
    Add(ingredient) {
        this.ing.push(ingredient)
        switch (ingredient) {
            case 'Змеиная кожа':
                this.parameters['green'] += 0.5
                this.parameters['portals'] += 0.5
                break;
            case 'Рутина':
                this.parameters['blur'] += 0.4
                this.parameters['poison'] += 0.3
                break;
            case 'Боль':
                this.parameters['hurt'] += 0.5
                this.parameters['green'] += 0.5
                break;
            case 'Равнодушие':
                this.parameters['blur'] += 0.3
                this.parameters['green'] += 0.5
                this.parameters['poison'] += 0.2
                break;
            case 'Радость':
                this.parameters['yellow'] += 0.5
                this.parameters['catfood'] += 0.5
                this.parameters['magic'] += 0.5
                break;
            case 'Черный кофе':
                this.parameters['yellow'] += 0.5
                this.parameters['thoughts'] += 0.3
                this.parameters['portals'] += 0.5
                break;
            case 'Густая красная жидкость':
                this.parameters['hurt'] += 0.5
                this.parameters['purple'] += 0.5
                break;
            case 'Вино':
                this.parameters['purple'] += 0.5
                this.parameters['sounds'] += 0.5
                this.parameters['poison'] += 0.3
                break;
            case 'Любовь':
                this.parameters['catfood'] += 0.5
                this.parameters['thoughts'] += 0.5
                break;
            case 'Страх':
                this.parameters['fear'] += 0.5
                this.parameters['poison'] += 0.3
                this.parameters['portals'] += 0.5
                break;
            case 'Красный перец':
                this.parameters['firespawn'] += 0.5
                this.parameters['magic'] += 0.5
                break;
            case 'Кувшин с водой':
                this.parameters['blur'] += 0.2
                this.parameters['freeze'] += 0.49
                this.parameters['sounds'] += 0.5
                break;
            case 'Неизвестность (в виде порошка)':
                this.parameters['thoughts'] += 0.5
                this.parameters['magic'] += 0.5
                this.parameters['portals'] += 0.5
                break;
            case 'Сконцентрированная телесность':
                this.parameters['catfood'] += 0.5
                this.parameters['fear'] += 0.5
                break;
            case 'Ароматизатор':
                this.parameters['purple'] += 0.5
                this.parameters['portals'] += 0.5
                this.parameters['poison'] += 0.3
                break;
            default:
                break;
        }
    }
    
    Cook(process) {
        this.cook.push(process)
        switch (process) {
            case '(заморозить)':
                this.parameters['freeze'] += 0.75
                this.parameters['firespawn'] = 0
                break;
            case '(запечь на маленьком душном огне)':
                this.parameters['catfood'] += 0.2
                this.parameters['blur'] += 0.2
                break;
            case '(поджарить на сковородке)':
                this.parameters['firespawn'] += 0.5
                break;
            case '(зажарить до черной корки)':
                this.parameters['firespawn'] += 0.7
                this.parameters['hurt'] += 0.2
                break;
            case '(высушить)':
                this.parameters['yellow'] += 0.4
                this.parameters['sounds'] += 0.5
                break;
        }
    }
    Ready() {
        let max = 0
        let resultclass = 'nothing'
        let equals = []
        for (let key in this.parameters) {
            if (this.parameters[key] > max) {
                equals = []
                resultclass = key
                max = this.parameters[key]
            }
            else if (this.parameters[key] == max) {
                if (!equals.includes(resultclass))
                    equals.push(resultclass)
                equals.push(key)
            }
        }
        if (equals.length != 0) {
            if (equals.includes('catfood') && equals.includes('hurt') || equals.includes('catfood') && equals.includes('green') || equals.includes('purple') && equals.includes('green')) {
                resultclass = 'poison'
            }

            else if (false) {

            }
            else {
                if (max >= 0.5 && this.ing.length + this.cook.length >= 3) {
                    let random = Math.random()
                    for (let i = 0; i < equals.length; i++) {
                        if (random <= (i + 1) / equals.length && random > i / equals.length) {
                            resultclass = equals[i]
                        }
                    }
                }
                else {
                    resultclass = 'nothing'
                }
            }
        }
        else if (max <= 0.5 && this.ing.length + this.cook.length <= 3) {
            resultclass = 'nothing'
        }
        if (CountElements(this.ing, 'Вино') >= 3) {
            resultclass = 'poison'
        }
        if (this.ing.includes('Равнодушие') && this.ing.includes('Рутина') && this.ing.includes('Сконцентрированная телесность') && this.cook.includes('(высушить)') && this.cook.includes('(запечь на маленьком душном огне)')) {
            resultclass = 'food'
        }
        if (this.ing.includes('Радость') && this.ing.includes('Рутина') && this.ing.includes('Ароматизатор') && this.cook.includes('(высушить)') && this.cook.includes('(поджарить на сковородке)')) {
            resultclass = 'extrafood'
        }
        
        let bol = 0
        let krov = 0
        this.ing.forEach(element => {
            if (element == 'Боль') {
                bol++
            }
            if (element == 'Густая красная жидкость') {
                krov++
            }
        });
        if (bol >= 2 || krov >= 2) {
            resultclass = 'death';
        }
        document.querySelector('.x30.y16').classList.add(resultclass)
        if (resultclass == 'fear')
            fearspawned = 1
        if (resultclass == 'portals') {
            document.querySelector('#magic').classList.add('portalsHue')
            document.querySelector('#magic').classList.remove('hidden')
        }
        if (resultclass == 'magic') {
            document.querySelector('#magic').classList.remove('hidden')
        }
        dishspawned = true
        let resultparameters=''
        let first=true
        for (let key in this.parameters) {
            if (first && this.parameters[key]!=0){
                first=false
                resultparameters+=key+'('+this.parameters[key]+')'
            }
            else if (this.parameters[key]!=0)
                resultparameters+=' + '+key+'('+this.parameters[key]+')'
        }
        resultparameters+=' = '+resultclass
        console.log(resultparameters);
    }
    Delete() {

        this.ing = []
        this.cook = []
        for (let key in this.parameters) {
            this.parameters[key] = 0
        }
    }
}

var dish = new Food

var devilreplic = []
var devilquestion = []
var devilquestionvar = []
var devil = []
var furnace = []
var shell = []
var fridge = []
var locker = []
var furnacehint = []
var shellhint = []
var fridgehint = []
var lockerhint = []
var processed = ''
var added = ''
var thing = ''
var result_text = ''
var friendsreplic = []
var friendsquestion = []
var friendsquestionvar = []
var friendsending = false
var friendreplic = []
var friendquestion = []
var friendquestionvar = []
var purple
var xc = []
var yc = []
var firespawned = false
var firespawnedtimes = 0
var poisonopacity = 0.2
fridge[0] = 'Змеиная кожа'
fridgehint[0] = 'Неприятная'
fridge[1] = 'Рутина'
fridgehint[1] = 'Замыливающая'
fridge[2] = 'Боль'
fridgehint[2] = 'Какая еще боль?!'
fridge[3] = 'Равнодушие'
fridgehint[3] = 'Серое и скучное'
fridge[4] = 'Радость'
fridgehint[4] = 'Забытая когда-то'
fridge[5] = '(заморозить)'
fridgehint[5] = '(на будущее?)'
furnace[0] = '(запечь на маленьком душном огне)'
furnacehint[0] = '(в течение тридцати долгих утомительных минут)'
furnace[1] = '(поджарить на сковородке)'
furnacehint[1] = '(щедро облив маслицем)'
furnace[2] = '(зажарить до черной корки)'
furnacehint[2] = '(поднять дым по всей кухне)'
locker[0] = 'Черный кофе'
lockerhint[0] = 'Дарит новые силы'
locker[1] = 'Густая красная жидкость'
lockerhint[1] = 'Кровь. На свой страх и риск.'
locker[2] = 'Вино'
lockerhint[2] = 'Не переборщи!'
locker[3] = 'Любовь'
lockerhint[3] = 'Душа. Позволяет создавать'
locker[4] = 'Страх'
lockerhint[4] = 'Душа. Позволяет управлять'
shell[0] = 'Красный перец'
shellhint[0] = 'На свой страх и риск'
shell[1] = 'Кувшин с водой'
shellhint[1] = 'Для создания льда'
shell[2] = 'Неизвестность (в виде порошка)'
shellhint[2] = 'Столовая ложка магии'
shell[3] = 'Сконцентрированная телесность'
shellhint[3] = 'Тело. Создай своего гомункула'
shell[4] = 'Ароматизатор'
shellhint[4] = 'param[\'purple\']+=0.5'
shell[5] = '(высушить)'
shellhint[5] = '(красное или белое?)'
devilreplic[1] = 'Добро пожаловать...'
devil[1] = 2
devilreplic[2] = 'В преисподнюю! :D'
devil[2] = 5
devilreplic[3] = 'Здесь мы занимаемся приготовлением корма'
devil[3] = 5
devilreplic[4] = 'К сожалению, прошлый работник оказался не профпригоден'
devil[4] = 2
devilreplic[5] = 'Если хочешь с ним познакомиться, загляни в холодильник'
devil[5] = 5
devilreplic[6] = 'Впрочем, неважно! Перейдем к делу:'
devil[6] = 2
devilreplic[7] = 'Твоим первым заданием будет приготовить мне кофе'
devil[7] = 5
devilreplic[8] = 'Ни турки, ни кофеварки у меня нет, поэтому вскипяти воду в сковородке'
devil[8] = 5
devilreplic[9] = 'Когда будешь готов, нажми E'
devil[9] = 5
devilreplic[10] = 'kitchen'
devil[10] = 5
friendsreplic[1] = 'Привет!'
friendsreplic[2] = 'На протяжении нескольких вечностей мы были в плену'
friendsreplic[3] = 'Нас заставляли делать корм и ставили над нами эксперименты'
friendsreplic[4] = 'Теперь благодаря тебе мы свободны!'
friendsreplic[5] = 'Перед нами столько путей... Куда же мы пойдем теперь?..'
friendsreplic[6] = 'question'
friendsquestion[0] = 'Останемся здесь'
friendsquestion[1] = 'Пойдем в Бездну'
friendsquestion[2] = 'Вернемся в свои тела и будем поедать корм'
friendsquestionvar[0] = [
    'Хорошо, будем готовить и есть все, что захотим!',
    'Благо ингридиентов бесконечное количество',
    'А сейчас можно прогуляться...',
    'end'
]
friendsquestionvar[1] = [
    'Слышали про это место...',
    'Там ничего нет',
    'Однако там, где ничего нет, можно найти что-то болшее',
    'Что ж, в путь!',
    'end'
]
friendsquestionvar[2] = [
    'Вполне разумное решение!',
    'Построим свое государство и будем вводить налоги',
    'И монополию с исключительным правом на производство корма',
    'Что ж, в путь!',
    'end'
]
friendreplic[1] = 'Привет! Я тут жду своей очереди на стажировку'
friendreplic[2] = 'Тот черный парень сказал, что ты очень скоро освободишься'
friendreplic[3] = 'Как вообще твои успехи? Приготовил корм?'
friendreplic[4] = 'question'
friendquestion[0] = 'Я не знаю рецепт корма'
friendquestionvar[0] = [
    'По правде говоря, я тоже не знаю рецепт',
    'Единственный, кто знает - это он',
    'Может, есть способ <darkredtext>прочитать его мысли?</darkredtext>',
    'Не знаю, откуда мне это известно,',
    'но для этого может потребоваться <darkredtext>неизвестность</darkredtext>',
    'question'
]
friendquestion[1] = 'Я хочу сбежать отсюда'
friendquestionvar[1] = [
    'Ну, я думаю, с таким настроем ты долго тут и не продержишься',
    'Черный парень сказал мне, что увольняет непрофпригодных',
    'Думаю, это скоро и произойдет и я тебя заменю',
    'question'
]
friendquestion[2] = 'Мы обречены. Нас удерживают в рабстве'
friendquestionvar[2] = [
    'Серьезно? Блин',
    'Мне казалось, тут полный соц пакет и хорошие трудовые условия',
    'Премиальные и ежедневные обеды за счет компании',
    'Может, ты просто себя накручиваешь?',
    'Но если нет, то я думаю, есть способ выбраться',
    'Кажется, я слышал, что ты варил кофе в качестве своего первого задания',
    'Может, можно <darkredtext>подмешать</darkredtext> что-нибудь туда?',
    'Но давай так: сделай это, если ты точно уверен в своих словах',
    'question'
]
/*friendquestion[3] = 'Есть ли читы на эту игру'
friendquestionvar[3] = [
    'Игру?! Так все-таки это правда!',
    'Мы все действительно состоим из кода',
    'Значит нами кто-то управляет?!',
    'Подожди... Не отвечай, я сам хочу подумать и найти ответ на этот вопрос',
    'А на счет читов... Недавно мне одна змея рассказала о том,',
    'что действительно есть какие-то способы обойти правила',
    'Больше она мне ничего не говорила. Только дала записку со странными словами,',
    'которую я потерял...',
    'Но не беда! Ведь я помню ее содержание наизусть!',
    'В ней было написано:',
    'FATE, HELL, GOLD, WALL',
    'А еще эта записка была оборвана посередине...',
    'Весьма вероятно, там было написано, что-то еще',
    'Но по определенным причинам мы этого никогда не узнаем',
    'question'
]*/

function CookingChosen(i, object) {
    let fire = new Audio
    fire.src = 'sound/fire.mp3'
    let water = new Audio
    water.src = 'sound/water.mp3'
    let get = new Audio
    get.src = 'sound/get.mp3'
    if (dish.ing.length + dish.cook.length <= 7) {
        if (object[i] == '(запечь на маленьком душном огне)') {
            if (dish.ing.length != 0) {
                fire.autoplay = true
                if (thing == 'вода ') {
                    dish.Cook(object[i])
                    thing = 'горячая вода '
                }
                else if (thing == 'холодный кофе ') {
                    dish.Cook(object[i])
                    thing = 'ароматный горячий кофе '
                }
                else if (dish.ing.length != 0) {
                    dish.Cook(object[i])
                    processed += 'запеченный на душном огне '
                }
                ShowIngredients()
            }
            for (let i = 2; i <= 8; i++) {
                for (let j = 19; j <= 26; j++) {
                    let block = document.querySelector('.x' + j + '.y' + i)
                    block.classList.remove('ice')
                }
            }

        }
        if (object[i] == '(поджарить на сковородке)') {
            if (dish.ing.length != 0) {
                fire.autoplay = true
                if (thing == 'вода ') {
                    dish.Cook(object[i])
                    thing = 'горячая вода '
                }
                else if (thing == 'холодный кофе ') {
                    dish.Cook(object[i])
                    thing = 'ароматный горячий кофе '
                }
                else if (dish.ing.length != 0) {
                    dish.Cook(object[i])
                    processed += 'подрумяненный на сковородке '
                }
                ShowIngredients()
            }
            for (let i = 2; i <= 8; i++) {
                for (let j = 19; j <= 26; j++) {
                    let block = document.querySelector('.x' + j + '.y' + i)
                    block.classList.remove('ice')
                }
            }

        }
        if (object[i] == '(зажарить до черной корки)') {
            if (dish.ing.length != 0) {
                fire.autoplay = true
                if (thing == 'вода ') {
                    dish.Cook(object[i])
                    thing = 'горячая вода '
                }
                else if (thing == 'холодный кофе ') {
                    dish.Cook(object[i])
                    thing = 'ароматный горячий кофе '
                }
                else if (dish.ing.length != 0) {
                    dish.Cook(object[i])
                    processed += 'обугленный '
                }
                ShowIngredients()
            }
            for (let i = 2; i <= 8; i++) {
                for (let j = 19; j <= 26; j++) {
                    let block = document.querySelector('.x' + j + '.y' + i)
                    block.classList.remove('ice')
                }
            }

        }
        if (object[i] == '(заморозить)') {
            if (dish.ing.length != 0) {
                if (dish.ing.length != 0) {
                    dish.Cook(object[i])
                    processed += 'промерзший '
                }
                ShowIngredients()
            }

        }
        if (object[i] == 'Змеиная кожа') {
            get.autoplay = true
            dish.Add(object[i])
            added += 'из змеиной кожи '
            ThingRandomize()
            ShowIngredients()
        }
        if (object[i] == 'Сконцентрированная телесность') {
            get.autoplay = true
            dish.Add(object[i])
            added += 'замешанный со сконцентрированной телесностью '
            ThingRandomize()
            ShowIngredients()
        }
        if (object[i] == 'Рутина') {
            get.autoplay = true
            dish.Add(object[i])
            added += 'с примесью рутины '
            ThingRandomize()
            ShowIngredients()
        }
        if (object[i] == 'Боль') {
            get.autoplay = true
            if (thing != '') {
                processed += 'больной '
                ThingRandomize()
            }
            else {
                thing = object[i] + ' '
            }
            dish.Add(object[i])
            ShowIngredients()
        }
        if (object[i] == 'Радость') {
            get.autoplay = true
            if (thing != '') {
                processed += 'веселящий '
                ThingRandomize();
            }
            else {
                thing = object[i] + ' '
            }
            dish.Add(object[i])
            ShowIngredients()
        }
        if (object[i] == 'Равнодушие') {
            get.autoplay = true
            dish.Add(object[i])
            added += 'приправленный равнодушием '
            ThingRandomize();
            ShowIngredients()
        }


        if (object[i] == 'Черный кофе') {
            get.autoplay = true
            if (dish.ing.length == 0) {
                thing = 'растворимый кофе-порошок '
            }
            else if (thing == 'горячая вода ') {
                thing = 'ароматный горячий кофе '
            }
            else if (thing == 'вода ') {
                thing = 'холодный кофе '
            }
            else {

                if (thing != '') {
                    processed += 'бодрящий '
                    ThingRandomize();
                }
                else {
                    thing = object[i] + ' '

                }

            }
            dish.Add(object[i])
            ShowIngredients()
        }


        if (object[i] == 'Густая красная жидкость') {
            get.autoplay = true
            dish.Add(object[i])
            added += 'с кровью '
            ThingRandomize()
            ShowIngredients()
        }
        if (object[i] == 'Вино') {
            get.autoplay = true
            if (thing != '') {
                processed += 'хмельной '
                ThingRandomize();
            }
            else {
                thing = object[i] + ' '
            }
            dish.Add(object[i])
            ShowIngredients()

        }
        if (object[i] == 'Любовь') {
            get.autoplay = true
            if (thing != '') {
                processed += 'вкусный '
                ThingRandomize();
            }
            else {
                thing = object[i] + ' '
            }
            dish.Add(object[i])
            ShowIngredients()

        }
        if (object[i] == 'Страх') {
            get.autoplay = true
            if (thing != '') {
                processed += 'пугающий '
                ThingRandomize();
            }
            else {
                thing = object[i] + ' '
            }
            dish.Add(object[i])
            ShowIngredients()

        }
        if (object[i] == 'Красный перец') {
            get.autoplay = true
            if (thing != '') {
                processed += 'острый '
                ThingRandomize();
            }
            else {
                thing = object[i] + ' '
            }
            dish.Add(object[i])
            ShowIngredients()

        }
        if (object[i] == 'Кувшин с водой') {
            water.autoplay = true
            if (dish.ing.length == 0) {
                thing = 'вода '
            }
            else if (thing == 'растворимый кофе-порошок ') {
                thing = 'холодный кофе '
            }
            else {
                added += 'с водой '
            }
            dish.Add(object[i])
            ThingRandomize()
            ShowIngredients()
        }
        if (object[i] == 'Неизвестность (в виде порошка)') {
            let audio = new Audio();
            audio.src = 'sound/sand.mp3';
            audio.autoplay = true;
            if (thing != '') {
                processed += 'наркотический '
                ThingRandomize();
            }
            else {
                thing = object[i] + ' '
            }
            dish.Add(object[i])
            ShowIngredients()
        }
        if (object[i] == 'Ароматизатор') {
            if (thing != '') {
                processed += 'ароматный '
                ThingRandomize();
            }
            else {
                thing = object[i] + ' '
            }
            dish.Add(object[i])
            ShowIngredients()
        }
        if (object[i] == '(высушить)') {
            if (dish.ing.length != 0) {
                if (dish.ing.length != 0) {
                    dish.Cook(object[i])
                    if (thing == 'Вино ') {
                        processed += 'сухое '
                    }
                    else {
                        processed += 'сухой '
                    }
                }
                ShowIngredients()
            }
        }
        if (dish.ing.length > 2 && thing == 'ароматный горячий кофе ') {
            thing = 'горячий кофе '
            ShowIngredients();
        }
    }
    else {
        document.querySelector('#ingredients').classList.add('max')
        setTimeout(() => {
            document.querySelector('#ingredients').classList.remove('max')
        }, 400);
    }
    document.querySelector('#chooseouter').classList.add('hidden')
}
function ShowMessageRight(text) {
    document.querySelector('#rightmessage').classList.add('hidden');
    document.querySelector('#rightmessage').classList.remove('hidden')
    document.querySelector('#rightmessage>text').innerHTML = text;
}
function ShowMessageDown(text) {
    document.querySelector('#devilmessage').classList.add('hidden');
    document.querySelector('#devilmessage').classList.remove('hidden')
    document.querySelector('#devilmessage>text').innerHTML = text;
}
function ShowMessageLeft(text) {
    document.querySelector('#friendmessage').classList.add('hidden');
    document.querySelector('#friendmessage').classList.remove('hidden')
    document.querySelector('#friendmessage>text').innerHTML = text;
}
function ShowMessageEnding(text) {
    document.querySelector('#endingmessage').classList.add('hidden');
    document.querySelector('#endingmessage').classList.remove('hidden')
    document.querySelector('#endingmessage>text').innerHTML = text;
}
function Choose(variants, answers) {
    let choose = document.querySelector('#chooseouter')
    choose.querySelectorAll('.button').forEach((e) => e.remove())
    choose.classList.remove('hidden')
    for (let i = 0; i < variants.length; i++) {
        let button = document.createElement('div')
        choose.appendChild(button)
        button.classList.add('button')
        button.innerHTML = variants[i]
        button.setAttribute('onclick', 'Chosen(' + i + ',' + answers + ',opponent)')
    }
}
function Chosen(variant, answers, op) {
    if (op == 'devil') {

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
    if (op == 'friends') {
        friendsreplicnumber += 2
        for (let j = 0; j < answers[variant].length; j++) {
            friendsreplic.push(answers[variant][j])
        }
        ShowMessageRight(friendsreplic[friendsreplicnumber])
        let choose = document.querySelector('#chooseouter')
        choose.querySelectorAll('.button').forEach((e) => e.remove())
        choose.classList.add('hidden')
    }
    if (op == 'friend') {
        friendreplicnumber += 1
        for (let j = 0; j < answers[variant].length; j++) {
            friendreplic.push(answers[variant][j])
        }
        ShowMessageLeft(friendreplic[friendreplicnumber])
        let choose = document.querySelector('#chooseouter')
        choose.querySelectorAll('.button').forEach((e) => e.remove())
        choose.classList.add('hidden')
    }
}
function CookingChoose(object, objecthint) {
    let choose = document.querySelector('#chooseouter')
    choose.querySelectorAll('.button').forEach((e) => e.remove())
    choose.classList.remove('hidden')
    for (let i = 0; i < object.length; i++) {
        let button = document.createElement('div')
        choose.appendChild(button)
        button.classList.add('button')
        button.innerHTML = object[i]
        button.onclick = function () {
            CookingChosen(i, object)
        }
        button.onmouseover = function () {
            if (magic) {
                button.innerHTML = objecthint[i]
                button.classList.add('magichint')
            }

        }
        button.onmouseout = function () {
            if (magic) {
                button.innerHTML = object[i]
                button.classList.remove('magichint')
            }
        }
    }
}

function ThingRandomize() {
    random = Math.random()
    if (random > 0.5 && thing == '') {
        while (random > 0.5) {
            random = Math.random()
        }
    }
    if (!thing.includes('кофе') && thing != 'корм' && !thing.includes('вода')) {
        if (random <= 0.05) {
            thing = 'кефир '
        }
        if (random > 0.05 && random <= 0.1) {
            thing = 'чай '
        }
        if (random > 0.1 && random <= 0.15) {
            thing = 'настой '
        }
        if (random > 0.15 && random <= 0.2) {
            thing = 'хлеб '
        }
        if (random > 0.2 && random <= 0.25) {
            thing = 'бульон '
        }
        if (random > 0.25 && random <= 0.3) {
            thing = 'лекарственный препарат '
        }
        if (random > 0.3 && random <= 0.35) {
            thing = 'вонючий сыр '
        }
        if (random > 0.35 && random <= 0.40) {
            thing = 'табак '
        }
        if (random > 0.40 && random <= 0.45) {
            thing = 'творог '
        }
        if (random > 0.40 && random <= 0.45) {
            thing = 'салат '
        }
        if (random > 0.45 && random <= 0.50) {
            thing = 'пирожок '
        }
    }
}
function ShowIngredients() {
    result_text = processed + thing + added
    document.querySelector('#ingredients>text').innerHTML = 'Результат: \n' + result_text
    document.querySelector('#ingredients').classList.remove('hidden')
}
var devilreplicnumber = 1;
var friendsreplicnumber = 1;
var friendreplicnumber = 1;
var friend = [
    [],
    [],
    [],
    [],
    [],
    []
]
var xfr = []
var yfr = []
var movement = []
var directory = []



window.onload = function SnakeGame() {
    setTimeout(() => {
        document.querySelector('#anchor').scrollIntoView()
    }, 100);
    document.querySelector('#message').classList.add('hidden')
    document.querySelectorAll('.kitchen').forEach((el) => { el.classList.remove('hidden') })
    var x
    var y
    var snake = []
    var extrafoodEaten = 0
    var foodEaten
    var lastmove
    var lastx
    var lasty
    var green = false;
    var yellow = false;
    purple = false;
    var sins;
    var catspawned = false
    var catforward
    var xf = 30
    var yf = 16
    var lastyf
    var lastxf
    var fear
    var cat = []
    var poisoned = false
    var poisonremained = 201
    function KeyRPressed(e) {
        let key = `${e.code}`;
        switch (key) {
            case 'KeyR':
                window.location.href = 'index.php'
                break;

            default:
                break;
        }
    }
    EscPressed = (e) => {
        let key = `${e.code}`;
        switch (key) {
            case 'KeyQ':
                document.querySelector('#chooseouter').classList.add('hidden')
                document.querySelector('#cmessage').classList.add('hidden')
                break;

            default:
                break;
        }
    }
    function HideHelpMessage(e) {
        let key = `${e.code}`;
        switch (key) {
            case 'KeyQ':
                document.querySelector('#helpmessage').classList.add('hidden')
                document.removeEventListener('keydown', HideHelpMessage)
                break;
            default:
                break;
        }
    }
    function ReadyToCook() {
        devilreplic = []
        devilreplicnumber = 1
        devilreplic[1] = 'Теперь перейдем к основному блюду'
        devil[1] = 2
        devilreplic[2] = 'Мне нужно, чтобы ты приготовил корм'
        devil[2] = 5
        devilreplic[3] = 'Тот самый, что ты ел кучу раз'
        devil[3] = 2
        devilreplic[4] = 'Все ингредиенты тебе доступны!'
        devil[4] = 2
        devilreplic[5] = 'Как только корм будет готов, нажми E'
        devil[5] = 5
        devilreplic[6] = 'kitchen'
        devil[6] = 5
    }
    function CatMovement(dir) {
        for (let i = 0; i < cat.length; i++) {
            let lastyc
            let lastxc
            let catInt = setInterval(() => {
                switch (dir) {
                    case 'left':
                        xc[i]--
                        break;
                    case 'up':
                        yc[i]--
                        break;
                    case 'down':
                        yc[i]++
                        break;
                    case 'right':
                        xc[i]++
                        break;
                }
                try {
                    if (document.querySelector('.x' + xc[i] + '.y' + yc[i]).classList.contains('block') || document.querySelector('.x' + xc[i] + '.y' + yc[i]).classList.contains('snake') || document.querySelector('.x' + xc[i] + '.y' + yc[i]).classList.contains('kitchenblock') || document.querySelector('.x' + xc[i] + '.y' + yc[i]).classList.contains('cat') || document.querySelector('.x' + xc[i] + '.y' + yc[i]).classList.contains('deadcat') || document.querySelector('.x' + xc[i] + '.y' + yc[i]).classList.contains('ice')) {
                        let byte = new Audio
                        byte.src = 'sound/cat/byte.mp3'
                        byte.autoplay = true
                        let ins2 = new Audio
                        ins2.src = 'sound/cat/insist2.mp3'
                        ins2.autoplay = true
                        clearInterval(catInt)
                    }
                    else {
                        cat[i].classList.remove('cat')
                        cat[i] = document.querySelector('.x' + xc[i] + '.y' + yc[i])
                        cat[i].classList.add('cat')
                        lastxc = xc[i]
                        lastyc = yc[i]
                        let random = Math.random()
                        if (dir == 'left' || dir == 'right') {
                            if (Math.abs(x - xc[i]) < random * 3 + 1) {
                                clearInterval(catInt)
                                let meow = new Audio
                                if (random < 0.5) {
                                    meow.src = 'sound/cat/insist.mp3'
                                }
                                else if (random < 1) {
                                    meow.src = 'sound/cat/insist2.mp3'
                                }
                                meow.autoplay = true
                            }
                        }
                        if (dir == 'up' || dir == 'down') {
                            if (Math.abs(y - yc[i]) < random * 3 + 1) {
                                clearInterval(catInt)
                            }
                        }
                    }
                } catch (error) {
                    xc[i] = lastxc
                    yc[i] = lastyc
                    clearInterval(catInt)
                }

            }, 50);

        }



    }
    function HellEnding() {
        clearInterval(ThoughtsInterval)
        Achieve(6, 'Hell Ending')
        document.querySelectorAll('.ice').forEach((el) => { el.classList.remove('ice') })
        document.querySelector('#freeze').classList.add('hidden')
        document.querySelectorAll('td:not(.snake)').forEach((el) => { el.classList.remove('hiddencell'); el.classList.add('hiddenhidden'); el.classList.remove('block') })
        document.querySelectorAll('.kitchen').forEach((el) => el.classList.add('hidden'))
        GameOver();
        hellsong.src = 'sound/hell.mp3'
        hellsong.volume=0.5
        hellsong.play()
        ShowMessage('Ваша душа была сожжена дотла. Нажмите R для того, чтобы возродиться', 'constant')
        document.querySelector('#hell').classList.remove('hidden')
        document.querySelector('#devilmessage').classList.add('hidden')
        document.querySelector('#cmessage').classList.add('hidden')
        document.querySelector('#ingredients').classList.add('hidden')
        document.querySelector('#chooseouter').classList.add('hidden')
        let audio = new Audio
        audio.src = 'sound/satanlaugh.mp3'
        audio.autoplay = true
    }
    function FriendsEnding() {
        friendsending = true
        opponent = 'friends'
        hellsong.pause();
        document.removeEventListener('keydown', TalkWithDevil)
        document.querySelector('#devilmessage').classList.add('hidden')
        document.querySelector('.satan').classList.add('hidden')
        document.querySelector('#satan7').classList.remove('hidden')
        document.querySelector('#satan5').classList.add('hidden')
        xfr[1] = 46
        yfr[1] = 27
        xfr[2] = 50
        yfr[2] = 27
        xfr[3] = 54
        yfr[3] = 27
        setTimeout(() => {
            let audio = new Audio
            audio.src = 'sound/applause.mp3'
            audio.autoplay = true
            sins = 0
            Redcounter();
            for (let i = 0; i < 6; i++) {
                friend[1].push(document.querySelector('.x46.y27'))
                friend[2].push(document.querySelector('.x50.y27'))
                friend[3].push(document.querySelector('.x54.y27'))
                friend[4].push(document.querySelector('.x54.y20'))
            }
            directory[1] = 'up'
            directory[2] = 'up'
            directory[3] = 'up'
            movement[1] = setInterval(() => {
                FriendNextBlock(1, directory[1])
            }, 150);
            movement[2] = setInterval(() => {
                FriendNextBlock(2, directory[2])
            }, 200);
            movement[3] = setInterval(() => {
                FriendNextBlock(3, directory[3])
            }, 150);
            setTimeout(() => {
                friend[1].forEach(el => {
                    el.classList.add('friend')
                })
                friend[2].forEach(el => {
                    el.classList.add('friend')
                })
                friend[3].forEach(el => {
                    el.classList.add('friend')
                })
            }, 400);
            setTimeout(() => {
                directory[1] = 'left'
            }, 600);
            setTimeout(() => {
                directory[1] = 'up'
            }, 900);
            setTimeout(() => {
                directory[1] = 'left'
            }, 1400);
            setTimeout(() => {
                directory[1] = 'up'
            }, 1600);
            setTimeout(() => {
                directory[2] = 'left'
            }, 1000);
            setTimeout(() => {
                directory[2] = 'up'
            }, 1400);
            setTimeout(() => {
                directory[3] = 'left'
            }, 1500);
            setTimeout(() => {
                directory[3] = 'up'
            }, 1650);
            setTimeout(() => {
                directory[1] = 'left'
                directory[2] = 'left'
                directory[3] = 'left'
            }, 1800);
            setTimeout(() => {
                clearInterval(movement[1])
                clearInterval(movement[2])
                clearInterval(movement[3])
                ShowMessageRight(friendsreplic[friendsreplicnumber])
                document.addEventListener('keydown', TalkWithFriends)
            }, 2100);
        }, 3000);
    }
    function FriendsEndingFinal() {
        Achieve(4, 'Friends Ending')
        hellsong.pause()
        document.querySelectorAll('.hiddencell').forEach((el) => { el.classList.remove('hiddencell'); el.classList.add('hidden') })
        document.querySelector('hr').classList.add('hidden')
        document.querySelectorAll('.friend').forEach((el) => el.classList.remove('friend'))
        document.querySelectorAll('.counter').forEach((el) => el.classList.add('hidden'))
        document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
        document.querySelectorAll('.kitchen').forEach((el) => el.classList.add('hidden'))
        document.querySelector('#devilmessage').classList.add('hidden')
        clearInterval(movement[1])
        clearInterval(movement[2])
        clearInterval(movement[3])
        for (let yy = 1; yy <= 29; yy++) {
            for (let xx = 1; xx <= 60; xx++) {
                document.querySelector('.x' + xx + '.y' + yy).classList.remove('block')
                document.querySelector('.x' + xx + '.y' + yy).classList.add('hiddenhidden')
            }
        }
        document.removeEventListener('keydown', FreeMovekeypressed)
        
        snake.forEach((el) => {
            el.classList.remove('snake')
        })
        friend[1] = []
        friend[2] = []
        friend[3] = []
        friend[4] = []
        for (let i = 0; i < 5; i++) {
            friend[1].push(document.querySelector('.x1.y1'))
            friend[2].push(document.querySelector('.x1.y1'))
            friend[3].push(document.querySelector('.x1.y1'))
            friend[4].push(document.querySelector('.x1.y1'))
        }
        friend[1][5] = document.querySelector('.x41.y29')
        friend[2][5] = document.querySelector('.x47.y29')
        friend[3][5] = document.querySelector('.x51.y29')
        friend[4][5] = document.querySelector('.x36.y29')
        document.querySelector('.x41.y29').classList.add('friend')
        document.querySelector('.x47.y29').classList.add('friend')
        document.querySelector('.x51.y29').classList.add('friend')
        document.querySelector('.x36.y29').classList.add('friend')
        document.querySelector('.x1.y1').classList.add('transparentimportant')//костыль
        xfr[1] = 41
        yfr[1] = 29
        xfr[2] = 47
        yfr[2] = 29
        xfr[3] = 51
        yfr[3] = 29
        xfr[4] = 36
        yfr[4] = 29
        friend[1].forEach((el) => el.classList.add('friend'))
        friend[2].forEach((el) => el.classList.add('friend'))
        friend[3].forEach((el) => el.classList.add('friend'))
        friend[4].forEach((el) => el.classList.add('friend'))

        document.querySelector('#sunset').classList.remove('hidden')
        setTimeout(() => {
            movement[1] = setInterval(() => {
                FriendNextBlock(1, 'up')
            }, 305);
            movement[2] = setInterval(() => {
                FriendNextBlock(2, 'up')
            }, 295);
            movement[3] = setInterval(() => {
                FriendNextBlock(3, 'up')
            }, 303);
            movement[4] = setInterval(() => {
                FriendNextBlock(4, 'up')
            }, 304);
        }, 300);
        /**/
        let audio = new Audio
        audio.src = 'sound/friends.mp3'
        audio.autoplay = true
        setTimeout(() => {
            ShowMessage('Нашли ли вы то, что искали? Нажмите R, если хотите попытать удачу еще раз.', 'constant')
        }, 10000);
    }
    var TalkWithFriends = (e) => {
        let key = `${e.code}`;
        if (friendsreplic[friendsreplicnumber + 1] == 'question') {
            document.querySelector('#rightmessage').classList.add('hidden')
            Choose(friendsquestion, 'friendsquestionvar')
        }
        else if (friendsreplic[friendsreplicnumber + 1] == 'end') {
            document.querySelector('#rightmessage').classList.add('hidden')
            for (let i = 35; i <= 55; i++) {
                document.querySelector('.x' + i + '.y1').classList.remove('block')
                document.removeEventListener('keydown', TalkWithFriends)
            }
            movement[1] = setInterval(() => {
                FriendNextBlock(1, 'up')
            }, 100);
            movement[2] = setInterval(() => {
                FriendNextBlock(2, 'up')
            }, 100);
            movement[3] = setInterval(() => {
                FriendNextBlock(3, 'up')
            }, 100);

        }
        else if (!friendsreplic[friendsreplicnumber + 1].includes('question') && !friendsreplic[friendsreplicnumber + 1].includes('end')) {
            switch (key) {
                case 'Enter':
                    friendsreplicnumber++;
                    ShowMessageRight(friendsreplic[friendsreplicnumber])
                    break;
                default:
                    return;
                    break;
            }

        }
    }
    var tryed = 0
    var lastIng = 'красный перец'
    var TalkWithDevil = (e) => {
        let key = `${e.code}`;
        if (devilreplic[devilreplicnumber + 1] == 'end') {
            ShowMessageDown(devilreplic[devilreplicnumber])
        }
        else if (devilreplic[devilreplicnumber + 1] == 'ending') {
            document.querySelector('#devilmessage').classList.add('hidden')
            TheFallEnding()
        }
        else if (devilreplic[devilreplicnumber + 1] == 'extraending') {
            document.querySelector('#devilmessage').classList.add('hidden')
            CircleEnding()
        }
        else if (!devilreplic[devilreplicnumber].includes('question') && devilreplic[devilreplicnumber + 1] != 'kitchen' && devilreplic[devilreplicnumber] != 'die' && devilreplic[devilreplicnumber] != 'death' && devilreplic[devilreplicnumber] != 'dead' && !devilreplic[devilreplicnumber].includes('eat') && !devilreplic[devilreplicnumber].includes('continue') && !devilreplic[devilreplicnumber].includes('fearrace')) {
            switch (key) {
                case 'Enter':
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
        if (devilreplic[devilreplicnumber].includes('fearrace')) {
            document.querySelector('#devilmessage').classList.add('hidden')
        }
        if (devilreplic[devilreplicnumber].includes('death')) {
            document.querySelector('#devilmessage').classList.add('hidden')
        }
        if (devilreplic[devilreplicnumber + 1] == 'continue') {
            tryed++
            switch (tryed) {
                case 1:
                    devilreplic[devilreplicnumber + 1] = 'Предупреждаю:'
                    devil[devilreplicnumber + 1] = 3
                    devilreplic.push('Мне нужно, чтобы ты сделал именно тот самый корм,')
                    devil.push(2)
                    devilreplic.push('который появляется снова и снова')
                    devil.push(2)
                    devilreplic.push('Я дам тебе еще 5 попыток')
                    devil.push(2)
                    devilreplic.push('Если не справишься...')
                    devil.push(2)
                    devilreplic.push('Я тебя уволю')
                    devil.push(3)
                    devilreplic.push('Приступай к работе')
                    devil.push(5)
                    devilreplic.push('Как только корм будет готов, нажми E')
                    devil.push(5)
                    devilreplic.push('kitchen')
                    devil.push(5)
                    break;
                case 2:
                    devilreplic[devilreplicnumber + 1] = 'А еще ты только переводишь продукты'
                    devil[devilreplicnumber + 1] = 2
                    devilreplic.push('Каждый зря потраченный ' + lastIng + ' ты будешь оплачивать сам')
                    devil.push(2)
                    devilreplic.push('Собственной кровью')
                    devil.push(3)
                    devilreplic.push('У тебя осталось 4 попытки')
                    devil.push(2)
                    devilreplic.push('Как только корм будет готов, нажми E')
                    devil.push(5)
                    devilreplic.push('kitchen')
                    devil.push(5)
                    break;
                case 3:
                    devilreplic[devilreplicnumber + 1] = 'Знаешь, что?'
                    devil[devilreplicnumber + 1] = 5
                    devilreplic.push('Мне кажется ты убьешься еще раньше, чем я тебя уволю :D')
                    devil.push(5)
                    devilreplic.push('Прости, но я не буду по тебе грустить')
                    devil.push(5)
                    devilreplic.push('Как раз змеиная кожа в холодильнике заканчивается')
                    devil.push(2)
                    devilreplic.push('Как только корм будет готов, нажми E')
                    devil.push(5)
                    devilreplic.push('kitchen')
                    devil.push(5)
                    break;
                case 4:
                    devilreplic[devilreplicnumber + 1] = 'Твои попытки меня забавляют'
                    devil[devilreplicnumber + 1] = 5
                    devilreplic.push('Ты действительно думаешь, что <darkredtext>просто перебирая ингридиенты,</darkredtext>')
                    devil.push(5)
                    devilreplic.push('<darkredtext>Ты сможешь приготовить корм?</darkredtext>')
                    devil.push(5)
                    devilreplic.push('Просто признайся, что ты не знаешь рецепт')
                    devil.push(5)
                    devilreplic.push('Ты ел корм десятки раз но даже не задумывался о том, из чего он сделан')
                    devil.push(5)
                    devilreplic.push('Что?')
                    devil.push(2)
                    devilreplic.push('Знаю ли я этот рецепт?')
                    devil.push(2)
                    devilreplic.push('Конечно :D')
                    devil.push(5)
                    devilreplic.push('Скажу ли я его тебе?')
                    devil.push(2)
                    devilreplic.push('Нет, лучше буду наблюдать дальше')
                    devil.push(5)
                    devilreplic.push('Кстати у тебя осталось 2 попытки ;)')
                    devil.push(5)
                    devilreplic.push('Как только корм будет готов, нажми E')
                    devil.push(5)
                    devilreplic.push('kitchen')
                    devil.push(5)
                    break;
                case 5:
                    devilreplic[devilreplicnumber + 1] = 'Посмотри какой бардак ты тут навел!'
                    devil[devilreplicnumber + 1] = 2
                    devilreplic.push('Тебе-то ничего, ведь я тебя уволю и все')
                    devil.push(2)
                    devilreplic.push('А мне это еще убирать!')
                    devil.push(3)
                    devilreplic.push('Ладно... у тебя последняя попытка')
                    devil.push(2)
                    devilreplic.push('Ты уж постарайся')
                    devil.push(2)
                    devilreplic.push('Иначе сам станешь кормом!')
                    devil.push(3)
                    devilreplic.push('Как только корм будет готов, нажми E')
                    devil.push(5)
                    devilreplic.push('kitchen')
                    devil.push(5)
                    break;
                case 6:
                    devilreplic[devilreplicnumber + 1] = 'Я понял. Ты не знаешь рецепт'
                    devil[devilreplicnumber + 1] = 2
                    devilreplic.push('Потому что даже не думал <darkredtext>вглядеться</darkredtext> в корм')
                    devil.push(2)
                    devilreplic.push('Всего-то надо было внимательно его <darkredtext>изучить</darkredtext>')
                    devil.push(2)
                    devilreplic.push('<darkredtext>Изучить изнутри</darkredtext>')
                    devil.push(2)
                    devilreplic.push('Как бы то ни было, уже поздно')
                    devil.push(2)
                    devilreplic.push('Ты уволен')
                    devil.push(3)
                    devilreplic.push('die')
                    devil.push(4)
                    break;
                default:
                    break;
            }
        }
        if (devilreplic[devilreplicnumber].includes('question')) {
            document.querySelector('#devilmessage').classList.add('hidden')
            Choose(devilquestion, 'devilquestionvar')
        }
        if (devilreplic[devilreplicnumber].includes('eat')) {
            document.removeEventListener('keydown', TalkWithDevil)
            document.querySelector('#devilmessage').classList.add('hidden')
            document.querySelector('#appear').setAttribute('src', "visual/kitchen/appear.gif")
            document.querySelector('#appear').classList.remove('hidden')
            let appear = new Audio
            appear.src = 'sound/appear.mp3'
            appear.autoplay = true
            setTimeout(() => {
                document.querySelector('#appear').classList.add('hidden')
            }, 700);

            if (!dishspawned) {
                dish.Ready()
            }

        }
        if (devilreplic[devilreplicnumber].includes(':)') || devilreplic[devilreplicnumber].includes(';)') || devilreplic[devilreplicnumber].includes(':D') || devilreplic[devilreplicnumber].includes(';D')) {
            let audio = new Audio
            audio.src = 'sound/hihihi.mp3'
            audio.autoplay = true
        }
        if (devilreplic[devilreplicnumber] == 'die') {
            HellEnding();
        }
        if (devilreplic[devilreplicnumber] == 'dead') {
            document.querySelector('#ingredients').classList.add('hidden')
            FriendsEnding()

        }
        if (devilreplic[devilreplicnumber] == 'Когда будешь готов, нажми E') {
            switch (key) {
                case 'KeyE':
                    if (result_text.includes('горячий кофе ')) {
                        devilreplic = []
                        devil = []
                        devilreplicnumber = 1
                        if (result_text.includes('ароматный ')) {
                            document.querySelectorAll('.devil').forEach((el) => el.classList.add('hidden'))
                            document.querySelector('#satan6').classList.remove('hidden')
                            devilreplic[1] = 'Какой аромат! Слушай, если ты будешь готовить мне такой каждый день'
                            devil[1] = 6
                            devilreplic[2] = 'То станешь работником месяца!!'
                            devil[2] = 6
                            if (dish.ing.includes('Радость') || dish.ing.includes('Любовь') || dish.ing.includes('Вино') || dish.ing.includes('Неизвестность (в виде порошка)')) {
                                ClearAll();
                                devilreplic[3] = 'Только что-то мне дурно...'
                                devil[3] = 2
                                devilreplic[4] = 'Я пожалуй тут прилягу, ты не против?'
                                devil[4] = 2
                                devilreplic[5] = 'dead'
                                devil[5] = 7
                            }
                            else if (dish.ing.length > 2) {

                                let poison
                                for (let i = 0; i <= dish.ing.length; i++) {
                                    if (dish.ing[i] != 'Черный кофе' && dish.ing[i] != 'Кувшин с водой') {
                                        poison = dish.ing[i]
                                        break;
                                    }

                                }
                                ClearAll();
                                devilreplic[3] = 'Только вот вкус не очень'
                                devil[3] = 2
                                devilreplic[4] = 'Я так понимаю, ты хочешь меня отравить'
                                devil[4] = 3
                                devilreplic[5] = 'Ты думаешь, что ' + poison + ' меня убьет?'
                                devil[5] = 4
                                devilreplic[6] = 'Ты уволен!'
                                devil[6] = 4
                                devilreplic[6] = 'die'
                                devil[6] = 4
                            }
                            else {
                                ClearAll();
                                devilreplic[3] = 'Теперь перейдем к основному блюду'
                                devil[3] = 2
                                devilreplic[4] = 'Мне нужно, чтобы ты приготовил корм'
                                devil[4] = 5
                                devilreplic[5] = 'Тот самый, что ты ел кучу раз'
                                devil[5] = 2
                                devilreplic[6] = 'Все ингредиенты тебе доступны!'
                                devil[6] = 2
                                devilreplic[7] = 'Как только корм будет готов, нажми E'
                                devil[7] = 5
                                devilreplic[8] = 'kitchen'
                                devil[8] = 5
                            }
                        }
                        else {
                            ClearAll();
                            devilreplic[1] = 'Что это такое?'
                            devil[1] = 5
                            devilreplic[2] = 'Это что, кофе по скандинавскому рецепту?'
                            devil[2] = 2
                            devilreplic[3] = 'Он даже не ароматный!'
                            devil[3] = 3
                            devilreplic[4] = 'Я всегда отличаю нормальный кофе от неудачного по запаху'
                            devil[4] = 2
                            devilreplic[5] = 'Когда будешь готов, нажми E'
                            devil[5] = 5
                            devilreplic[6] = 'kitchen'
                            devil[6] = 5
                        }
                    }
                    else if (result_text.includes('порошок ')) {
                        ClearAll();
                        devilreplic = []
                        devilreplicnumber = 1
                        devilreplic[1] = 'Зачем мне порошок?'
                        devil[1] = 2
                        devilreplic[2] = 'Что, интересно, я буду с ним делать?'
                        devil[2] = 2
                        devilreplic[3] = 'Попробуй добавить воды'
                        devil[3] = 5
                        devilreplic[4] = 'Когда будешь готов, нажми E'
                        devil[4] = 5
                        devilreplic[5] = 'kitchen'
                        devil[5] = 5
                    }
                    else if (result_text.includes('холодный кофе ')) {
                        ClearAll();
                        devilreplic = []
                        devilreplicnumber = 1
                        devilreplic[1] = 'Я не люблю холодный'
                        devil[1] = 2
                        devilreplic[2] = 'Сделай мне горячий, да такой, чтобы в кружке кипел!'
                        devil[2] = 2
                        devilreplic[3] = 'Когда будешь готов, нажми E'
                        devil[3] = 5
                        devilreplic[4] = 'kitchen'
                        devil[4] = 5
                    }
                    else if (result_text != '') {
                        ClearAll();
                        devilreplic = []
                        devilreplicnumber = 1
                        devilreplic[1] = 'Что это?'
                        devil[1] = 2
                        devilreplic[2] = 'По запаху похоже на ' + result_text
                        devil[2] = 2
                        devilreplic[3] = 'А я просил кофе!'
                        devil[3] = 3
                        devilreplic[4] = 'Давай я подскажу: кофе делается из растворимого кофе-порошка, что лежит в шкафу'
                        devil[4] = 2
                        devilreplic[5] = 'Добавь туда воду и вскипяти'
                        devil[5] = 2
                        devilreplic[6] = 'Когда будешь готов, нажми E'
                        devil[6] = 5
                        devilreplic[7] = 'kitchen'
                        devil[7] = 5
                    }
                    else {
                        ClearAll();
                        devilreplic = []
                        devilreplicnumber = 1
                        devilreplic[1] = 'Подойди к шкафу и достань оттуда кофе'
                        devil[1] = 2
                        devilreplic[2] = 'Это твое первое задание! Это легко.'
                        devil[2] = 2
                        devilreplic[3] = 'Если ты не справишься, то как мы будем работать дальше?'
                        devil[3] = 2
                        devilreplic[4] = 'Когда будешь готов, нажми E'
                        devil[4] = 5
                        devilreplic[5] = 'kitchen'
                        devil[5] = 5
                    }
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    break;
                default:
                    return;
                    break;
            }
        }
        if (devilreplic[devilreplicnumber] == 'Как только корм будет готов, нажми E') {
            switch (key) {
                case 'KeyE':
                    devilreplic = []
                    devil = []
                    devilreplicnumber = 1
                    if (dish.ing.length != 0) {
                        dishspawned = false
                        lastIng = dish.ing[dish.ing.length - 1]
                        let random = Math.random()
                        if (random < 0.25) {
                            devilreplic[1] = 'О, ты уже приготовил корм'
                            devil[1] = 2
                            devilreplic[2] = 'Испробуй же его!'
                            devil[2] = 2
                            devilreplic[3] = 'eat'
                            devil[3] = 5
                        }
                        if (random >= 0.25 && random < 0.5) {
                            devilreplic[1] = 'Говоришь, корм готов?'
                            devil[1] = 2
                            devilreplic[2] = 'Что ж, дерзай!'
                            devil[2] = 2
                            devilreplic[3] = 'eat'
                            devil[3] = 5
                        }
                        if (random >= 0.5 && random < 0.75) {
                            if (added != '') {
                                devilreplic[1] = 'Понятия не имею, как ты из ' + lastIng + ' получил ' + thing
                                devil[1] = 2
                            }
                            else {
                                devilreplic[1] = 'Тебе так интересно, как ' + lastIng + ' на вкус?'
                                devil[1] = 2
                            }
                            devilreplic[2] = 'Надеюсь, ты знаешь, что делаешь'
                            devil[2] = 2
                            devilreplic[3] = 'Ешь'
                            devil[3] = 2
                            devilreplic[4] = 'eat'
                            devil[4] = 5
                        }
                        if (random >= 0.75) {
                            devilreplic[1] = 'Я не уверен, действительно ли ты приготовил именно тот корм, который я просил'
                            devil[1] = 2
                            devilreplic[2] = 'Давай проверим'
                            devil[2] = 2
                            devilreplic[3] = 'eat'
                            devil[3] = 5
                        }



                    }
                    else {
                        devilreplic[1] = 'Врешь ведь, не готов еще корм :)'
                        devil[1] = 5
                        devilreplic[2] = 'Просто так я платить тебе не буду'
                        devil[2] = 2
                        devilreplic[3] = 'Покажи на что способен! Считай это своей стажировкой'
                        devil[3] = 5
                        devilreplic[4] = 'Как только корм будет готов, нажми E'
                        devil[4] = 5
                        devilreplic[5] = 'kitchen'
                        devil[5] = 5
                    }
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    break;


            }

        }
    }
    function TalkWithFriend(e) {
        let key = `${e.code}`;
        if (friendreplic[friendreplicnumber + 1] == 'end') {
            ShowMessageLeft(friendreplic[friendreplicnumber])
        }
        else if (!friendreplic[friendreplicnumber].includes('question') && friendreplic[friendreplicnumber] != 'end') {
            switch (key) {
                case 'Enter':
                    document.querySelector('#entermessage').classList.add('hidden')
                    if (friendreplicnumber > 5)
                        document.querySelector('#escmessage').classList.remove('hidden')
                    if (indialogue) {
                        friendreplicnumber++;
                    }
                    indialogue = true;
                    ShowMessageLeft(friendreplic[friendreplicnumber])
                    break;
                case 'KeyQ':
                    document.querySelector('#friendmessage').classList.add('hidden')
                    if (indialogue) {
                        document.querySelector('#entermessage').classList.remove('hidden')
                        document.querySelector('#escmessage').classList.add('hidden')
                        document.querySelector('#chooseouter').classList.add('hidden')
                        document.querySelector('#friendmessage').classList.add('hidden')
                        indialogue = false;

                    }
                    break;
                default:
                    return;
                    break;
            }

        }


        if (friendreplic[friendreplicnumber].includes('question')) {
            document.querySelector('#friendmessage').classList.add('hidden');
            switch (key) {
                case 'Enter':
                    if (friendreplic[friendreplicnumber] == 'question') {
                        Choose(friendquestion, 'friendquestionvar')
                    }
                    document.querySelector('#chooseouter').classList.remove('hidden')
                    document.querySelector('#entermessage').classList.add('hidden')
                    if (friendreplicnumber > 5)
                        document.querySelector('#escmessage').classList.remove('hidden')
                    indialogue = true;
                    break;
                case 'KeyQ':
                    if (indialogue == true) {
                        document.querySelector('#friendmessage').classList.add('hidden')
                        document.querySelector('#entermessage').classList.remove('hidden')
                        document.querySelector('#escmessage').classList.add('hidden')
                        document.querySelector('#chooseouter').classList.add('hidden')
                        indialogue = false;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    function Kitchen() {
        for (let i = 2; i <= 7; i++) {
            for (let j = 2; j <= 8; j++) {
                let block = document.querySelector('.x' + j + '.y' + i)
                block.classList.add('kitchenblock')
                block.classList.add('fridge')
            }
        }
        for (let i = 2; i <= 7; i++) {
            for (let j = 9; j <= 19; j++) {
                let block = document.querySelector('.x' + j + '.y' + i)
                block.classList.add('kitchenblock')
                block.classList.add('shell')
            }
        }
        for (let i = 2; i <= 7; i++) {
            for (let j = 20; j <= 25; j++) {
                let block = document.querySelector('.x' + j + '.y' + i)
                block.classList.add('kitchenblock')
                block.classList.add('furnace')
            }
        }
        for (let i = 2; i <= 7; i++) {
            for (let j = 26; j <= 31; j++) {
                let block = document.querySelector('.x' + j + '.y' + i)
                block.classList.add('kitchenblock')
                block.classList.add('locker')
            }
        }
        for (let i = 23; i <= 28; i++) {
            for (let j = 2; j <= 15; j++) {
                let block = document.querySelector('.x' + j + '.y' + i)
                block.classList.add('kitchenblock')
                block.classList.add('sink')
            }
        }
    }
    Kitchen();
    document.addEventListener('keydown', KeyRPressed)
    function Start() {

        document.querySelector('#chooseouter').classList.add('hidden')
        snake.forEach((el) => { el.classList.remove('snake') })
        x = 28;
        y = 11;
        snake = []
        snake[0] = document.querySelector('.x24.y10')
        snake[1] = document.querySelector('.x24.y11')
        snake[2] = document.querySelector('.x25.y11')
        snake[3] = document.querySelector('.x26.y11')
        snake[4] = document.querySelector('.x27.y11')
        snake[5] = document.querySelector('.x28.y11')
        snake.forEach((el) => { el.classList.add('snake'); el.classList.remove('ice') })
    }
    Start();
    document.querySelector('.x9.y37').classList.add('friend')
    document.querySelector('.x10.y37').classList.add('friend')
    document.querySelector('.x9.y38').classList.add('friend')
    document.querySelector('.x9.y39').classList.add('friend')
    document.querySelector('.x10.y39').classList.add('friend')
    document.querySelector('.x11.y39').classList.add('friend')
    document.querySelector('.x12.y39').classList.add('friend')
    document.addEventListener('keydown', EscPressed)
    document.querySelector('#anchor').scrollIntoView();
    cell = document.querySelector('.x30.y16')
    var classes = []
    classes = Object.keys(dish.parameters)
    document.addEventListener('keydown', FreeMovekeypressed)
    document.querySelector('#satan5').classList.remove('hidden')
    document.querySelector('#satan5').classList.add('slidefromdown')
    setTimeout(() => {
        document.querySelector('#satan5').classList.remove('slidefromdown')
        opponent = 'devil'
        document.addEventListener('keydown', TalkWithDevil)
        ShowMessageDown(devilreplic[devilreplicnumber])
    }, 2000);
    var hellsong = document.querySelector('#hellsong')
    hellsong.volume=0.5
    var friendsong2 = document.querySelector('#friendsong2')
    hellsong.play();
    document.querySelector('#loadingmessage').classList.add('hidden');

    function Bluecount() {
        let counter = document.querySelector('#bluecounter>text')
        counter.classList.add('eaten');
        setTimeout(() => {
            counter.classList.remove('eaten');
        }, 1000);
        counter.innerHTML = foodEaten;
    }


    function Goldencount() {
        let counter = document.querySelector('#goldencounter>text')
        counter.classList.add('eaten');
        setTimeout(() => {
            counter.classList.remove('eaten');
        }, 1000);
        counter.innerHTML = extrafoodEaten;
    }

    function ShowMessage(text, flag) {
        if (text != 0) {
            document.querySelector('#message').classList.add('hidden');
            document.querySelector('#message').classList.remove('hidden');
            document.querySelector('#message>text').innerHTML = text;
            if (flag != 'constant') {
                setTimeout(() => {
                    document.querySelector('#message').classList.add('hidden');
                }, 3000);
            }
        }
    }
    var disappear
    function ShowThought(text) {
        if (text != 0) {
            document.querySelector('#thoughtsdarker').classList.remove('hidden')
            document.querySelector('#thoughtsdarker').classList.add('opacityshow')
            clearTimeout(disappear)
            document.querySelector('#thought').classList.add('hidden');
            document.querySelector('#thought').classList.remove('hidden');
            document.querySelector('#thought>text').innerHTML = text;
            disappear = setTimeout(() => {
                document.querySelector('#thought').classList.add('hidden');
                document.querySelector('#thoughtsdarker').classList.add('hidden')
                document.querySelector('#thoughtsdarker').classList.remove('opacityshow')
            }, 4000);
        }
    }
    var ThoughtsInterval
    function Thoughts() {
        clearInterval(ThoughtsInterval)
        ThoughtsInterval = setInterval(() => {
            let random = Math.random()
            let thought
            if (random < 0.1) {
                thought = 'Что будет, если поджарить красный перец до черной корки?..'
            }
            else if (random < 0.2) {
                thought = 'Мы все состоим <darkredtext>из кода</darkredtext>. Даже <darkredtext>корм</darkredtext>! Вот это да...'
            }
            else if (random < 0.3) {
                thought = 'После смены пойду навещу своего пятипалого друга'
            }
            else if (random < 0.4) {
                thought = 'Лишь бы он не потратил весь растворимый кофе...'
            }
            else if (random < 0.5) {
                thought = '*мысли на неизвестном языке*'
            }
            else if (random < 0.6) {
                thought = 'В 12 доставка еды, в 17 конец смены, а в 18 уже встреча... Успею ли?'
            }
            else if (random < 0.7) {
                thought = document.querySelector(snake[snake.length - 1])
            }
            else if (random < 0.8) {
                thought = 'Интересно, как ' + result_text + ' на вкус? Приготовлю на досуге'
            }
            else if (random < 0.9) {
                thought = '<darkredtext>Просмотр кода элемента... Просмотр кода элемента...</darkredtext>'
            }
            else if (random < 1) {
                thought = '1. Сходить к нотариусу подписать документы \n2. Заказать стройматериалы \n3. Сходить за новыми грешниками'
            }
            ShowThought(thought)
        }, 16000);
    }
    function Sink(text) {
        if (text != 0) {
            document.querySelector('#cmessage').classList.add('hidden');
            document.querySelector('#cmessage').classList.remove('hidden');
            document.addEventListener('keydown', SinkEnter)
        }
    }
    function SinkEnter(e) {
        let key = `${e.code}`
        switch (key) {
            case 'KeyC':
                ShowMessage('Смыто в раковину');
                document.removeEventListener('keydown', SinkEnter)
                document.querySelector('#cmessage').classList.add('hidden');
                document.querySelector('#ingredients').classList.add('hidden')
                ClearAll()
                break;
        }
    }
    function ClearAll() {
        processed = ''
        thing = ''
        added = ''
        dish.Delete()
        document.querySelector('#ingredients').classList.add('hidden')
        for (let i = 0; i < classes.length; i++) {
            cell.classList.remove(classes[i])
        }
    }
    var message = [];




    function Redcounter() {
        let counter = document.querySelector('#redcounter>text')
        counter.classList.add('eaten');
        setTimeout(() => {
            counter.classList.remove('eaten');
        }, 1000);
        counter.innerHTML = sins;
    }

    function CircleEnding() {
        blackend.classList.remove('hidden')
        blackend.classList.add('blackanim')
        let counter = 50
        let musicvolume = setInterval(() => {
            counter--
            hellsong.volume = counter / 100
            if (counter == 0) {
                clearInterval(musicvolume)
            }
        }, 100);
        document.removeEventListener('keydown', TalkWithDevil)
        endingmessage[1] = 'Хотите узнать, чем закончилась история змеи?'
        endingmessage[2] = 'Вы действительно думаете, что она закончилась?'
        endingmessage[3] = 'Присаживайтесь рядом, я расскажу вам, что такое вечность.'
        endingmessage[4] = 'extraend'
        setTimeout(() => {
            blackend.classList.remove('blackanim')
        }, 5000);
        setTimeout(() => {
            document.addEventListener('keydown', EndingMonologue)
            ShowMessageEnding(endingmessage[endingmessagenumber])
        }, 12000);
    }
    function ExtraFoodCooked() {
        clearInterval(ThoughtsInterval)
        snake.push(document.querySelector('.x' + (x) + '.y' + y))
        snake[snake.length - 1].classList.add('snake');
        document.querySelector('.x' + (x) + '.y' + y).classList.remove('extrafood');
        for (let i = 0; i < 5; i++) {
            let spawned = false
            while (!spawned) {
                let xf = 1 + Math.floor((Math.random()) * 49);
                let yf = 1 + Math.floor((Math.random()) * 28);
                if (!document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('food') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('kitchenblock') && !(document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('block')) && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('invblock') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('snake')) {
                    document.querySelector('.x' + (xf) + '.y' + yf).classList.add('food');
                    spawned = true
                }
                else {
                    spawned = false
                }
            }
        }
        let audio = new Audio();
        audio.src = 'sound/extrafood.mp3';
        audio.autoplay = true;
        document.removeEventListener('keydown', TalkWithDevil)
        document.querySelector('#devilmessage').classList.add('hidden')
        document.removeEventListener('keydown', FreeMovekeypressed)
        document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
        document.querySelector('#satan2').classList.remove('hidden')
        hellsong.pause()
        setTimeout(() => {
            document.addEventListener('keydown', TalkWithDevil)
            document.querySelector('#satan2').classList.add('hidden')
            document.querySelector('#satan5').classList.remove('hidden')
            hellsong.play()
            let audio = new Audio();
            audio.src = 'sound/applause.mp3';
            audio.autoplay = true;
            devilreplicnumber = 1
            devilreplic = []
            devil = []
            devilreplic[1] = 'Поздравляю! Ты прошел стажировку и теперь принят на работу :)'
            devil[1] = 5
            devilreplic[2] = 'Даже больше! Ты сразу же повышен до руководящей должности'
            devil[2] = 5
            devilreplic[3] = 'Никто из последних работников не умеет готовить этот вид корма'
            devil[3] = 5
            devilreplic[4] = 'В следующую пятницу будет корпоратив, будем ждать тебя всем офисом'
            devil[4] = 5
            devilreplic[5] = 'А на сегодня твой рабочий день закончен, завтра приходи в 11'
            devil[5] = 5
            devilreplic[6] = 'extraending'
            devil[6] = 5
            ShowMessageDown(devilreplic[devilreplicnumber])
        }, 5000);
    }
    function FoodCooked() {
        clearInterval(ThoughtsInterval)
        snake.push(document.querySelector('.x' + (x) + '.y' + y))
        snake[snake.length - 1].classList.add('snake');
        document.querySelector('.x' + (x) + '.y' + y).classList.remove('food');
        let spawned = false
        while (!spawned) {
            let xf = 1 + Math.floor((Math.random()) * 49);
            let yf = 1 + Math.floor((Math.random()) * 28);
            if (!document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('food') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('kitchenblock') && !(document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('block')) && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('invblock') && !document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('snake')) {
                document.querySelector('.x' + (xf) + '.y' + yf).classList.add('food');
                spawned = true
            }
            else {
                spawned = false
            }
        }
        let audio = new Audio();
        audio.src = 'sound/food.mp3';
        audio.autoplay = true;
        document.removeEventListener('keydown', TalkWithDevil)
        document.querySelector('#devilmessage').classList.add('hidden')
        document.removeEventListener('keydown', FreeMovekeypressed)
        document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
        document.querySelector('#satan2').classList.remove('hidden')
        hellsong.pause()
        setTimeout(() => {
            document.addEventListener('keydown', TalkWithDevil)
            document.querySelector('#satan2').classList.add('hidden')
            document.querySelector('#satan5').classList.remove('hidden')
            hellsong.play()
            let audio = new Audio();
            audio.src = 'sound/applause.mp3';
            audio.autoplay = true;
            devilreplicnumber = 1
            devilreplic = []
            devil = []
            devilreplic[1] = 'Поздравляю! Ты прошел стажировку и теперь принят на работу :)'
            devil[1] = 5
            devilreplic[2] = 'Ты первый за две недели, кто смог трудоустроиться у нас'
            devil[2] = 5
            devilreplic[3] = 'На сегодня твой рабочий день закончен, завтра приходи в 9'
            devil[3] = 5
            devilreplic[4] = 'ending'
            devil[4] = 5
            ShowMessageDown(devilreplic[devilreplicnumber])
        }, 5000);
    }
    var endingmessage = []
    endingmessage[1] = 'Когда-то давно на зеленой планете появились удивительные существа'
    endingmessage[2] = 'Сразу было видно, что они отличаются от остальных созданий, населяющих Землю'
    endingmessage[3] = 'Они не просто жили ради пропитания и размножения'
    endingmessage[4] = 'Нет...'
    endingmessage[5] = 'Их народ перевернул вверх дном все ценности, существовавшие до этого'
    endingmessage[6] = 'Сочетая несочетаемое, переосмысливая имеющееся, он обрел чувство прекрасного и начал стремиться к нему'
    endingmessage[7] = 'Но были ли они полностью такими чистыми и свободными?'
    endingmessage[8] = 'Конечно, нет'
    endingmessage[9] = 'Само их существование строилось на противоречиях'
    endingmessage[10] = 'Их история закончена. И уже мало кто хранит в памяти те события'
    endingmessage[11] = 'Мой друг...'
    endingmessage[12] = 'А помнишь ли ты?..'
    endingmessage[13] = 'Помнишь ли ты то, с чего все началось?'
    endingmessage[14] = 'end'
    var endingmessagenumber = 1
    var blackend = document.querySelector('#blackend')
    function TheFallEnding() {
        blackend.classList.remove('hidden')
        blackend.classList.add('blackanim')
        let counter = 50
        let musicvolume = setInterval(() => {
            hellsong.volume = counter / 100
            counter--
            if (counter == 0) {
                clearInterval(musicvolume)
            }
        }, 100);
        document.querySelector('#exhausted').play()
        document.removeEventListener('keydown', TalkWithDevil)
        setTimeout(() => {
            hellsong.pause()
            blackend.classList.remove('blackanim')
        }, 5000);
        setTimeout(() => {
            document.addEventListener('keydown', EndingMonologue)
            ShowMessageEnding(endingmessage[endingmessagenumber])
        }, 7000);
    }
    var EndingMonologue = (e) => {
        let key = `${e.code}`;
        switch (key) {
            case 'Enter':
                endingmessagenumber++;
                ShowMessageEnding(endingmessage[endingmessagenumber])
                if (endingmessagenumber == 8) {
                    let audio = new Audio
                    audio.src = 'sound/hihihi.mp3'
                    audio.autoplay = true
                }
                if (endingmessage[endingmessagenumber] == 'end') {
                    document.querySelectorAll('.food').forEach(el => el.classList.remove('food'));
                    ClearAll()
                    document.querySelector('#endingmessage').classList.add('hidden')
                    document.removeEventListener('keydown', EndingMonologue)
                    blackend.classList.add('blackanim2')
                    document.querySelector('#TheFall').classList.remove('hidden')
                    document.querySelectorAll('td').forEach((el) => { el.classList.add('transparentblock') })
                    let redsnake = []
                    redsnake.push(document.querySelector('.x17.y3'))
                    redsnake.push(document.querySelector('.x17.y4'))
                    redsnake.push(document.querySelector('.x18.y4'))
                    redsnake.push(document.querySelector('.x19.y4'))
                    redsnake.push(document.querySelector('.x19.y5'))
                    redsnake.push(document.querySelector('.x19.y6'))
                    let food = []
                    food.push(document.querySelector('.x20.y8'))
                    food.push(document.querySelector('.x14.y18'))
                    redsnake.forEach((el) => { el.classList.remove('transparentblock'); el.classList.add('redsnake') })
                    food.forEach((el) => { el.classList.remove('transparentblock'); el.classList.add('food') })
                    document.querySelectorAll('.kitchen').forEach((el) => { el.classList.add('hidden') })
                    document.querySelectorAll('.block').forEach((el) => { el.classList.remove('block') })
                    document.querySelector('hr').classList.add('hidden')
                    document.querySelectorAll('.friend').forEach((el) => el.classList.remove('friend'))
                    document.querySelectorAll('.counter').forEach((el) => el.classList.add('hidden'))
                    document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
                    document.querySelector('#devilmessage').classList.add('hidden')
                    document.querySelector('#ingredients').classList.add('hidden')
                    setTimeout(() => {
                        blackend.classList.remove('blackanim2')
                        blackend.classList.add('hidden')
                        Achieve(3, 'The Fall Ending')
                    }, 5000);
                    setTimeout(() => {
                        document.addEventListener('keydown', KeyRPressed)
                        ShowMessage('Нажмите R, чтобы начать все сначала.', 'constant')
                    }, 12500);

                }
                if (endingmessage[endingmessagenumber] == 'extraend') {
                    ClearAll()
                    document.querySelector('#endingmessage').classList.add('hidden')
                    document.removeEventListener('keydown', EndingMonologue)
                    let audio = new Audio
                    audio.src = 'sound/174912.mp3'
                    audio.autoplay = true
                    setTimeout(() => {
                        document.addEventListener('keydown', KeyRPressed)
                        Achieve(5, 'Eternal Ending')
                        let counter = 0
                        let musicvolume2 = setInterval(() => {
                            counter++
                            hellsong.volume = counter / 100
                            if (counter == 7) {
                                clearInterval(musicvolume2)
                            }
                        }, 500);
                    }, 20000);
                }
                break;
            default:
                return;
                break;
        }
    }

    function Teleport() {
        ClearVisualEffectsOnSnake()
        document.querySelector('#chooseouter').classList.add('hidden')
        snake[snake.length - 1] = document.querySelector('.x' + (x) + '.y' + y)
        snake[snake.length - 1].classList.add('snake')
        let xxx = x
        let yyy = y
        let xcurrent = x
        let ycurrent = y
        let spawned = 0
        let first = true
        for (let i = snake.length - 2; i >= 0;) {

            if (spawned) {
                first = false
                spawned = 0
                i--
                xcurrent = xxx
                ycurrent = yyy
                continue;
            }
            xxx = xcurrent
            yyy = ycurrent
            let random = Math.random()
            if (random < 0.25) {
                xxx++
                if (first) {
                    lastmove = 'left'
                }
            }
            if (random >= 0.25 && random < 0.5) {
                xxx--
                if (first) {
                    lastmove = 'right'
                }
            }
            if (random >= 0.5 && random < 0.75) {
                yyy++
                if (first) {
                    lastmove = 'up'
                }
            }
            if (random >= 0.75 && random < 1) {
                yyy--
                if (first) {
                    lastmove = 'down'
                }
            }
            if (!document.querySelector('.x' + (xxx) + '.y' + yyy).classList.contains('block') && !document.querySelector('.x' + (xxx) + '.y' + yyy).classList.contains('snake') && !document.querySelector('.x' + (xxx) + '.y' + yyy).classList.contains('kitchenblock')) {
                spawned = 1
                snake[i] = document.querySelector('.x' + (xxx) + '.y' + yyy)
                snake[i].classList.add('snake')
            }
        }
        snake.forEach(el => {
            el.classList.add('teleported')
            el.classList.remove('ice')
        });
        setTimeout(() => {
            document.querySelectorAll('.teleported').forEach(el => {
                el.classList.remove('teleported')
            });
        }, 500);
        let audio = new Audio
        audio.src = 'sound/teleport.mp3'
        audio.autoplay = true
        if (green) {
            snake.forEach((el) => el.classList.add('greensnake'))
        }
        if (yellow) {
            snake[snake.length - 1].classList.add('yellowd')
        }
    }
    function Poison() {
        poisonremained--
        let poison = document.querySelector('#poison')
        poisonopacity += 0.0018
        poison.style.opacity = poisonopacity;
        let poisoncounter = document.querySelector('#poisoncounter>text')
        poisoncounter.innerHTML = poisonremained

        if (poisonremained == 30) {
            let poisoncounterOuter = document.querySelector('#poisoncounter')
            poisoncounterOuter.classList.add('poisondanger')
        }
        if (poisonremained == 0) {
            snake.forEach((el) => { el.classList.add('poison') })
            GameOver()
            ShowMessage('Вы были отравлены', 'constant')
        }
        let audio = new Audio
        audio.volume = 0.5
        audio.src = 'sound/hungerrr.mp3'
        audio.autoplay = true
    }

    function Sounds(e) {
        let key = `${e.code}`;
        switch (key) {
            case 'ArrowLeft':
                let string1 = new Audio
                string1.src = 'sound/string1.mp3'
                string1.autoplay = true
                break;
            case 'ArrowRight':
                let string3 = new Audio
                string3.src = 'sound/string3.mp3'
                string3.autoplay = true
                break;
            case 'ArrowDown':
                let string2 = new Audio
                string2.src = 'sound/string2.mp3'
                string2.autoplay = true
                break;
            case 'ArrowUp':
                let string4 = new Audio
                string4.src = 'sound/string4.mp3'
                string4.autoplay = true
                break;
            case 'Enter':
                let string5 = new Audio
                string5.src = 'sound/string5.mp3'
                string5.autoplay = true
                break;
            case 'KeyE':
                let stringAccord = new Audio
                stringAccord.src = 'sound/stringAccord.mp3'
                stringAccord.autoplay = true
        }
    }




    function NextBlock(dir, auto) {

        try {
            if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('ice')) {
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('furnace')) {
                    CookingChoose(furnace, furnacehint)
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('locker')) {
                    CookingChoose(locker, lockerhint)
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('shell')) {
                    CookingChoose(shell, shellhint)
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('fridge')) {
                    CookingChoose(fridge, fridgehint)
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('sink')) {
                    Sink();
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat')) {
                    let random = Math.random()
                    let meow = new Audio
                    if (random < 0.25) {
                        meow.src = 'sound/cat/meow.mp3'
                    }
                    else if (random < 0.5) {
                        meow.src = 'sound/cat/tired.mp3'
                    }
                    meow.autoplay = true
                }

                x = lastx;
                y = lasty
                if (purple) {
                    if (Math.random() < 0.25) {
                        let spawned = false
                        while (!spawned) {
                            xx = Math.floor(Math.random() * 57) + 2
                            yy = Math.floor(Math.random() * 26) + 2
                            if (!document.querySelector('.x' + (xx) + '.y' + yy).classList.contains('block') && !document.querySelector('.x' + (xx) + '.y' + yy).classList.contains('snake') && !document.querySelector('.x' + (xx) + '.y' + yy).classList.contains('kitchenblock')) {
                                x = xx; y = yy;
                                spawned = 1
                                Teleport();
                            }
                        }
                    }
                }
                if (document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x + 1) + '.y' + y).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('ice')) {
                    if (document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('ice')) {
                        if (document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('block') || document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('snake') || document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('ice')) {
                            if (document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('block') || document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('snake') || document.querySelector('.x' + (x - 1) + '.y' + y).classList.contains('kitchenblock') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('cat') || document.querySelector('.x' + (x) + '.y' + y).classList.contains('ice')) {

                                let audio = new Audio();
                                audio.src = 'sound/gameover.mp3';
                                audio.autoplay = true;
                                Start();
                            }
                        }
                    }

                }

            }
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('extrafood')) {
                ExtraFoodCooked();
            }
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('food')) {
                FoodCooked();
            }

            else {

                lastmove = dir;
                snake[0].classList.remove('snake');
                if (green) {
                    snake[0].classList.remove('greensnake');
                    if (auto != 'auto') {
                        if (Math.random() < 0.90)
                            snake[0].classList.add('slippery');
                    }
                }
                if (yellow) {
                    snake[snake.length - 1].classList.remove('yellowd');
                }
                if (catspawned) {
                    if (document.querySelector('.x30.y16').classList.contains('death')) {
                        let lastxc = xc[cat.length - 1]
                        let lastyc = yc[cat.length - 1]
                        if (xc[cat.length - 1] < 30) {
                            xc[cat.length - 1]++
                            cat[cat.length - 1].classList.remove('cat')
                            cat[cat.length - 1] = document.querySelector('.x' + xc[cat.length - 1] + '.y' + yc[cat.length - 1])
                            cat[cat.length - 1].classList.add('cat')
                        }
                        if (xc[cat.length - 1] > 30) {
                            xc[cat.length - 1]--
                            cat[cat.length - 1].classList.remove('cat')
                            cat[cat.length - 1] = document.querySelector('.x' + xc[cat.length - 1] + '.y' + yc[cat.length - 1])
                            cat[cat.length - 1].classList.add('cat')
                        }
                        if (yc[cat.length - 1] < 16) {
                            yc[cat.length - 1]++
                            cat[cat.length - 1].classList.remove('cat')
                            cat[cat.length - 1] = document.querySelector('.x' + xc[cat.length - 1] + '.y' + yc[cat.length - 1])
                            cat[cat.length - 1].classList.add('cat')
                        }
                        if (yc[cat.length - 1] > 16) {
                            yc[cat.length - 1]--
                            cat[cat.length - 1].classList.remove('cat')
                            cat[cat.length - 1] = document.querySelector('.x' + xc[cat.length - 1] + '.y' + yc[cat.length - 1])
                            cat[cat.length - 1].classList.add('cat')
                        }
                        if (document.querySelector('.x' + xc[cat.length - 1] + '.y' + yc[cat.length - 1]).classList.contains('death')) {
                            let dead = new Audio
                            dead.src = 'sound/cat/dead.mp3'
                            dead.autoplay = true
                            yc[cat.length - 1] = lastyc
                            xc[cat.length - 1] = lastxc
                            cat[cat.length - 1].classList.remove('cat')
                            cat[cat.length - 1] = document.querySelector('.x' + xc[cat.length - 1] + '.y' + yc[cat.length - 1])
                            cat[cat.length - 1].classList.remove('cat')
                            cat[cat.length - 1].classList.add('deadcat')
                            cat.splice(cat.length - 1)
                            document.querySelector('.x30.y16').classList.remove('death')
                            ClearAll();
                            document.addEventListener('keydown', TalkWithDevil)
                            devilreplicnumber = 1
                            devilreplic = []
                            devil = []
                            devilreplic[1] = 'Похоже, он погиб защищая твою жизнь... Какая глупая жертва'
                            devil[1] = 2
                            devilreplic[2] = 'Но ты не унывай! Думай позитивно:'
                            devil[2] = 2
                            devilreplic[3] = 'Если бы ты не создал его, то сейчас был бы на его месте'
                            devil[3] = 2
                            devilreplic[4] = 'Ладно, хорошо, я согласен его похоронить, но только в конце рабочего дня!'
                            devil[4] = 2
                            devilreplic[5] = 'continue'
                            devil[5] = 2
                            ShowMessageDown(devilreplic[devilreplicnumber])
                        }



                    }
                    else {
                        clearTimeout(catforward)
                        catforward = setTimeout(() => {
                            for (let i = 0; i < cat.length; i++) {
                                let random = Math.random()
                                if ((x - xc[i]) > Math.floor(random * 3 + 2)) {
                                    CatMovement('right')
                                }
                                if ((xc[i] - x) > Math.floor(random * 3 + 2)) {
                                    CatMovement('left')
                                }
                                if ((y - yc[i]) > Math.floor(random * 3 + 2)) {
                                    CatMovement('down')
                                }
                                if ((yc[i] - y) > Math.floor(random * 3 + 2)) {
                                    CatMovement('up')
                                }
                            }


                            /*if (Math.abs(y-yc)>Math.floor(Math.random*5+4)){
                                
                            }*/

                        }, 1000);
                    }


                }
                if (fearspawned == 1) {
                    if (x >= 26 && x <= 34 && y >= 12 && y <= 20) {
                        fear = document.querySelector('.x30.y16')
                        xf = 30
                        yf = 16
                        document.addEventListener('keydown', TalkWithDevil)
                        document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
                        document.querySelector('#satan3').classList.remove('hidden')
                        devilreplic = []
                        devil = []
                        devilreplicnumber = 1
                        devilreplic[1] = 'Эй, куда он убежал'
                        devil[1] = 3
                        devilreplic[2] = 'Лови его!!!'
                        devil[2] = 3
                        devilreplic[3] = 'fearrace'
                        devil[3] = 3
                        ShowMessageDown(devilreplic[devilreplicnumber])
                        fearspawned = 2
                    }
                }
                if (fearspawned == 2) {
                    if (y >= yf - 3 && y <= yf + 3 && x <= xf + 3 && x >= xf - 3) {
                        if ((y <= yf - 2 || y >= yf + 2) || (x >= xf + 2 || x <= xf - 2)) {
                            FearNextBlock(lastmove)
                        }
                        else {
                            if (x != xf && y != yf) {
                                if (y > yf) {
                                    FearNextBlock('down')
                                }
                                if (y < yf) {
                                    FearNextBlock('up')
                                }
                            }
                            else if (x == xf) {
                                let random = Math.random()
                                if (random < 0.5) {
                                    FearNextBlock('left')
                                    if (xf == lastxf && yf == lastyf) {
                                        FearNextBlock('right')
                                    }
                                }
                                else {
                                    FearNextBlock('right')
                                    if (xf == lastxf && yf == lastyf) {
                                        FearNextBlock('left')
                                    }
                                }
                            }
                            else if (y == yf) {
                                let random = Math.random()
                                if (random < 0.5) {
                                    FearNextBlock('up')
                                    if (xf == lastxf && yf == lastyf) {
                                        FearNextBlock('down')
                                    }
                                }
                                else {
                                    FearNextBlock('down')
                                    if (xf == lastxf && yf == lastyf) {
                                        FearNextBlock('up')
                                    }
                                }
                            }
                        }

                    }

                }
                for (let i = 0; i < snake.length - 1; i++) {
                    snake[i] = snake[i + 1]
                }
                snake[snake.length - 1] = document.querySelector('.x' + (x) + '.y' + y)
                snake[snake.length - 1].classList.add('snake');
                if (green) {
                    snake[snake.length - 1].classList.add('greensnake');
                }
                if (yellow) {
                    snake[snake.length - 1].classList.add('yellowd');
                }
                if (!indialogue)
                    document.querySelector('#chooseouter').classList.add('hidden')
                document.querySelector('#cmessage').classList.add('hidden')
                document.removeEventListener('keydown', SinkEnter)
                if (firespawned) {
                    for (let i = 1; i <= 45; i++) {
                        if (!document.querySelector('.x' + (x) + '.y' + y).classList.contains('hiddentrap'))
                            document.querySelector('.hiddentrap' + i).classList.remove('trap')

                    }
                }
                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('trap')) {
                    document.querySelector('.x' + (x) + '.y' + y).classList.remove('trap')
                    document.querySelector('.x' + (x + 1) + '.y' + y).classList.remove('showtrap')
                    document.querySelector('.x' + (x - 1) + '.y' + y).classList.remove('showtrap')
                    document.querySelector('.x' + (x) + '.y' + (y + 1)).classList.remove('showtrap')
                    document.querySelector('.x' + (x) + '.y' + (y - 1)).classList.remove('showtrap')
                    let firstsnake = snake[snake.length - 1]
                    firstsnake.classList.add('fired')
                    snake.splice(snake.length - 1)
                    if (snake.length == 0) {
                        GameOver()
                    }
                    document.querySelector('#fired').classList.remove('hidden')
                    document.querySelector('#fired').classList.add('opacityToZero')
                    setTimeout(() => {
                        document.querySelector('#fired').classList.remove('opacityToZero')
                        document.querySelector('#fired').classList.add('hidden')
                    }, 300);
                    setTimeout(() => {
                        firstsnake.classList.remove('snake')
                        firstsnake.classList.remove('fired')
                    }, 1000);
                    x = lastx
                    y = lasty

                    let fire = new Audio();
                    fire.src = 'sound/fire.mp3';
                    fire.autoplay = true;
                    let audio = new Audio();
                    audio.src = 'sound/hurt.mp3';
                    audio.autoplay = true;
                }


                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('hurt')) {
                    ClearAll();
                    let redhurt = document.querySelector('#hurt')
                    redhurt.classList.remove('hidden')
                    redhurt.classList.add('opacityToZero')
                    setTimeout(() => {
                        redhurt.classList.remove('opacityToZero')
                        redhurt.classList.add('hidden')
                    }, 1000);
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplic = []
                    devil = []
                    devilreplicnumber = 1
                    devilreplic[1] = 'Наша рабочая страховка не оплатит тебе лечение в случае травм'
                    devil[1] = 2
                    devilreplic[2] = 'Все страховые случаи описаны в пункте 29 рабочего договора'
                    devil[2] = 2
                    devilreplic[3] = 'continue'
                    devil[3] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    for (let i = 0; i <= snake.length - 2; i++) {
                        snake[i] = snake[i + 1]
                    }
                    snake.splice(snake.length - 1)
                    for (let i = 0; i <= snake.length - 2; i++) {
                        snake[i] = snake[i + 1]
                    }
                    snake.splice(snake.length - 1)
                    if (snake.length == 0) {
                        GameOver()
                    }

                    let audio = new Audio();
                    audio.src = 'sound/hurt.mp3';
                    audio.autoplay = true;
                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('green')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Жуткий запах...'
                    devil[1] = 1
                    devilreplic[2] = 'Как ты вообще это ешь?'
                    devil[2] = 1
                    devilreplic[3] = 'continue'
                    devil[3] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    green = true
                    snake.forEach((el) => { el.classList.add('greensnake') })
                    let audio = new Audio();
                    audio.src = 'sound/slippery.mp3';
                    audio.autoplay = true;
                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('blur')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Ты в порядке?'
                    devil[1] = 5
                    devilreplic[2] = 'Ты только что на секунду потерял сознание'
                    devil[2] = 2
                    devilreplic[3] = 'В любом случае, что бы не произошло на этой кухне, в этом виноват ты сам'
                    devil[3] = 5
                    devilreplic[4] = 'continue'
                    devil[4] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    document.querySelector('#blur').classList.remove('hidden')
                    document.querySelector('#blur').classList.add('blurstart')
                    let counter = 0
                    let musicvolume = setInterval(() => {
                        hellsong.volume = counter / 100
                        counter++
                        if (counter == 50) {
                            clearInterval(musicvolume)
                        }
                    }, 100);
                    setTimeout(() => {
                        document.querySelector('#blur').classList.remove('blurstart')
                        document.querySelector('#blur').classList.add('blurcontinue')
                    }, 5000);
                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('yellow')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'У тебя получилось!'
                    devil[1] = 5
                    devilreplic[2] = 'Хотя... что у тебя получилось?..'
                    devil[2] = 2
                    devilreplic[3] = 'continue'
                    devil[3] = 5
                    snake[snake.length - 1].classList.add('yellowd')
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    yellow = true
                    let audio = new Audio();
                    audio.src = 'sound/electricity.mp3';
                    audio.autoplay = true;
                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('purple')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Похоже, теперь ты проклят'
                    devil[1] = 2
                    devilreplic[2] = 'И похоже, проклятье не снять'
                    devil[2] = 2
                    devilreplic[3] = 'Потому что оно наложено каким-то опытным и сильным магом'
                    devil[3] = 2
                    devilreplic[4] = 'Ну или ты опять смешал то, что смешивать не стоит'
                    devil[4] = 5
                    devilreplic[5] = 'continue'
                    devil[5] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    purple = true
                    let audio = new Audio();
                    audio.src = 'sound/cosmos.mp3';
                    audio.autoplay = true;
                    let spawned = false
                    let xx; let yy;
                    while (!spawned) {
                        xx = Math.floor(Math.random() * 57) + 2
                        yy = Math.floor(Math.random() * 26) + 2
                        if (!document.querySelector('.x' + (xx) + '.y' + yy).classList.contains('block') && !document.querySelector('.x' + (xx) + '.y' + yy).classList.contains('snake') && !document.querySelector('.x' + (xx) + '.y' + yy).classList.contains('kitchenblock')) {
                            x = xx; y = yy;
                            spawned = 1
                            Teleport();
                        }
                    }
                }


                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('catfood')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'О, как мило!'
                    devil[1] = 5
                    devilreplic[2] = 'Ты сделал себе друга'
                    devil[2] = 5
                    devilreplic[3] = 'Создал жизнь буквально из ничего'
                    devil[3] = 5
                    devilreplic[4] = 'continue'
                    devil[4] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    let audio = new Audio();
                    audio.src = 'sound/cat/meow.mp3';
                    audio.autoplay = true;
                    let spawned = false
                    let xx
                    let yy
                    while (!spawned) {
                        xx = Math.floor(Math.random() * 4 + 28)
                        yy = Math.floor(Math.random() * 4 + 14)
                        if (document.querySelector('.x' + xx + '.y' + yy).classList.contains('snake')) {
                            spawned = false
                        }
                        else {
                            spawned = true
                            cat.push(document.querySelector('.x' + xx + '.y' + yy))
                            cat[cat.length - 1].classList.add('cat')
                            xc[cat.length - 1] = xx
                            yc[cat.length - 1] = yy
                            catspawned = true
                        }
                    }
                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('fear')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    fear.classList.remove('fear')
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Поймал!'
                    devil[1] = 5
                    devilreplic[2] = 'Но не жди, что я буду тебя благодарить'
                    devil[2] = 5
                    devilreplic[3] = 'Иди готовь корм!'
                    devil[3] = 5
                    devilreplic[4] = 'continue'
                    devil[4] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    let audio = new Audio();
                    audio.src = 'sound/applause.mp3';
                    audio.autoplay = true;
                    fearspawned = 0
                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('freeze')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Холодно?'
                    devil[1] = 5
                    devilreplic[2] = 'Я бы мог тебе помочь и включить подогрев'
                    devil[2] = 5
                    devilreplic[3] = 'Но, к сожалению время для этого еще не пришло ;)'
                    devil[3] = 5
                    devilreplic[4] = 'Так что справишься сам'
                    devil[4] = 5
                    devilreplic[5] = 'continue'
                    devil[5] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    document.querySelector('#freeze').classList.remove('hidden')
                    for (let yy = 2; yy <= 28; yy++) {
                        for (let xx = 2; xx <= 59; xx++) {
                            if (!((xx == 29 || xx == 30 || xx == 31) && (yy == 15 || yy == 16 || yy == 17))) {
                                if (!document.querySelector('.x' + xx + '.y' + yy).classList.contains('cat') && !document.querySelector('.x' + xx + '.y' + yy).classList.contains('snake')) {
                                    document.querySelector('.x' + xx + '.y' + yy).classList.add('ice')
                                    document.querySelector('.x' + xx + '.y' + yy).classList.remove('slippery')
                                }
                            }
                            if (!portals){
                                document.querySelector('.x' + xx + '.y' + yy).onclick = function () {
                                    if (this.classList.contains('ice')) {
                                        this.classList.remove('ice')
                                        let ice = new Audio();
                                        ice.src = 'sound/ice.mp3';
                                        ice.autoplay = true;
                                    }
                                }
                            }
                        }

                    }
                    let audio = new Audio();
                    audio.src = 'sound/freeze.mp3';
                    audio.autoplay = true;
                    fearspawned = 0
                }


                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('firespawn')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Будь осторожен и смотри под ноги'
                    devil[1] = 5
                    devilreplic[2] = 'Никогда не знаешь, что может быть скрыто под землей ;)'
                    devil[2] = 5
                    devilreplic[3] = 'continue'
                    devil[3] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    firespawned = true
                    document.querySelector('#backfire').classList.remove('hidden')
                    firespawnedtimes++
                    let audio = new Audio();
                    audio.src = 'sound/fire.mp3';
                    audio.autoplay = true;
                    for (let i = firespawnedtimes; i <= 45 * firespawnedtimes; i++) {
                        let spawned = false
                        while (!spawned) {
                            let xx = Math.floor(Math.random() * 57 + 2)
                            let yy = Math.floor(Math.random() * 27 + 2)
                            if (document.querySelector('.x' + (xx + 1) + '.y' + yy).classList.contains('block') || document.querySelector('.x' + (xx + 1) + '.y' + yy).classList.contains('snake') || document.querySelector('.x' + (xx + 1) + '.y' + yy).classList.contains('kitchenblock') || document.querySelector('.x' + (xx + 1) + '.y' + yy).classList.contains('cat') || document.querySelector('.x' + (xx + 1) + '.y' + yy).classList.contains('showtrap')) {
                                spawned = false
                            }
                            else if (document.querySelector('.x' + (xx) + '.y' + (yy + 1)).classList.contains('block') || document.querySelector('.x' + (xx) + '.y' + (yy + 1)).classList.contains('snake') || document.querySelector('.x' + (xx) + '.y' + (yy + 1)).classList.contains('kitchenblock') || document.querySelector('.x' + (xx) + '.y' + (yy + 1)).classList.contains('cat') || document.querySelector('.x' + (xx - 1) + '.y' + yy).classList.contains('showtrap')) {
                                spawned = false
                            }
                            else if (document.querySelector('.x' + (xx) + '.y' + (yy - 1)).classList.contains('block') || document.querySelector('.x' + (xx) + '.y' + (yy - 1)).classList.contains('snake') || document.querySelector('.x' + (xx) + '.y' + (yy - 1)).classList.contains('kitchenblock') || document.querySelector('.x' + (xx) + '.y' + (yy - 1)).classList.contains('cat') || document.querySelector('.x' + (xx) + '.y' + (yy)).classList.contains('showtrap')) {
                                spawned = false
                            }
                            else if (document.querySelector('.x' + (xx - 1) + '.y' + yy).classList.contains('block') || document.querySelector('.x' + (xx - 1) + '.y' + yy).classList.contains('snake') || document.querySelector('.x' + (xx - 1) + '.y' + yy).classList.contains('kitchenblock') || document.querySelector('.x' + (xx - 1) + '.y' + (yy)).classList.contains('cat') || document.querySelector('.x' + (xx - 1) + '.y' + (yy)).classList.contains('showtrap')) {
                                spawned = false
                            }
                            else {
                                spawned = true
                                document.querySelector('.x' + (xx + 1) + '.y' + (yy)).classList.add('showtrap')
                                document.querySelector('.x' + (xx + 1) + '.y' + (yy)).setAttribute('number', i)
                                document.querySelector('.x' + (xx - 1) + '.y' + (yy)).classList.add('showtrap')
                                document.querySelector('.x' + (xx - 1) + '.y' + (yy)).setAttribute('number', i)
                                document.querySelector('.x' + (xx) + '.y' + (yy + 1)).classList.add('showtrap')
                                document.querySelector('.x' + (xx) + '.y' + (yy + 1)).setAttribute('number', i)
                                document.querySelector('.x' + (xx) + '.y' + (yy - 1)).classList.add('showtrap')
                                document.querySelector('.x' + (xx) + '.y' + (yy - 1)).setAttribute('number', i)
                                document.querySelector('.x' + (xx) + '.y' + (yy)).classList.add('hiddentrap')
                                document.querySelector('.x' + (xx) + '.y' + (yy)).classList.add('hiddentrap' + i)
                            }
                        }


                    }

                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('thoughts')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Что? Ничего не произошло?'
                    devil[1] = 5
                    devilreplic[2] = 'Ну ладно, тебе хоть повезло, что не оторвало голову'
                    devil[2] = 5
                    devilreplic[3] = 'continue'
                    devil[3] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    setTimeout(() => {
                        ShowThought('На самом деле я был бы не против, чтобы ему оторвало голову')
                    }, 7000);
                    setTimeout(() => {
                        ShowThought('Хоть чем-то разбавило бы этот рутинный будний день')
                    }, 10000);
                    setTimeout(() => {
                        Thoughts();
                    }, 13000);
                }


                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('nothing')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Что? Ничего не произошло?'
                    devil[1] = 5
                    devilreplic[2] = 'Ну ладно, тебе хоть повезло, что не оторвало голову'
                    devil[2] = 5
                    devilreplic[3] = 'Попробуй усовершенствовать рецепт'
                    devil[3] = 5
                    devilreplic[4] = 'continue'
                    devil[4] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    let audio = new Audio();
                    audio.src = 'sound/get.mp3';
                    audio.autoplay = true;
                }


                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('poison')) {
                    ClearAll();
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Похоже, ты смешал то, что действительно смешивать не стоит...'
                    devil[1] = 2
                    devilreplic[2] = 'И теперь ты умрешь через 200 шагов'
                    devil[2] = 2
                    devilreplic[3] = 'Однако у тебя есть одна надежда... и это противоядие'
                    devil[3] = 2
                    devilreplic[4] = 'Но приготовить его тебе придется самому :)'
                    devil[4] = 5
                    devilreplic[5] = 'continue'
                    devil[5] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    poisoned = true
                    friendquestion.push('Мне нужно противоядие')
                    friendquestionvar.push(['Возьми радость', 'Смешай с неизвестностью', 'Вари на душном огне', 'question'])
                    let poisonbg = document.querySelector('#poison')
                    poisonbg.classList.remove('hidden')
                    let poisoncounter = document.querySelector('#poisoncounter')
                    poisoncounter.classList.remove('hidden')
                    hellsong.setAttribute('src', 'sound/poison.mp3')
                    hellsong.play()
                    let audio = new Audio();
                    audio.src = 'sound/creek.mp3';
                    audio.autoplay = true;
                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('death')) {
                    snake.forEach((el) => { el.classList.add('white') })
                    GameOver();
                    ClearAll();
                    document.querySelector('#death').classList.remove('hidden')
                    hellsong.pause()
                    document.addEventListener('keydown', TalkWithDevil)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Эй, ты жив?'
                    devil[1] = 5
                    devilreplic[2] = 'Вижу, что не очень'
                    devil[2] = 5
                    devilreplic[3] = 'Зато рабочий день захончился раньше, чем должен был :D'
                    devil[3] = 5
                    devilreplic[4] = 'Ладно, полежи тут пока, вечером приду - уберу тебя'
                    devil[4] = 5
                    devilreplic[5] = 'death'
                    devil[5] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    let audio = new Audio();
                    audio.src = 'sound/error.mp3';
                    audio.autoplay = true;
                }


                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('redportal')) {
                    document.querySelector('#chooseouter').classList.add('hidden')
                    x = xportal['blue']
                    y = yportal['blue']
                    lastmove = 'null'
                    /*alert('('+xportal['blue']+')')
                    alert('('+yportal['blue']+')')*/
                    let audio = new Audio
                    audio.src = 'sound/teleport.mp3'
                    audio.autoplay = true
                }
                else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('blueportal')) {
                    document.querySelector('#chooseouter').classList.add('hidden')
                    x = xportal['red']
                    y = yportal['red']
                    lastmove = 'null'
                    /*alert('('+xportal['red']+')')
                    alert('('+yportal['red']+')')*/
                    let audio = new Audio
                    audio.src = 'sound/teleport.mp3'
                    audio.autoplay = true

                }


                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('portals')) {
                    portals=true
                    document.querySelector('#helpmessage').classList.remove('hidden')
                    document.addEventListener('keydown', HideHelpMessage)
                    document.addEventListener('keydown', TalkWithDevil)
                    ClearAll()
                    document.querySelector('table').setAttribute('oncontextmenu', 'return false;')
                    document.querySelectorAll('td').forEach((el) => { el.setAttribute('onclick', 'Portal(this,"blue")') })
                    document.querySelectorAll('td').forEach((el) => { el.setAttribute('oncontextmenu', 'Portal(this,"red")') })
                    document.querySelector('#magic').classList.add('hidden')
                    document.querySelector('#magic').classList.remove('portalsHue')
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Я не знаю, что ты сделал, но я чувствую, что в тебе появилась некая сила'
                    devil[1] = 2
                    devilreplic[2] = 'На всякий случай предупрежу тебя, чтобы ты не наделал глупостей'
                    devil[2] = 3
                    devilreplic[3] = 'А так, балуйся сколько влезет'
                    devil[3] = 2
                    devilreplic[4] = 'continue'
                    devil[4] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    let audio = new Audio();
                    audio.src = 'sound/magic.mp3';
                    audio.autoplay = true;
                }



                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('magic')) {
                    document.addEventListener('keydown', TalkWithDevil)
                    ClearAll()
                    magic = true
                    document.querySelector('#magic').classList.add('hidden')
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    if (poisoned == false) {
                        devilreplic[1] = 'У меня такое чувство, будто ты стал мудрее'
                        devil[1] = 2
                        devilreplic[2] = 'Как будто стал видеть... больше'
                        devil[2] = 2
                        devilreplic[3] = 'Однако, кажется, ты так и не вспомнил рецепт!'
                        devil[3] = 3
                        devilreplic[4] = 'Давай помогу тебе: один из ингридиентов - Равнодушие'
                        devil[4] = 2
                        devilreplic[5] = 'Хотя, это тебе не поможет, как и новоприобретенная мудрость ;)'
                        devil[5] = 2
                        devilreplic[6] = 'continue'
                        devil[6] = 2
                    }
                    if (poisoned == true) {
                        poisoned = false
                        document.querySelector('#poison').classList.add('hidden')
                        document.querySelector('#poisoncounter').classList.add('hidden')
                        poisonremained = 200
                        poisonopacity = 0.2
                        hellsong.src = 'sound/hellsong.mp3'
                        hellsong.volume=0.5
                        hellsong.play()
                        devilreplic[1] = 'Поздравляю, ты нашел противоядие!'
                        devil[1] = 2
                        devilreplic[2] = 'А еще у меня такое чувство, будто вместе с этим ты стал мудрее'
                        devil[2] = 2
                        devilreplic[3] = 'Как будто стал видеть... больше'
                        devil[3] = 2
                        devilreplic[4] = 'Однако, кажется, ты так и не вспомнил рецепт!'
                        devil[4] = 3
                        devilreplic[5] = 'Хорошо, давай помогу тебе: один из ингридиентов - Равнодушие'
                        devil[5] = 2
                        devilreplic[6] = 'Хотя, это тебе не поможет, как и новоприобретенная мудрость ;)'
                        devil[6] = 3
                        devilreplic[7] = 'continue'
                        devil[7] = 2
                    }

                    ShowMessageDown(devilreplic[devilreplicnumber])
                    let audio = new Audio();
                    audio.src = 'sound/magic.mp3';
                    audio.autoplay = true;
                }





                if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('sounds')) {
                    hellsong.src = 'sound/orkestr.mp3'
                    hellsong.play()
                    document.querySelector('#projector').classList.remove('hidden')
                    document.addEventListener('keydown', TalkWithDevil)
                    ClearAll()
                    document.addEventListener('keydown', Sounds)
                    devilreplicnumber = 1
                    devilreplic = []
                    devil = []
                    devilreplic[1] = 'Какое странное блюдо ты приготовил'
                    devil[1] = 5
                    devilreplic[2] = 'Спой мне о том, какое оно на вкус'
                    devil[2] = 5
                    devilreplic[3] = 'Сыграй мне песню об этом'
                    devil[3] = 5
                    devilreplic[4] = 'continue'
                    devil[4] = 5
                    ShowMessageDown(devilreplic[devilreplicnumber])
                    let audio = new Audio();
                    audio.src = 'sound/applause.mp3';
                    audio.autoplay = true;
                }



                ////////////////////////////////////////////////////////////////////////////////


                if (y > 28) {
                    opponent = 'friend'
                    document.querySelector('#helpmessage').classList.add('hidden')
                    document.querySelector('#televisor').classList.remove('hidden')
                    if (!indialogue) {
                        document.querySelector('#entermessage').classList.remove('hidden')
                        document.querySelector('#escmessage').classList.add('hidden')
                    }
                    document.removeEventListener('keydown', TalkWithDevil)
                    document.addEventListener('keydown', TalkWithFriend)
                    document.querySelector('.x1' + '.y28').scrollIntoView();
                    document.querySelector('#satan8').classList.remove('hidden')
                    hellsong.pause()
                    friendsong2.play()
                    document.querySelector('#satans').classList.add('hidden')
                    document.querySelector('#devilmessage').classList.add('hidden')
                    document.querySelector('#ingredients').classList.add('hidden')
                }
                if (y <= 28 && hellsong.paused && !friendsending) {
                    indialogue = false;
                    opponent = 'devil'
                    document.querySelector('#escmessage').classList.add('hidden')
                    document.querySelector('#entermessage').classList.add('hidden')
                    document.querySelector('#televisor').classList.add('hidden')
                    document.querySelector('#friendmessage').classList.add('hidden')
                    document.addEventListener('keydown', TalkWithDevil)
                    document.removeEventListener('keydown', TalkWithFriend)
                    document.querySelector('#satan8').classList.add('hidden')
                    document.querySelector('#anchor').scrollIntoView();
                    hellsong.play()
                    friendsong2.pause()
                    document.querySelector('#satans').classList.remove('hidden')
                    if (!devilreplic[devilreplicnumber].includes('question') && devilreplic[devilreplicnumber] != 'die' && devilreplic[devilreplicnumber] != 'death' && devilreplic[devilreplicnumber] != 'dead' && !devilreplic[devilreplicnumber].includes('eat') && !devilreplic[devilreplicnumber].includes('continue') && !devilreplic[devilreplicnumber].includes('fearrace')) {
                        document.querySelector('#devilmessage').classList.remove('hidden')
                    }
                    if (dish.ing.length > 0) {
                        document.querySelector('#ingredients').classList.remove('hidden')
                    }

                }
            }
            if (poisoned == true) {
                Poison()
            }


            if (document.querySelector('.x' + x + '.y' + y).classList.contains('showtrap')) {
                let number = document.querySelector('.x' + x + '.y' + y).getAttribute('number')
                document.querySelector('.hiddentrap' + number).classList.add('trap')
            }
            if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('slippery')) {
                if (auto != 'auto') {
                    let audio = new Audio();
                    audio.src = 'sound/slippery.mp3';
                    audio.autoplay = true;

                }
                if (auto == 'auto') {
                    lastx = x
                    lasty = y
                }
                document.querySelector('.x' + (x) + '.y' + y).classList.remove('slippery')
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

                document.removeEventListener('keydown', FreeMovekeypressed)
                setTimeout(() => {
                    NextBlock(dir, 'auto')
                    if (!(document.querySelector('.x' + (x) + '.y' + y).classList.contains('slippery'))) {
                        setTimeout(() => {
                            document.addEventListener('keydown', FreeMovekeypressed)
                        }, 50);
                    }
                }, 50);
            }


        } catch (error) {
            if (friendsending)
                FriendsEndingFinal()
            else {
                console.log(error);
                let audio = new Audio();
                audio.src = 'sound/error.mp3';
                audio.autoplay = true;
            }
        }
    }
    /*function KeyRPressed(e) {
        let key = `${e.code}`;
        switch (key) {
            case 'KeyR':
                document.removeEventListener('keydown', moveINTkeypressed);
                Start();
                break;
        }
    }*/
    function FreeMovekeypressed(e) {
        let key = `${e.code}`;
        if (yellow){
            switch (key) {
                case 'ArrowLeft':
                    lastx = x
                    lasty = y
                    x++;
                    if (lastmove == 'left' && snake.length > 1) {
                        x--;
                    }
                    else {
                        NextBlock('right');
                    }
                    break;
                case 'ArrowRight':
                    lastx = x
                    lasty = y
                    x--;
                    if (lastmove == 'right' && snake.length > 1) {
                        x++;
                    }
                    else {
                        NextBlock('left');
                    }
                    break;
                case 'ArrowDown':
                    lastx = x
                    lasty = y
                    y--;
                    if (lastmove == 'down' && snake.length > 1) {
                        y++;
                    }
                    else {
                        NextBlock('up');
                    }
                    break;
                case 'ArrowUp':
                    lastx = x
                    lasty = y
                    y++;
                    if (lastmove == 'up' && snake.length > 1) {
                        y--;
                    }
                    else {
                        NextBlock('down');
                    }
                    break;
            }
        }
        else{
            switch (key) {
                case 'ArrowRight':
                    lastx = x
                    lasty = y
                    x++;
                    if (lastmove == 'left' && snake.length > 1) {
                        x--;
                    }
                    else {
                        NextBlock('right');
                    }
                    break;
                case 'ArrowLeft':
                    lastx = x
                    lasty = y
                    x--;
                    if (lastmove == 'right' && snake.length > 1) {
                        x++;
                    }
                    else {
                        NextBlock('left');
                    }
                    break;
                case 'ArrowUp':
                    lastx = x
                    lasty = y
                    y--;
                    if (lastmove == 'down' && snake.length > 1) {
                        y++;
                    }
                    else {
                        NextBlock('up');
                    }
                    break;
                case 'ArrowDown':
                    lastx = x
                    lasty = y
                    y++;
                    if (lastmove == 'up' && snake.length > 1) {
                        y--;
                    }
                    else {
                        NextBlock('down');
                    }
                    break;
            }
        }
        
    }
    function FearNextBlock(dir) {
        lastyf = yf
        lastxf = xf
        switch (dir) {
            case 'up':
                yf--
                break;
            case 'down':
                yf++
                break;
            case 'left':
                xf--
                break;
            case 'right':
                xf++
                break;
        }
        if (document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('block') || document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('snake') || document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('kitchenblock') || document.querySelector('.x' + (xf) + '.y' + yf).classList.contains('cat')) {
            xf = lastxf
            yf = lastyf
        }
        else {
            fear.classList.remove('fear')
            fear = document.querySelector('.x' + xf + '.y' + yf)
            fear.classList.add('fear')
        }
    }
    function FriendNextBlock(n, dir) {
        switch (dir) {
            case 'up':
                yfr[n]--
                break;
            case 'down':
                yfr[n]++
                break;
            case 'left':
                xfr[n]--
                break;
            case 'right':
                xfr[n]++
                break;
        }
        try {
            friend[n][0].classList.remove('friend');
            for (let i = 0; i < friend.length - 1; i++) {
                friend[n][i] = friend[n][i + 1]
            }
            friend[n][friend[n].length - 1] = document.querySelector('.x' + (xfr[n]) + '.y' + yfr[n])
            friend[n][friend[n].length - 1].classList.add('friend');
        } catch (error) {
            /*if (friend[n].length!=0){
                console.log(friend[n].length);
                friend[n][0].classList.remove('friend')
                for (let i = 0; i < friend.length - 1; i++) {
                    friend[n][i] = friend[n][i + 1]
                }
                friend[n].slice(0,1)
            }*/
        }

    }



    function GameOver() {
        document.removeEventListener('keydown', TalkWithDevil)
        document.addEventListener('keydown', KeyRPressed)
        document.querySelector('#chooseouter').classList.add('hidden')
        document.querySelector('#devilmessage').classList.add('hidden')
        document.querySelector('#cmessage').classList.add('hidden')
        document.querySelector('#ingredients').classList.add('hidden')
        document.querySelectorAll('.snake').forEach((el) => { el.classList.add('deadsnake') })
        document.querySelectorAll('.snake').forEach((el) => { el.classList.remove('snake') })
        ShowMessage('Вы погибли! Нажмите R для возрождения...', 'constant')
        let audio = new Audio();
        audio.src = 'sound/gameover.mp3';
        audio.autoplay = true;
        document.querySelector('#cmessage').classList.add('hidden')
        document.removeEventListener('keydown', FreeMovekeypressed)
        life = 0
    }
    function ClearVisualEffectsOnSnake() {
        snake.forEach((el) => { el.classList.remove('greensnake'); el.classList.remove('yellowd'); el.classList.remove('purple'); el.classList.remove('snake'); })
    }
}
