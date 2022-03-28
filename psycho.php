<?php
    include_once('includes.php');
    include_once('check.php');
?>
<!DOCTYPE html>
<html lang='ru'>

<head>
    <title>Snaken</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="abyss.css">
    <link rel="stylesheet" href="world.css">
    <link rel="shortcut icon" href="visual\world\worldicon.png">
    <meta charset="UTF-8">
    <script src="psycho.js"></script>
    <script src="Profile.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>

<body>
    <div id='anchor' style='position: absolute; top: 0; left: 1200px; width: 20px; height: 20px'></div>
    <div id='achievement' class='hidden'><img src="visual/endings/6.png" alt="">
        <at>
            <atf>
                <ah>Открыта новая концовка!<ab>1. Fat Ending</ab>
            </atf>
        </at>
    </div>
    <audio id='psycho' src="sound/psycho.mp3" loop='loop'></audio>
    <div id='black' class='' style='background-color: #000000; width: 100%; height: 100%; position: fixed; display: block; z-index:3; top:0; left:0;'></div>
    <div id='white' class='background hidden'></div>
    <img src="visual/satan_psycho1.png" alt="" class='satan hidden' id='satan8'>
    <img src="visual/satan_psycho_cheer1.png" alt="" class='satan hidden' id='satan9'>
    <img src="visual/satan_psycho_zero_emotions1.png" alt="" class='satan hidden' id='satan10'>
    <img src="visual/satan_psycho_tentacles1.png" alt="" class='satan hidden' id='satan11'>
    <img src="visual/satan_psycho_agressive1.png" alt="" class='satan hidden' id='satan12'>
    <div id="test" class='background hidden'><img src="visual/world/test.png" alt=""></div>
    <img src="visual/world/street.png" alt="" class="background" id="street">
    <img src="visual/world/cabinet2.png" alt="" class="background hidden" id="cabinet">
    <img src="visual/world/sky.png" alt="" class="background hidden" id="sky">
    <img src="visual/abyss/life.png" alt="" class="background hidden" id="life">
    <img src="visual/world/room.png" alt="" class="background hidden" id="room">
    <div id='message' class='message hidden' style='z-index: 4;'><text>Сообщение</text></div>
    <div id='loadingmessage' class='message' style='z-index: 4;'><text>Спустя пять лет</text></div>
    <div id='godmessage' class='message hidden'>
        <text style='display:inline-block;'>Здравствуй.</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='snakemessage' class='message hidden'>
        <text style='display:inline-block;'>Привет!</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px;'>
    </div>
    <div id='entermessage' class='message hidden'>
        <text style='display:inline-block;'>Нажмите Enter, чтобы поговорить со змеей.</text>
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
    <div id='choose' class="message">
        <div id='chooseouter' class='hidden'>
            <div class='button'>Вариант1</div>
            <div class='button'>Вариант1</div>
            <div class='button'>Вариант1</div>
        </div>
    </div>


    <?php
    echo '<div><table class="Table">';
    for ($i = 1; $i <= 124; $i++) {
        echo '<tr>';
        for ($j = 1; $j <= 65; $j++) {
            echo '<td class="x' . $j . ' y' . $i . '"></td>';
        }
        echo '</tr>';
    }
    echo '</table></div>';
    include_once('Profile.php');
    ?>




</body>

</html>