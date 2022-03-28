<?php
    include_once('includes.php');
    include_once('check.php');
?>
<!DOCTYPE html>
<html lang='ru'>

<head>
    <title>S̷͙̖̩̈́̄̔̅̌̀̈́̅̕͜n̶̜̮̜̪̗̫̞̆̀̀͂ḁ̶̢͈͖͇̬̙̩̖̩̦͍̲̀͒̈́̅́̚͝ͅk̸͉̦̯̟̰̗͙̼̲̠̮̔͜e̵̱̫̥̝̝̫͍̱͈̪͍͕̖̘͌͌͜͝ṅ̴̦̪̤̱̖̞̟̹̺͓̼̼̼͙́̀͐̍͌̓͒́̎̿͒͑̃͠</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="visual/endings/2.png">
    <meta charset="UTF-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="up.js"></script>
    <script src="golden.js"></script>
    <script src="Profile.js"></script>
</head>

<body>
    <div id='achievement' class='hidden'><img src="visual/endings/2.png" alt=""><at><atf><ah>Открыта новая концовка!<ab>2. Golden Ending</ab></atf></at></div>
    <div class="counterouter">
        <div class="counter" id='bluecounter'><span></span><text>0</text></div>
        <div class="counter" id='goldencounter'><span></span><text>0</text></div>
        <div class="counter" id='redcounter'><span></span><text>2</text></div>
    </div>
    <div id='message' class='message hidden' style='z-index: 4;'><text>Сообщение</text></div>
    <div id='loadingmessage' class='message' style='z-index: 4;'><text>Загрузка...</text></div>
    


    <?php
    echo '<div><table>';
    for ($i = 1; $i <= 29; $i++) {
        echo '<tr>';
        for ($j = 1; $j <= 60; $j++) {
            if ($i == 1 || $j == 1 || $i == 29 || $j == 60) {
                echo '<td class="x' . $j . ' y' . $i . ' invblock" onclick="removeblock(this)"></td>';
            } else echo '<td class="x' . $j . ' y' . $i . '"></td>';
        }
        echo '</tr>';
    }
    echo '</table></div>';
    include_once('Profile.php');
    ?>


    <div id='bluegrad'></div>
    <img id='birds' class='gif' preload="auto" loop autoplay src="visual/birds.gif">
    <img id='beams' class='gif hidden' preload="auto" loop autoplay src="visual/beams.gif">
    <div id="godhandouter" class='godhand'>
        <img src="visual/godhand2.png" class='hidden godhandshaking' id='godhand'>
    </div>
</body>

</html>