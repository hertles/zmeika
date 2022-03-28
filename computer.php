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
    <script src="computer.js"></script>
    <script src="Profile.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <style>
        .background{
            height: 864px; /* КОСТЫЛЬ */
        }
    </style>
</head>

<body>
    <div id='anchor' style='position: absolute; top: 0; left: 1200px; width: 20px; height: 20px'></div>
    <div id='achievement' class='hidden'><img src="visual/endings/8.png" alt="">
        <at>
            <atf>
                <ah>Открыта новая концовка!<ab>9. Virus Ending</ab>
            </atf>
        </at>
    </div>
    <audio id='neon' src="sound/neon.mp3" loop='loop'></audio>
    <div id='black' class='hidden' style='background-color: #000000; width: 100%; height: 100%; position: fixed; display: block; z-index:9999; top:0; left:0;'></div>
    <img src="visual/world/desktop.png" alt="" class="background" id="desktop">
    <img src="visual/world/zmeika.png" alt="" class="background hidden" id="zmeika">
    <img src="visual/world/browser.png" alt="" class="background hidden" id="browser">
    <img src="visual/world/mail.png" alt="" class="background hidden" id="mail">
    <img src="visual/world/mailnotchoosed.png" alt="" class="background hidden" id="mailnot">
    <img src="visual/world/code.png" alt="" class="background hidden" id="code">
    <img src="visual/world/code_snaken.png" alt="" class="background hidden" id="code_snaken">
    <img src="visual/world/code_cheats.png" alt="" class="background hidden" id="code_cheats">
    <img src="visual/world/code_hell.png" alt="" class="background hidden" id="code_hell">
    <img src="visual/world/explorer.png" alt="" class="background hidden" id="explorer">
    <img src="visual/world/earth.png" alt="" class="background hidden" id="earth">
    <img src="visual/world/apple.png" alt="" class="background hidden" id="apple">
    <img src="" alt="" class="background hidden" id="glitch">
    <audio id='friendsong2' preload="auto" src="sound/friendsong2.mp3" loop='loop'></audio>
    <audio id='power' preload="auto" src="sound/power.mp3" loop='loop'></audio>
    <div class='mouseblock' onclick='ShowMessage("Ручное управление мышью отключено",2000);' oncontextmenu='ShowMessage("Ручное управление мышью отключено",2000); return false;'></div>
    <div id='white' class='background hidden'></div>
    <div id='message' class='message hidden' style='z-index: 4;'><text>Сообщение</text></div>
    <div id='loadingmessage' class='message' style='z-index: 4;'><text>Загрузка...</text></div>
    <div id='godmessage' class='message hidden'>
        <text style='display:inline-block;'>Здравствуй.</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px; filter:invert(1)'>
    </div>
    <div id='friendmessage' class='message hidden'>
        <text style='display:inline-block;'>Привет!</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px; filter:invert(1)'>
    </div>
    <div id='entermessage' class='message hidden'>
        <text style='display:inline-block;'>Нажмите Enter, чтобы поговорить со змеей.</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px; filter:invert(1)'>
    </div>
    <div id='escmessage' class='message hidden'>
        <text style='display:inline-block;'>Нажмите Q, чтобы выйти из диалога.</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px; filter:invert(1)'>
    </div>
    <div id='devilmessage' class='message hidden'>
        <text style='display:inline-block;'>Приветствую ;)</text>
        <img src="http://cdn.onlinewebfonts.com/svg/img_515480.png" alt="" style='display:inline-block;width:25px; height: 25px; position: absolute; right: 5px; bottom: 5px; filter:invert(1)'>
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
    for ($i = 1; $i <= 36; $i++) {
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