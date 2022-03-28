<?php
    include_once('includes.php');
    include_once('check.php');
?>
<!DOCTYPE html>
<html lang='ru'>

<head>
    <title>Snaken</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="hell.css">
    <link rel="shortcut icon" href="visual/kitchen/hellicon.ico">
    <meta charset="UTF-8">
    <script src="hell.js"></script>
    <script src="Profile.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>

<body>
    <div id='achievement' class='hidden'><img src="visual/endings/6.png" alt=""><at><atf><ah>Открыта новая концовка!<ab>6. Hell Ending</ab></atf></at></div>
    <div id='anchor' style='position: absolute; top: 0; left: 0; width: 1vw; height: 1vh'></div>
    <div id='brown' class='hidden' style='background-color: #331a00; width: 100%; height: 100%; position: fixed; display: block; z-index:1; top:0; left:0;'></div>
    <div id='black' class='hidden' style='background-color: #000000; width: 100%; height: 100%; position: fixed; display: block; z-index:9999; top:0; left:0;'></div>
    <img src="visual/kitchen/sink.png" alt="" class='kitchen hidden' id='sink'>
    <img src="visual/kitchen/shell.png" alt="" class='kitchen hidden' id='shell'>
    <img src="visual/kitchen/locker.png" alt="" class='kitchen hidden' id='locker'>
    <img src="visual/kitchen/fridge.png" alt="" class='kitchen hidden' id='fridge'>
    <img src="visual/kitchen/furnace.png" alt="" class='kitchen hidden' id='furnace'>
    <div id='satans'>
        <img src="visual/satan.png" alt="" class='satan hidden' id='satan1'>
        <img src="visual/satan_eyes.png" alt="" class='satan hidden' id='satan2'>
        <img src="visual/satan_tentacles.png" alt="" class='satan hidden' id='satan3'>
        <img src="visual/satan_agressive.png" alt="" class='satan hidden' id='satan4'>
        <img src="visual/satan_cheer.png" alt="" class='satan hidden' id='satan5'>
        <img src="visual/satan_tongue.png" alt="" class='satan hidden' id='satan6'>
        <img src="visual/satan.png" alt="" class='satan hidden' id='satan7'>
    </div>
    <img src="visual/satan_bottom.png" alt="" class='satan hidden' id='satan8'>



    <img src="visual/sunset.png" alt="Фото автора Nout Gons: Pexels" class='hidden' id='sunset'>
    <img src="visual/hell.jpg" alt="Background фото создан(а) starline - ru.freepik.com" class='hidden' id='hell'>




    <img src="visual/kitchen/appear.gif" class='hidden' id='appear'>
    <img src="visual/kitchen/magic.gif" class='hidden' id='magic'>
    <img src="visual/freeze.png" class='hidden' id='freeze'>
    <img src="visual/backfire.png" class='hidden' id='backfire'>
    <img src="visual/thoughts.png" class='hidden' id='thoughtsdarker'>
    <img src="visual/fired.png" class='hidden' id='fired'>
    <img src="visual/kitchen/projector.jpg" class='hidden' id='projector'>
    <span id='hurt' class='hidden' style='background-color: firebrick; opacity: 60%; position: fixed; width: 100%; height: 100%; display: block; top:0; left: 0; z-index: 5;'></span>
    <span id='poison' class='hidden' style='opacity: 0.2'></span>
    <img src="visual/kitchen/televisor.png" class='hidden' id='televisor'>
    <img src="visual/kitchen/TheFall.jpg" class='hidden' id='TheFall'>
    <span id='death' class='hidden'></span>
    <span id='blackend' class='hidden' style='background-color: #000; position: fixed; width: 100%; height: 100%; display: block; top:0; left: 0; z-index:8'></span>
    <span id='blur' class='hidden'></span>
    <div class="counterouter">
        <div class="counter" id='bluecounter'><span></span><text>0</text></div>
        <div class="counter" id='goldencounter'><span></span><text>0</text></div>
        <div class="counter" id='redcounter'><span></span><text>10</text></div>
        <div class="counter greentext" id='cheat'><letter id='letter1'><u>H</u></letter><letter id='letter2'><u>E</u></letter><letter id='letter3'><u>L</u></letter><letter id='letter4'><u>L</u></letter></div>
    </div>
    <div class="message hidden" id='poisoncounter'><text>200</text></div>
    <audio id='hellsong' preload="auto" src="sound/hellsong.mp3" loop='loop'></audio>
    <audio id='friendsong2' preload="auto" src="sound/friendsong2.mp3"></audio>
    <audio id='exhausted' preload="auto" src="sound/exhausted.mp3"></audio>
    <div id='message' class='message hidden' style='z-index: 4;'><text>Сообщение</text></div>
    <div id='loadingmessage' class='message' style='z-index: 4;'><text>Загрузка...</text></div>
    <div id='godmessage' class='message hidden'>
        <text style='display:inline-block;'>Здравствуй.</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='helpmessage' class='message hidden'>
        <text style='display:inline-block;'>ЛКМ чтобы создать синий портал<br>ПКМ чтобы создать красный портал<br>Q чтобы скрыть это сообщение</text>
    </div>
    <div id='endingmessage' class='message hidden'>
        <text style='display:inline-block;'></text>
    </div>
    <div id='entermessage' class='message hidden'>
        <text style='display:inline-block;'>Нажмите Enter, чтобы поговорить со змеей.</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='cmessage' class='message hidden'>
        <text style='display:inline-block;'>Нажмите C, чтобы смыть все ингридиенты.</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='escmessage' class='message hidden'>
        <text style='display:inline-block;'>Нажмите Q, чтобы выйти из диалога.</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='devilmessage' class='message hidden'>
        <text style='display:inline-block;'>Приветствую ;)</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='rightmessage' class='message hidden'>
        <text style='display:inline-block;'>Привет!!!</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='friendmessage' class='message hidden'>
        <text style='display:inline-block;'>Привет!</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='thought' class='message hidden'>
        <text style='display:inline-block;'>Мысль</text>
    </div>
    <div style='display:block;' id='ingredients' class='message hidden'>
        <text style='display:inline-block;'>Результат</text>
    </div>
    <div id='choose' class="message">
        <div id='chooseouter' class='hidden'>
            <div class='button'>Вариант 1</div>
            <div class='button'>Вариант 2</div>
            <div class='button'>Вариант 3</div>
        </div>
    </div>
    <hr style="position: absolute; background-color: rgb(58, 58, 58); width: 1419.5px; height: 2px; left: 58px; top: 683px; z-index: 3; border: none;">

    <?php
    echo '<div><table class="Table">';
    for ($i = 1; $i <= 58; $i++) {
        echo '<tr>';
        for ($j = 1; $j <= 60; $j++) {
            if ($i > 29) {
                if ($i==58){
                    echo '<td class="x' . $j . ' y' . $i . ' block hiddencell"></td>';
                }
                else if ($j==1 || $j==60){
                    echo '<td class="x' . $j . ' y' . $i . ' block hiddencell"></td>';
                }
                else echo '<td class="x' . $j . ' y' . $i . ' hiddencell"></td>';
            } else if ($i == 1 || $j == 1 || $i == 29 || $j == 60) {
                echo '<td class="x' . $j . ' y' . $i . ' block"></td>';
            } else echo '<td class="x' . $j . ' y' . $i . '"></td>';
        }
        echo '</tr>';
    }
    echo '</table></div>';
    include_once('Profile.php');
    ?>



</body>

</html>