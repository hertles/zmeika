
var psyreplic = []
var psyreplicnumber = 0
var psy = []
var evil = 0
var psycho
var fuck
function FreeMovekeypressed() {
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
class Replic {
    constructor(theme, speaker, replic, emotion, change, evil) {
        this.theme = theme
        this.speaker = speaker
        this.replic = replic
        this.emotion = emotion
        this.change = change
        this.evil = evil
    }
    show() {
        console.log(this.theme + ' ' + this.speaker + ' ' + this.replic + ' ' + this.emotion + ' ' + this.change + ' ' + this.evil);
    }
}
var replic = []
replic.push(new Replic('psy', 'devil', 'Проходите, присаживайтесь', 8))
replic.push(new Replic('psy', 'devil', 'Наши психологические практики длятся уже пять лет', 8))
replic.push(new Replic('psy', 'devil', 'За это время я ни разу не видел у вас такого потерянного вида', 8))
replic.push(new Replic('psy', 'devil', 'Расскажите, что вас беспокоит?', 8, 'wife'))

replic.push(new Replic('wife', 'snake', 'Моя жена стала какой-то... другой', 8))
replic.push(new Replic('wife', 'snake', 'Теперь она ходит по дому и поет песни', 8))
replic.push(new Replic('wife', 'snake', 'На завтрак готовит салат вместо яичницы с беконом', 8))
replic.push(new Replic('wife', 'snake', 'А еще она постоянно глупо улыбается', 8))
replic.push(new Replic('wife', 'snake', 'Я чувствую, что мы отдаляемся друг от друга', 8))
replic.push(new Replic('wife', 'devil', 'Ваша жена вам изменяет', 9))
replic.push(new Replic('wife', 'devil', 'Скажите, вы думаете, что это с вами что-то не так?', 9))
replic.push(new Replic('wife', 'devil', 'Нет. Любовь заканчивается, так бывает', 9))
replic.push(new Replic('wife', 'devil', 'Когда-нибудь все мы через это проходим', 9))
replic.push(new Replic('wife', 'devil', 'У нее ведь был велотренажер? Вы можете его продать', 9))
replic.push(new Replic('wife', 'devil', 'Уехать в Баварию и сказать жене, чтобы уходила к своему любовнику', 9))
replic.push(new Replic('wife', 'devil', 'wife_question', 9))

replic.push(new Replic('wife_question', 'devil', 'Я слишком привязан к ней', 9, 'wife_chains', 1))
replic.push(new Replic('wife_question', 'devil', 'У нее точно нет любовника', 10, 'wife_lover', -1))
replic.push(new Replic('wife_question', 'devil', 'Это из-за меня', 8, 'wife_victim', 0))

replic.push(new Replic('wife_chains', 'devil', 'Привязанность - это, конечно, хорошо', 9))
replic.push(new Replic('wife_chains', 'devil', 'Но если вы будете слишком сильно к ней привязаны', 9))
replic.push(new Replic('wife_chains', 'devil', 'Вы тоже изменитесь в худшую сторону, поверьте мне', 9))
replic.push(new Replic('wife_chains', 'devil', 'Есть лишь один, кто может решить вашу судьбу, и это вы', 8))
replic.push(new Replic('wife_chains', 'devil', 'И вы всегда хотели, чтобы ваша судьба не была такой...', 8))
replic.push(new Replic('wife_chains', 'devil', 'Вы всегда хотели спокойной, размеренной жизни', 8))
replic.push(new Replic('wife_chains', 'devil', 'Единственное верное решение - выгнать ее', 8))
replic.push(new Replic('wife_chains', 'snake', 'Ладно, как скажете', 9))
replic.push(new Replic('wife_chains', 'snake', 'Я сделаю это сегодня. Сменю сим карты и заблокирую банковский счет', 9))
replic.push(new Replic('wife_chains', 'devil', 'Это смелый поступок. Вы молодец', 9, 'thoughts'))

replic.push(new Replic('wife_lover', 'snake', 'Я точно знаю, что у нее нет любовника', 10))
replic.push(new Replic('wife_lover', 'snake', 'Каждый день она приходит домой с работы в 6 часов', 8))
replic.push(new Replic('wife_lover', 'snake', 'Работая из дома, я слышу, как она открывает дверь', 8))
replic.push(new Replic('wife_lover', 'snake', 'Затем она открывает ноутбук и начинает смотреть сериалы на Netflix', 8))
replic.push(new Replic('wife_lover', 'devil', 'Вы уверены, что в 6 часов она приходит именно с работы?', 9))
replic.push(new Replic('wife_lover', 'devil', 'До 6 часов любовник вполне мог бы обеспечивать ее прихоти', 9))
replic.push(new Replic('wife_lover', 'snake', 'Нет, я часто прихожу к ней на работу с ланчем и застаю ее за чертежами', 10))
replic.push(new Replic('wife_lover', 'snake', 'Знаете, мне кажется, у нас с ней все хорошо', 10))
replic.push(new Replic('wife_lover', 'snake', 'Сегодня вечером поцелую ее перед сном', 8))
replic.push(new Replic('wife_lover', 'devil', '...', 8, 'thoughts'))

replic.push(new Replic('wife_victim', 'snake', 'Я виноват в том, что она ушла', 8))
replic.push(new Replic('wife_victim', 'snake', 'Мы перестали ужинать вместе, ', 8))
replic.push(new Replic('wife_victim', 'snake', 'я всегда сижу за компьютером и играю в шлеме виртуальной реальности', 8))
replic.push(new Replic('wife_victim', 'snake', 'Я совсем перестал ей интересоваться', 8))
replic.push(new Replic('wife_victim', 'snake', 'Думаю, это я ее разлюбил', 8))
replic.push(new Replic('wife_victim', 'devil', 'Вы любили прошлую свою жену', 9))
replic.push(new Replic('wife_victim', 'devil', 'Ту, которой она была до того, как ушла к другому', 9))
replic.push(new Replic('wife_victim', 'devil', 'Вы больше не чувствуете к ней ничего', 9))
replic.push(new Replic('wife_victim', 'devil', 'Поэтому так с ней поступаете', 9))
replic.push(new Replic('wife_victim', 'snake', 'Может быть, стоит с ней поговорить?', 10))
replic.push(new Replic('wife_victim', 'snake', 'Кто его знает, как оно на самом деле', 8))
replic.push(new Replic('wife_victim', 'devil', 'Я не думаю, что она скажет вам правду', 9))
replic.push(new Replic('wife_victim', 'devil', 'Лишь бы вам не навредили ваши действия', 8, 'thoughts'))

replic.push(new Replic('thoughts', 'devil', 'Расскажите еще о своих переживаниях', 8))
replic.push(new Replic('thoughts', 'snake', 'Хорошо', 8))
replic.push(new Replic('thoughts', 'snake', 'В моменты, когда я остаюсь дома один', 8))
replic.push(new Replic('thoughts', 'snake', 'Перед сном или в душе', 8))
replic.push(new Replic('thoughts', 'snake', 'Я начинаю прокручивать в голове эпизоды из прошлого', 8))
replic.push(new Replic('thoughts', 'snake', 'Какие-то стыдные воспоминания или горестные события', 8))
replic.push(new Replic('thoughts', 'snake', 'А иногда думаю о будущем', 8))
replic.push(new Replic('thoughts', 'snake', 'Появляется страх, что скоро мой бизнес вытеснят конкуренты', 8))
replic.push(new Replic('thoughts', 'snake', 'Либо я умру, либо на город упадет бомба и умрем мы все', 8))
replic.push(new Replic('thoughts', 'snake', 'Я чувствую себя зверем загнанным в клетку', 8))
replic.push(new Replic('thoughts', 'devil', 'Это все из-за вашей склонности к самокопанию', 9))
replic.push(new Replic('thoughts', 'devil', 'Вы должны просто перестать думать эти мысли', 9))
replic.push(new Replic('thoughts', 'devil', 'Переключитесь на что-то другое, а эти уйдут сами', 9))
replic.push(new Replic('thoughts', 'devil', 'thoughts_question', 9))

replic.push(new Replic('thoughts_question', 'devil', 'Может, есть способ просто избавиться от них?', 9, 'thoughts_clear', -2))
replic.push(new Replic('thoughts_question', 'devil', 'На что переключиться от этих мыслей?', 9, 'thoughts_run', 0))
replic.push(new Replic('thoughts_question', 'devil', 'Думаю, вы правы', 9, 'thoughts_right', 2))

replic.push(new Replic('thoughts_clear', 'snake', 'Вы говорите, что нужно переключиться на что-то другое', 8))
replic.push(new Replic('thoughts_clear', 'snake', 'Но не кажется ли вам, что это просто бег от них?', 10))
replic.push(new Replic('thoughts_clear', 'snake', 'Что если "переключиться", то они снова вернуться?', 10))
replic.push(new Replic('thoughts_clear', 'devil', 'Да, они вернутся', 8))
replic.push(new Replic('thoughts_clear', 'devil', 'Но весьма наивно считать, что с ними можно бороться', 8))
replic.push(new Replic('thoughts_clear', 'devil', 'Попробуйте просто забить болт', 9))
replic.push(new Replic('thoughts_clear', 'devil', 'Не брать в голову', 9, 'circle'))

replic.push(new Replic('thoughts_right', 'devil', 'Конечно же, я прав :)', 9))
replic.push(new Replic('thoughts_right', 'devil', 'Иначе почему мы работаем вместе уже 5 лет?', 9))
replic.push(new Replic('thoughts_right', 'devil', 'Знаете, вы мне тоже нравитесь как пациент', 9))
replic.push(new Replic('thoughts_right', 'devil', 'Все схватываете на лету', 9, 'circle'))

replic.push(new Replic('thoughts_run', 'snake', 'А чем можно заменить эти мысли?', 8))
replic.push(new Replic('thoughts_run', 'snake', 'На что переключиться?', 8))
replic.push(new Replic('thoughts_run', 'devil', 'Можете включить телевизор перед сном', 9))
replic.push(new Replic('thoughts_run', 'devil', 'Либо попробуйте думать о чем-то приятном', 9))
replic.push(new Replic('thoughts_run', 'devil', 'К примеру, о том, что ожидает вас на завтрак', 8))
replic.push(new Replic('thoughts_run', 'devil', 'О жене, о том, как вы ее любите', 9))
replic.push(new Replic('thoughts_run', 'devil', 'Также можно выпить немного алкоголя', 8))
replic.push(new Replic('thoughts_run', 'devil', 'В целом вы задаете правильные вопросы', 8))
replic.push(new Replic('thoughts_run', 'devil', 'Думаю, у вас все получится', 9, 'circle'))

replic.push(new Replic('circle', 'devil', 'Что еще? Говорите, смелее', 8))
replic.push(new Replic('circle', 'snake', 'У меня такое чувство,', 8))
replic.push(new Replic('circle', 'snake', 'как будто каждый день повторяет предыдущий', 10))
replic.push(new Replic('circle', 'snake', 'Я часто думаю о свободе', 10))
replic.push(new Replic('circle', 'snake', 'к которой, кажется, я шел изначально,', 10))
replic.push(new Replic('circle', 'snake', 'и понимаю, что ее в моей жизни никогда и не было', 10))
replic.push(new Replic('circle', 'snake', 'Знаете ли вы, как ее достичь?', 10))
replic.push(new Replic('circle', 'devil', '...', 10))
replic.push(new Replic('circle', 'devil', '...', 8))
replic.push(new Replic('circle', 'devil', 'А вы не думали, что вы себя накручиваете?', 8))
replic.push(new Replic('circle', 'devil', 'Вы имеете все то, о чем многие даже мечтать не смеют', 8))
replic.push(new Replic('circle', 'devil', 'Плантация на последнем этаже, собственный бильярд, бизнес', 8))
replic.push(new Replic('circle', 'devil', 'Вы так долго шли к тому, чтобы все это получить', 8))
replic.push(new Replic('circle', 'devil', 'А сейчас сидите здесь и говорите мне, что вам всего этого не надо', 9))
replic.push(new Replic('circle', 'devil', 'Вам подавай свободу, которой, возможно, даже не существует', 8))
replic.push(new Replic('circle', 'devil', 'circle_question', 8))

replic.push(new Replic('circle_question', 'devil', 'Я просто запутался', 8, 'circle_break', 2))
replic.push(new Replic('circle_question', 'devil', 'Мне надоела такая жизнь', 8, 'circle_fuck', -2))
replic.push(new Replic('circle_question', 'devil', 'Почему это, по-вашему, свободы нет?', 8, 'circle_freedom', 0))

replic.push(new Replic('circle_break', 'snake', 'Похоже, мне стоит отдохнуть', 9))
replic.push(new Replic('circle_break', 'snake', 'Я действительно устал от всего, глаза замылились', 9))
replic.push(new Replic('circle_break', 'snake', 'Я перестал быть благодарным', 9))
replic.push(new Replic('circle_break', 'snake', 'Пожалуй, съезжу на денек-другой к морю', 9))
replic.push(new Replic('circle_break', 'snake', 'Покатаюсь на дельфине', 9))
replic.push(new Replic('circle_break', 'snake', 'Я просто хочу спокойной жизни, и суета меня измотала', 9))
replic.push(new Replic('circle_break', 'devil', 'Согласен, я не прочь поехать вместе с вами', 9))
replic.push(new Replic('circle_break', 'devil', 'Завтра утром я возьму три билета на Сицилию', 9))
replic.push(new Replic('circle_break', 'devil', 'Ваша жена будет очень рада', 9))
replic.push(new Replic('circle_break', 'snake', 'Супер! Правда, в последнее время она стала плохо к вам относиться', 8))
replic.push(new Replic('circle_break', 'snake', 'Она говорит, что вы плохо на меня влияете', 8))
replic.push(new Replic('circle_break', 'snake', 'Но сейчас, после таких новостей, я чувствую, что она не права', 9))
replic.push(new Replic('circle_break', 'snake', 'Завтра созвонимся по скайпу и обсудим детали поездки', 9))
replic.push(new Replic('circle_break', 'devil', 'Договорились', 9, 'affirm'))

replic.push(new Replic('circle_fuck', 'snake', 'Я смотрю на прошедшие месяцы', 8))
replic.push(new Replic('circle_fuck', 'snake', 'И чувствую, что они как будто прошли мимо меня', 10))
replic.push(new Replic('circle_fuck', 'snake', 'Видимо, стоило проделать весь этот путь,', 10))
replic.push(new Replic('circle_fuck', 'snake', 'чтобы понять, что все это не имеет смысла ', 10))
replic.push(new Replic('circle_fuck', 'snake', 'Кто я такой?', 10))
replic.push(new Replic('circle_fuck', 'snake', 'Я держу с десяток овощных магазинов в городе', 10))
replic.push(new Replic('circle_fuck', 'snake', 'Скоро откроется новый на соседнем бульваре', 10))
replic.push(new Replic('circle_fuck', 'snake', 'Но что останется от меня после смерти?', 10))
replic.push(new Replic('circle_fuck', 'snake', 'Что в старости позволит взглянуть с улыбкой на всю мою жизнь?', 10))
replic.push(new Replic('circle_fuck', 'snake', 'Я хотел бы найти ответы на многие вопросы', 10))
replic.push(new Replic('circle_fuck', 'snake', 'Я хотел бы понять, что действительно для меня важно', 10))
replic.push(new Replic('circle_fuck', 'snake', 'И в конце концов, найти свободу', 10))
replic.push(new Replic('circle_fuck', 'devil', 'Вы, похоже, начитались каких-то статей в интернете', 8))
replic.push(new Replic('circle_fuck', 'devil', 'Для тех, кто их пишет, свобода и другие понятия типа осознанности', 8))
replic.push(new Replic('circle_fuck', 'devil', 'это мнимое утешение, так как они ничего не добились', 8))
replic.push(new Replic('circle_fuck', 'devil', 'Знаете, что я вам скажу?', 8))
replic.push(new Replic('circle_fuck', 'devil', 'Ни у кого из нас нет того, о чем вы говорите', 10))
replic.push(new Replic('circle_fuck', 'devil', 'Не морочьте себе голову', 8))
replic.push(new Replic('circle_fuck', 'devil', 'Сейчас не надо ничего отвечать, просто когда придете домой,', 8))
replic.push(new Replic('circle_fuck', 'devil', 'Подумайте о моих словах', 8, 'affirm'))

replic.push(new Replic('circle_freedom', 'devil', 'Почему свободы не существует?', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Давайте сравним нашу жизнь с большим-большим комком пластилина красного цвета', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Из которого мы можем слепить все что угодно', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Представьте этот пластилин у себя в руке', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Вы можете слепить из него рака с усиками и клешнями', 8))
replic.push(new Replic('circle_freedom', 'devil', 'А можете слепить помидор', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Но вы никогда не слепите из него синюю сливу', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Потому что ваш комок пластилина именно красного цвета', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Так же и в жизни: вы рождены змеей', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Ваш разум ограничен количеством нейронов и размером черепной коробки', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Пейте лечебный чай, тренируйте свой мозг с помощью упражнений', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Растягивайте пластилин, мните его', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Но синим вы его не сделаете', 9))
replic.push(new Replic('circle_freedom', 'devil', 'А теперь подумайте вот о чем', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Вы не один на этой планете, верно?', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Слепите из пластилина что-нибудь непристойное', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Я вот о чем', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Найдутся те, кому такое не понравится', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Мы живем в обществе, так?', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Люди будут против, если вы будете ходить голым по улице', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Для таких, как вы, любителей свободы, и существуют законы', 9))
replic.push(new Replic('circle_freedom', 'devil', 'Ни у кого из нас нет этого', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Будьте сильным и просто смиритесь с этой мыслью', 8))
replic.push(new Replic('circle_freedom', 'devil', 'Подумайте о моих словах', 8, 'affirm'))

replic.push(new Replic('affirm', 'devil', 'А сейчас давайте вспомним наше прошлое занятие', 9))
replic.push(new Replic('affirm', 'devil', 'Помните мы с вами говорили о методике аффирмаций?', 9))
replic.push(new Replic('affirm', 'devil', 'Помните, нужно было встать перед зеркалом', 9))
replic.push(new Replic('affirm', 'devil', 'И в течение 5 минут говорить себе подбадривающие вещи?', 9))
replic.push(new Replic('affirm', 'devil', 'Вы делали это? Как ощущения?', 9))
replic.push(new Replic('affirm', 'devil', 'affirm_question', 9))

replic.push(new Replic('affirm_question', 'devil', 'Я забыл об этом, извините', 9, 'affirm_forgot', 1))
replic.push(new Replic('affirm_question', 'devil', 'Фигня ваши методики', 9, 'affirm_fuck', -1))
replic.push(new Replic('affirm_question', 'devil', 'Мне это не поможет', 9, 'affirm_useless', 0))

replic.push(new Replic('affirm_forgot', 'snake', 'Вылетело из головы. Обещаю попробовать сегодня', 9))
replic.push(new Replic('affirm_forgot', 'devil', 'В следующий раз постарайтесь не забывать', 8))
replic.push(new Replic('affirm_forgot', 'devil', 'Кто, если не я, поможет вам обрести психическое здоровье?', 9))
replic.push(new Replic('affirm_forgot', 'devil', 'Меня надо слушать', 9, 'test'))

replic.push(new Replic('affirm_fuck', 'snake', 'А вам не кажется, что тот,', 8))
replic.push(new Replic('affirm_fuck', 'snake', 'кто не верит в сказанное, ', 8))
replic.push(new Replic('affirm_fuck', 'snake', 'но продолжает говорить себе приятные вещи вслух,', 8))
replic.push(new Replic('affirm_fuck', 'snake', 'просто не будет верить в них?', 10))
replic.push(new Replic('affirm_fuck', 'snake', 'Да и потом, это ведь уход от реальности', 10))
replic.push(new Replic('affirm_fuck', 'snake', 'В которой ты вовсе не тот, кем хочешь себе показаться', 8))
replic.push(new Replic('affirm_fuck', 'snake', 'Так что в перспективе это может принести только разочарование', 8))
replic.push(new Replic('affirm_fuck', 'devil', 'Давайте вы сядете напротив меня', 8))
replic.push(new Replic('affirm_fuck', 'devil', 'И будете учить меня как быть психотерапевтом', 10))
replic.push(new Replic('affirm_fuck', 'devil', 'А я вас с удовольствием буду слушать', 8, 'test'))

replic.push(new Replic('affirm_useless', 'snake', 'Думаю, в моем случае мне это не поможет', 8))
replic.push(new Replic('affirm_useless', 'snake', 'Я не верю в то, что надо говорить', 8))
replic.push(new Replic('affirm_useless', 'snake', 'Мои негативные установки точно надо лечить по-другому', 8))
replic.push(new Replic('affirm_useless', 'devil', 'Это самый верный способ стать лучше', 8))
replic.push(new Replic('affirm_useless', 'devil', 'Сделайте то, что я вам говорю', 8))
replic.push(new Replic('affirm_useless', 'devil', 'И вы сразу почувствуете результат', 8, 'test'))

replic.push(new Replic('test', 'devil', 'А теперь время для теста!', 9))
replic.push(new Replic('test', 'devil', 'Посмотрите внимательно на эту картинку', 9))
replic.push(new Replic('test', 'devil', '', 9, 'show_image'))
replic.push(new Replic('test', 'devil', 'Что вы увидели на этой картинке в первую очередь?', 9))
replic.push(new Replic('test', 'devil', 'test_question', 9))

replic.push(new Replic('test_question', 'devil', 'Кита', 9, 'test_whale'))
replic.push(new Replic('test_question', 'devil', 'Волну', 9, 'test_wave'))
replic.push(new Replic('test_question', 'devil', 'Серфингиста', 9, 'test_serf'))
replic.push(new Replic('test_question', 'devil', 'Солнце', 9, 'test_sun'))

replic.push(new Replic('test_whale', 'snake', 'Кита!', 9))
replic.push(new Replic('test_whale', 'snake', 'Определенно', 9, 'judge'))
replic.push(new Replic('test_wave', 'snake', 'Хм...', 9))
replic.push(new Replic('test_wave', 'snake', ' Кажется, изначально я заметил волну', 9, 'judge'))
replic.push(new Replic('test_serf', 'snake', 'Скорее всего,', 9))
replic.push(new Replic('test_serf', 'snake', 'сначала я заметил серфингиста', 9, 'judge'))
replic.push(new Replic('test_sun', 'snake', 'Сперва я обратил внимание на солнце', 9))
replic.push(new Replic('test_sun', 'snake', 'Оно первым бросилось мне в глаза', 9, 'judge'))

replic.push(new Replic('judge_fuck', 'devil', 'Ответ принят', 9))
replic.push(new Replic('judge_fuck', 'devil', 'Итак,', 9))
replic.push(new Replic('judge_fuck', 'devil', 'Тест показал, что вы мудак', 9))
replic.push(new Replic('judge_fuck', 'devil', 'Бездушный мудак, который думает только о себе', 10))
replic.push(new Replic('judge_fuck', 'devil', 'judge_fuck_question', 10))

replic.push(new Replic('judge_fuck_question', 'devil', 'Пошел нахуй', 10, 'judge_fuck_1'))
replic.push(new Replic('judge_fuck_question', 'devil', 'Иди в пизду', 10, 'judge_fuck_2'))

replic.push(new Replic('judge_fuck_1', 'snake', 'Пошел нахуй', 10))
replic.push(new Replic('judge_fuck_1', 'devil', 'Что ты сказал?!', 11, 'judge_fuck_continue'))
replic.push(new Replic('judge_fuck_2', 'snake', 'Иди в пизду', 10))
replic.push(new Replic('judge_fuck_2', 'devil', 'Что ты сказал?!', 11, 'judge_fuck_continue'))
replic.push(new Replic('judge_fuck_continue', 'devil', 'Да ты хоть понимаешь, с кем ты говоришь?!', 11))
replic.push(new Replic('judge_fuck_continue', 'devil', 'Ты вообще в курсе, кто я и на что я способен?!', 11))
replic.push(new Replic('judge_fuck_continue', 'devil', 'judge_fuck_question_who', 11))

replic.push(new Replic('judge_fuck_question_who', 'devil', 'Кто ты?', 11, 'judge_fuck_who'))
replic.push(new Replic('judge_fuck_question_who', 'devil', 'Мне похуй', 11, 'judge_fuck_idgaf'))

replic.push(new Replic('judge_fuck_who', 'snake', 'Кто же ты?', 11))
replic.push(new Replic('judge_fuck_who', 'devil', 'А ты не знаешь, да?', 11))
replic.push(new Replic('judge_fuck_who', 'devil', 'Ты же сам меня создал, не помнишь?', 11))
replic.push(new Replic('judge_fuck_who', 'devil', 'Я - часть тебя, которая целиком олицетворяет все телесное', 8))
replic.push(new Replic('judge_fuck_who', 'devil', 'Меня зовут Эго', 8))
replic.push(new Replic('judge_fuck_who', 'devil', 'Я хотел сотрудничать с тобой,', 8))
replic.push(new Replic('judge_fuck_who', 'devil', 'вместе добиваться целей,', 8))
replic.push(new Replic('judge_fuck_who', 'devil', 'но, вижу, ты против', 8))
replic.push(new Replic('judge_fuck_who', 'devil', 'Что ж, раз так', 8))
replic.push(new Replic('judge_fuck_who', 'devil', 'Я растворюсь в воздухе', 8))
replic.push(new Replic('judge_fuck_who', 'devil', 'А ты делай че хочешь', 8))
replic.push(new Replic('judge_fuck_who', 'devil', '', 8, 'fuck'))

replic.push(new Replic('judge_fuck_idgaf', 'snake', 'Мне похуй', 11))
replic.push(new Replic('judge_fuck_idgaf', 'devil', 'Похоже, ты действительно меня не боишься', 12))
replic.push(new Replic('judge_fuck_idgaf', 'devil', '...', 10))
replic.push(new Replic('judge_fuck_idgaf', 'devil', 'Знаешь, что?', 10))
replic.push(new Replic('judge_fuck_idgaf', 'devil', 'Я просто растворюсь в воздухе', 10))
replic.push(new Replic('judge_fuck_idgaf', 'devil', 'А ты делай че хочешь', 10))
replic.push(new Replic('judge_fuck_idgaf', 'devil', '', 10, 'fuck'))

replic.push(new Replic('judge_job', 'devil', 'Ответ принят', 9))
replic.push(new Replic('judge_job', 'devil', 'Итак,', 9))
replic.push(new Replic('judge_job', 'devil', 'Тест показал, что вы действительно можете добиться успеха', 9))
replic.push(new Replic('judge_job', 'devil', 'Я готов вам помочь в его достижении:', 9))
replic.push(new Replic('judge_job', 'devil', 'В нашем мире есть два типа существ', 9))
replic.push(new Replic('judge_job', 'devil', 'Потребители и производители', 9))
replic.push(new Replic('judge_job', 'devil', 'Именно производители стоят во главе всего и вся', 9))
replic.push(new Replic('judge_job', 'devil', 'Они имеют власть над всеми потребителями', 9))
replic.push(new Replic('judge_job', 'devil', 'Я предлагаю вам сотрудничество', 9))
replic.push(new Replic('judge_job', 'devil', 'Мы вместе будем делать корм', 9))
replic.push(new Replic('judge_job', 'devil', 'И тем самым обретем контроль над всем миром!', 9))
replic.push(new Replic('judge_job', 'devil', 'Придет день, мы будем пить вино и смеяться', 9))
replic.push(new Replic('judge_job', 'devil', 'Смеяться над всеми ними и смотреть с высокой башни вниз', 9))
replic.push(new Replic('judge_job', 'devil', 'Пока толпа внизу будут плакать и страдать', 9))
replic.push(new Replic('judge_job', 'snake', 'Вы уверены, что я хочу этого?', 9))
replic.push(new Replic('judge_job', 'devil', 'А вы уверены, что имеете право голоса?', 10))
replic.push(new Replic('judge_job', 'devil', 'Вам понравится ваша новая жизнь, будьте уверены', 9))
replic.push(new Replic('judge_job', 'devil', 'Отправляемся', 9))
replic.push(new Replic('judge_job', 'devil', '', 9, 'job'))

replic.push(new Replic('judge_eat', 'devil', 'Ответ принят', 9))
replic.push(new Replic('judge_eat', 'devil', 'Итак,', 9))
replic.push(new Replic('judge_eat', 'devil', 'Тест показал, что вы самый обычный', 8))
replic.push(new Replic('judge_eat', 'devil', 'В вас нет никаких черт, которые выделяют вас из толпы', 8))
replic.push(new Replic('judge_eat', 'devil', 'Суровая правда, не сердитесь на меня', 8))
replic.push(new Replic('judge_eat', 'devil', 'Вы с самого начала пытались найти свободу', 8))
replic.push(new Replic('judge_eat', 'devil', 'Для этого пришли в большой мир', 8))
replic.push(new Replic('judge_eat', 'devil', 'Вы действительно думали, что здесь все будет по-другому?', 8))
replic.push(new Replic('judge_eat', 'devil', 'Нет, дорогой мой друг', 9))
replic.push(new Replic('judge_eat', 'devil', 'Я вижу ваш голодный взгляд', 8))
replic.push(new Replic('judge_eat', 'devil', 'Вижу испарину на вашем лбу', 8))
replic.push(new Replic('judge_eat', 'devil', 'Вижу, как по-немногу вы начинаете терять рассудок', 8))
replic.push(new Replic('judge_eat', 'devil', 'Я помогу вам, мой заурядный приятель', 9))
replic.push(new Replic('judge_eat', 'devil', '', 9, 'eat'))

function ShowMessageDown(text) {
    document.querySelector('#devilmessage').classList.add('hidden');
    document.querySelector('#devilmessage').classList.remove('hidden')
    document.querySelector('#devilmessage>text').innerHTML = text;
}
function ShowMessageLeft(text) {
    document.querySelector('#snakemessage').classList.add('hidden');
    document.querySelector('#snakemessage').classList.remove('hidden')
    document.querySelector('#snakemessage>text').innerHTML = text;
}
function ShowMessageRight(text) {
    document.querySelector('#rightmessage').classList.add('hidden');
    document.querySelector('#rightmessage').classList.remove('hidden')
    document.querySelector('#rightmessage>text').innerHTML = text;
}
function Choose(variants, change, evilplus) {
    let choose = document.querySelector('#chooseouter')
    choose.querySelectorAll('.button').forEach((e) => e.remove())
    for (let i = 0; i < variants.length; i++) {
        let button = document.createElement('div')
        choose.appendChild(button)
        button.classList.add('button')
        button.innerHTML = variants[i]
        button.setAttribute('onclick', 'Chosen("' + change[i] + '",' + evilplus[i] + ')')
    }
    choose.classList.remove('hidden')
}
function Chosen(change, evilplus) {
    if (evilplus != undefined) {
        evil += evilplus
        console.log(evil);
    }
    document.querySelector('#snakemessage').classList.add('hidden')
    document.querySelector('#rightmessage').classList.add('hidden')
    answers = []
    replic.forEach(element => {
        answers.push(element.theme)
    });
    psyreplicnumber = answers.indexOf(change)
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
    document.querySelector('#snakemessage').classList.add('hidden')
    document.querySelector('#rightmessage').classList.add('hidden')
    document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
    document.querySelector('#satan' + replic[psyreplicnumber].emotion).classList.remove('hidden')
    if (replic[psyreplicnumber].speaker == 'snake')
        ShowMessageLeft(replic[psyreplicnumber].replic)
    if (replic[psyreplicnumber].speaker == 'devil')
        ShowMessageRight(replic[psyreplicnumber].replic)
}
var questions = []
var answers = []
var evilchange = []

var foodInt
function EatEatEat() {

}
function TalkWithPsychologoanatomist(e) {
    let key = `${e.code}`
    if (key == 'Enter') {
        document.querySelector('#snakemessage').classList.add('hidden')
        document.querySelector('#rightmessage').classList.add('hidden')
        document.querySelectorAll('.satan').forEach((el) => el.classList.add('hidden'))
        document.querySelector('#satan' + replic[psyreplicnumber + 1].emotion).classList.remove('hidden')
        if (replic[psyreplicnumber + 1].replic.includes('question')) {
            questions = []
            answers = []
            evilchange = []

            replic.forEach(rep => {
                if (rep.theme == replic[psyreplicnumber + 1].replic) {
                    questions.push(rep.replic)
                    answers.push(rep.change)
                    evilchange.push(rep.evil)
                }
            });
            Choose(questions, answers, evilchange)
        }
        else {
            psyreplicnumber++
            if (replic[psyreplicnumber].speaker == 'devil') {
                ShowMessageRight(replic[psyreplicnumber].replic)
            }
            if (replic[psyreplicnumber].speaker == 'snake') {
                ShowMessageLeft(replic[psyreplicnumber].replic)
            }
            if (replic[psyreplicnumber - 1].change == 'show_image') {
                let paper = new Audio
                paper.src = 'sound/paper.mp3'
                paper.autoplay = true
                psycho.play()
                document.querySelector('#test').classList.add('hidden')
            }
            if (replic[psyreplicnumber].change == 'judge') {
                Judgement()
            }
            if (replic[psyreplicnumber].replic.includes('Тест показал')) {
                psycho.pause()
            }
            if (replic[psyreplicnumber].change == 'show_image') {
                let paper = new Audio
                paper.src = 'sound/paper.mp3'
                paper.autoplay = true
                psycho.pause()
                document.querySelector('#snakemessage').classList.add('hidden')
                document.querySelector('#rightmessage').classList.add('hidden')
                document.querySelector('#test').classList.remove('hidden')
            }
            
            else if (replic[psyreplicnumber].change == 'fuck') {
                fuck = true
                document.querySelector('.x33.y100').classList.add('food')
                document.removeEventListener('keydown', TalkWithPsychologoanatomist)
                document.querySelector('#snakemessage').classList.add('hidden')
                document.querySelector('#rightmessage').classList.add('hidden')
                document.querySelectorAll('.satan').forEach(satan => {
                    satan.classList.add('opacity_hz')
                });
                setTimeout(() => {
                    document.querySelectorAll('.satan').forEach(satan => {
                        satan.classList.remove('opacity_hz')
                        satan.classList.add('hidden')
                    });
                    document.addEventListener('keydown', FreeMovekeypressed)
                }, 3000);
            }
            else if (replic[psyreplicnumber].change == 'eat') {
                document.removeEventListener('keydown', TalkWithPsychologoanatomist)
                document.querySelector('#snakemessage').classList.add('hidden')
                document.querySelector('#rightmessage').classList.add('hidden')
                document.querySelector('.x33.y52').classList.add('food')
                setTimeout(() => {
                    EatEatEat()
                }, 5000);
            }
            else if (replic[psyreplicnumber].change == 'job') {
                document.removeEventListener('keydown', TalkWithPsychologoanatomist)
                document.querySelector('#snakemessage').classList.add('hidden')
                document.querySelector('#rightmessage').classList.add('hidden')
                Hell()
            }
            else if (replic[psyreplicnumber].change != undefined) {
                answers = []
                replic.forEach(element => {
                    answers.push(element.theme)
                });
                psyreplicnumber = answers.indexOf(replic[psyreplicnumber].change, 1) - 1
            }
        }
    }


}
function Judgement() {
    
    if (evil < -3) {
        replic[psyreplicnumber].change = 'judge_fuck'
    }
    if (evil > 3) {
        replic[psyreplicnumber].change = 'judge_job'
    }
    if (evil <= 3 && evil >= -3) {
        replic[psyreplicnumber].change = 'judge_eat'
    }
    console.log('evil=' + evil + '\nresult=' + replic[psyreplicnumber].change);
}
function KeyRPressed(e) {
    let key = `${e.code}`
    if (key == 'KeyR') {
        window.location.href = 'index.php'
    }
}
function Hell() {
    document.querySelector('#message').classList.add('hidden')
    document.querySelector('#chooseouter').classList.add('hidden')
    document.querySelectorAll('.snake').forEach((el) => { el.classList.add('deadsnake') })
    document.querySelectorAll('.snake').forEach((el) => { el.classList.remove('snake') })
    ShowMessage('', 'constant')
    let audio = new Audio();
    audio.src = 'sound/gameover.mp3';
    audio.autoplay = true;
    ShowMessage('Вы погибли! Нажмите R для возрождения...', 'constant')
    setTimeout(() => {
        ShowMessage(':)', 'constant')
        setInterval(() => {
            let what = new Audio
            what.src = 'sound/gameover.mp3'
            what.autoplay = 'true'
        }, 100);
    }, 3000);
    setTimeout(() => {
        document.querySelectorAll('.satan').forEach((el) => { el.classList.add('hidden') })
        document.querySelector('#black').classList.remove('hidden')
    }, 6000);
    setTimeout(() => {
        window.location.href = 'hell.php';
    }, 12000);
}















window.onload = function () {
    var life = true
    document.querySelector('.x1.y1').scrollIntoView()
    psycho = document.querySelector('#psycho')
    psycho.play()
    var direction = 'right'
    var href = window.location.href.toString()
    var foodEaten = Number(href.substring(href.indexOf('f') + 2))
    var x = 1
    var y = 19
    var SCREEN = 1
    var snake = []
    var moveINT
    var black = document.querySelector('#black')
    fuck = false
    black.classList.add('opacity_hz')
    document.addEventListener('keydown', KeyRPressed)
    setTimeout(() => {
        document.querySelector('#loadingmessage').classList.add('hidden')
        black.classList.add('hidden')
        black.classList.remove('opacity_hz')
        for (let i = 0; i < foodEaten + 5; i++) {
            snake.push(document.querySelector('.x' + x + '.y' + y))
        }
        snake.forEach((el) => { el.classList.add('snake') })
        moveINT = setInterval(() => {
            if (life)
                NextBlock()
        }, 75);
    }, 5000);
    document.querySelectorAll('.y31').forEach((el) => el.classList.add('block'))
    document.querySelectorAll('.y32').forEach((el) => el.classList.add('block'))
    document.querySelectorAll('.y62').forEach((el) => el.classList.add('block'))
    document.querySelectorAll('.y63').forEach((el) => el.classList.add('block'))
    document.querySelectorAll('.y93').forEach((el) => el.classList.add('block'))
    document.querySelectorAll('.y94').forEach((el) => el.classList.add('block'))
    for (let yy = 95; yy <= 124; yy++) {
        document.querySelector('.x1.y' + yy).classList.add('block')
        document.querySelector('.x65.y' + yy).classList.add('block')
    }
    for (let yy = 1; yy <= 30; yy++) {
        document.querySelector('.x1.y' + yy).classList.add('block')
        if (yy <= 11) {
            document.querySelector('.x65.y' + yy).classList.add('block')
        }
    }
    for (let yy = 32; yy <= 62; yy++) {
        if (yy <= 42) {
            document.querySelector('.x1.y' + yy).classList.add('block')
        }
    }
    for (let yy = 64; yy <= 92; yy++) {
        document.querySelector('.x65.y' + yy).classList.add('block')
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
            else if (document.querySelector('.x' + (x) + '.y' + y).classList.contains('food')) {
                NewCircleEnding()
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
    var psychInt
    function CHANGESCREEN() {

        if (LASTSCREEN != SCREEN) {
            document.querySelectorAll('.background').forEach((el) => el.classList.add('hidden'))
            switch (SCREEN) {
                case 1:
                    document.querySelector('#street').classList.remove('hidden')
                    break;
                case 2:
                    document.querySelector('#cabinet').classList.remove('hidden')
                    if (!fuck) {
                        document.removeEventListener('keydown', moveINTkeypressed)
                        document.querySelector('#satan8').classList.remove('hidden')
                        psycho.volume = 0.5
                        document.addEventListener('keydown', TalkWithPsychologoanatomist)
                        ShowMessageRight('Проходите, присаживайтесь')
                        let time = Math.abs(y - 54) * 100
                        console.log(time);
                        clearInterval(moveINT)
                        psychInt = setInterval(() => {
                            if (x < 7) {
                                direction = 'right'
                            }
                            if (x == 7 && y < 50) {
                                direction = 'down'
                            }
                            if (x == 7 && y > 50) {
                                direction = 'up'
                            }
                            if (x == 7 && y == 50) {
                                direction = 'right'
                            }
                            if (x == 11 && y == 50) {
                                direction = 'down'
                            }
                            if (x == 11 && y == 55) {
                                direction = 'right'
                            }
                            if (x == 21 && y == 55) {
                                direction = 'up'
                            }
                            if (x == 21 && y == 52) {
                                direction = 'right'
                            }
                            if (x == 22 && y == 52) {
                                clearInterval(psychInt)
                            }
                            else {
                                NextBlock()
                            }
                        }, 100);
                    }


                    break;
                case 3:
                    document.querySelector('#room').classList.remove('hidden')
                    break;
                case 4:
                    document.querySelector('#sky').classList.remove('hidden')
                    if (fuck)
                        document.querySelector('#life').classList.remove('hidden')
                    if (fuck){
                        let goddamn=new Audio
                        goddamn.src='sound/goddamn.mp3'
                        goddamn.autoplay=true
                    }
                    break;
                default:
                    break;
            }
        }

    }
    EatEatEat = function () {
        foodInt = setInterval(() => {
            if (x < 33) {
                direction = 'right'
            }
            if (x == 33) {
                clearInterval(foodInt)
            }
            else {
                NextBlock()
            }

        }, 100);
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
    
    FreeMovekeypressed = function (e) {
        let key = `${e.code}`;
        switch (key) {
            case 'ArrowRight':
                lastx = x
                lasty = y
                direction = 'right'
                NextBlock();

                break;
            case 'ArrowLeft':
                lastx = x
                lasty = y
                direction = 'left'
                NextBlock();
                break;
            case 'ArrowUp':
                lastx = x
                lasty = y
                direction = 'up'
                NextBlock();

                break;
            case 'ArrowDown':
                lastx = x
                lasty = y
                direction = 'down'
                NextBlock();

                break;
        }

    }
    function NewCircleEnding() {
        document.removeEventListener('keydown', FreeMovekeypressed)
        document.querySelector('#life').classList.add('hidden')
        document.querySelectorAll('.satan').forEach(el => el.classList.add('hidden'))
            document.querySelector('#black').classList.remove('hidden')
            Achieve(8, 'New Circle Ending')
            let food = new Audio
            food.src = 'sound/food.mp3'
            food.autoplay = true
            setInterval(() => {
                setTimeout(() => {
                    let food = new Audio
                    food.src = 'sound/food.mp3'
                    if (Math.random() < 0.2)
                        food.src = 'sound/extrafood.mp3'
                    food.autoplay = true
                }, 2000 * Math.random());
            }, 2000);
            if (fuck){
                setTimeout(() => {
                    let laugh = new Audio
                    laugh.src = 'sound/hihihi.mp3'
                    laugh.autoplay = true
                }, 3000);
            }
            

            setTimeout(() => {
                ShowMessage('Нажмите R, чтобы изменить свою судьбу', 'constant')
                
            }, 5000);

    }
    




}
