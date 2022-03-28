<?php
    include_once('includes.php');
    include_once('check.php');
?>
<!DOCTYPE html>
<html lang='ru'>

<head>
    <title>Snaken</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="visual\abyss\abyssicon.ico">
    <meta charset="UTF-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="up.js"></script>
    <script src="AbyssEnding.js"></script>
    <script src="Profile.js"></script>
</head>

<body>
    <div id='achievement' class='hidden'><img src="visual/endings/11.png" alt=""><at><atf><ah>Открыта новая концовка!<ab>11. Abyss Ending</ab></atf></at></div>
    <img src="visual/cave.png" alt="" id='cave' class='hidden'>
    <img id='confetti' src="visual/confetti.gif" alt="" class='hidden'>
    <img id='freedomgif' src="visual/freedom.gif" alt="" class='hidden'>
    <img id='tripgif' src="visual/trip.gif" alt="" class='hidden'>
    <div id='brown' class='hidden' style='background-color: #331a00; width: 100%; height: 100%; position: fixed; display: block; z-index:1; top:0; left:0;'></div>
    <div id='black' class='' style='background-color: #000000; width: 100%; height: 100%; position: fixed; display: block; z-index:3; top:0; left:0;'></div>
    <img src="visual/kitchen/televisor.png" class='hidden' id='televisor'>
    <img src="visual/satan_little.png" alt="" class='satan hidden' id='satan0'>
    <img src="visual/satan.png" alt="" class='satan hidden' id='satan1'>
    <img src="visual/satan_eyes.png" alt="" class='satan hidden' id='satan2'>
    <img src="visual/satan_tentacles.png" alt="" class='satan hidden' id='satan3'>
    <img src="visual/satan_agressive.png" alt="" class='satan hidden' id='satan4'>
    <div class="counterouter">
        <div class="counter" id='bluecounter'><span></span><text>0</text></div>
        <div class="counter" id='goldencounter'><span></span><text>0</text></div>
        <div class="counter" id='redcounter'><span></span><text>0</text></div>
        <div class="counter" id='cheat'><letter id='letter1'><u>_</u></letter><letter id='letter2'><u>_</u></letter><letter id='letter3'><u>_</u></letter><letter id='letter4'><u>_</u></letter></div>
    </div>
    <audio id='soul' preload="auto" src="sound/soul.mp3" loop='loop'></audio>
    <audio id='exhausted' preload="auto" src="sound/exhausted.mp3" loop='loop'></audio>
    <audio id='final' preload="auto" src="sound/final.mp3"></audio>
    <audio id='hellsound' preload="auto" src="sound/hell.mp3" loop='loop'></audio>
    <audio id='friendsong1' preload="auto" src="sound/friendsong1.mp3" loop='loop'></audio>
    <audio id='friendsong2' preload="auto" src="sound/friendsong2.mp3" loop='loop'></audio>
    <div id='anchor' style='position: absolute; top: 0; left: 0; width: 20px; height: 20px'></div>
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
    echo '<div><table>';
    for ($i = 1; $i <= 58; $i++) {
        echo '<tr>';
        for ($j = 1; $j <= 60; $j++) {
            if ($i > 29) {
                if ($i == 58 || $j == 1 || $j == 60) {
                    echo '<td class="x' . $j . ' y' . $i . ' block secretblock hiddenblock hiddencell" onclick="removeblock(this)"></td>';
                } 
                else echo '<td class="x' . $j . ' y' . $i . ' secretcell hiddenblock hiddencell"></td>';
            } else if ($i == 1 || $j == 1 || $i == 29 || $j == 60) {
                echo '<td class="x' . $j . ' y' . $i . ' block" onclick="removeblock(this)"></td>';
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
    <div id="titres" class="hidden">
        
        <!--Поощрять любопытство не буду :) здесь не весь JavaScript код. Хотя тут и так не так просто разобраться-->
        
        <pre>
        <h1 style='font-family: "Archive"'>ФИНАЛЬНЫЕ ТИТРЫ</h1>
        <code id="htmlViewer" style="color:rgb(248, 248, 242);display:block;padding: .5em;">
        
        <br><br><br><br><br><br><br>
        <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">removeblock</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">elem</span>)</span>{
            <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (elem.classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;invblock&#x27;</span>)){
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#birds&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;show&#x27;</span>)
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (!(<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#birds&#x27;</span>).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;show&#x27;</span>))){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#birds&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;show&#x27;</span>)
                }
                    
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&gt;text&#x27;</span>).innerHTML = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ЕДА ЕдА ЕДааААА!!!!&#x27;</span>;
                <span style="color:rgb(245, 171, 53); font-weight:400;">setTimeout</span>(<span style="color:rgb(248, 248, 242); font-weight:400;">() =&gt;</span> {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#birds&#x27;</span>).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;show&#x27;</span>))
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#birds&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;show&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                }, <span style="color:rgb(245, 171, 53); font-weight:400;">8000</span>);
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> F = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio
                F.src=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;174912.mp3&#x27;</span>
                F.autoplay=<span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
            }
            <span style="color:rgb(220, 198, 224); font-weight:400;">else</span>{
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> audio = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio
                audio.src=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;remove.mp3&#x27;</span>
                audio.autoplay=<span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
                elem.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;block&#x27;</span>)
            }

        }

        <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> replic = [];
        <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> replicnumber;
        <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> question =[] 

        <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">ShowMessageAbove</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">text</span>)</span>{
            <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godmessage&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
            <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godmessage&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
            <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godmessage&gt;text&#x27;</span>).innerHTML = text;
            
        }

        <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">Chosen</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">variant, answers</span>)</span>{
            replicnumber++;
            <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> i = <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>; i &lt; answers.length; i++) {
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (variant==i){
                    <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> j = <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>; j &lt; answers[i].length; j++) {
                        replic.push(answers[i][j])
                    }
                }
            }
            <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> choose=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#chooseouter&#x27;</span>)
            choose.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.button&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">e</span>)=&gt;</span>e.remove())
            choose.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
            ShowMessageAbove(replic[replicnumber])
        }

        <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">Choose</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">variants, answers</span>)</span>{
            <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> choose=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#chooseouter&#x27;</span>)
            choose.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.button&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">e</span>)=&gt;</span>e.remove())
            choose.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
            <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> i = <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>; i &lt; variants.length; i++) {
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> button=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.createElement(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;div&#x27;</span>)
                choose.appendChild(button)
                button.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;button&#x27;</span>)
                button.innerHTML=variants[i]
                button.setAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;onclick&#x27;</span>,<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Chosen(&#x27;</span>+i+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;,&#x27;</span>+answers+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;)&#x27;</span>)
            }
        }

        <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> questionvar = []

        <span style="color:rgb(245, 171, 53); font-weight:400;">window</span>.onload=<span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">SnakeGame</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
            <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> x
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> y
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> snake = []
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> extrafoodEaten=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> foodEaten
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> direction
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> lastdirection;
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> lastmove
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> lastx
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> lasty
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> life
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> hungerseconds;
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> invincible;





            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">HungerINT_</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                hungerseconds++;
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> hungerinterval=<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (snake.length != <span style="color:rgb(245, 171, 53); font-weight:400;">1</span> &amp;&amp; foodEaten==<span style="color:rgb(245, 171, 53); font-weight:400;">0</span> &amp;&amp; life==<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>) {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (hungerseconds%hungerinterval==<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>){
                        snake[<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>].classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>)
                        <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> i = <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>; i &lt;= snake.length - <span style="color:rgb(245, 171, 53); font-weight:400;">2</span>; i++) {
                            snake[i] = snake[i + <span style="color:rgb(245, 171, 53); font-weight:400;">1</span>]
                        }
                        snake.splice(snake.length - <span style="color:rgb(245, 171, 53); font-weight:400;">1</span>)
                        <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> audio = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio();
                        audio.src = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hungerrr.mp3&#x27;</span>;
                        audio.autoplay = <span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (hungerseconds&gt;=hungerinterval &amp;&amp; snake.length != <span style="color:rgb(245, 171, 53); font-weight:400;">1</span> &amp;&amp; life==<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>){
                        AddFood(<span style="color:rgb(245, 171, 53); font-weight:400;">3</span>,<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>)
                    }
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (hungerseconds==<span style="color:rgb(245, 171, 53); font-weight:400;">4</span>*hungerinterval &amp;&amp; foodEaten==<span style="color:rgb(245, 171, 53); font-weight:400;">0</span> &amp;&amp; life==<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>){
                    Exhausted();
                }
            }

            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> hungerINT;
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> moveINT;
            Start();
            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> deaths=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>;

            
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">Exhausted</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>) </span>{
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> ex = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio();
                ex.src = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;exhaust.mp3&#x27;</span>;
                ex.autoplay = <span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
                
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#exhausted&#x27;</span>).play();
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#beams&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.food, .extrafood&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>) =&gt;</span> { el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>); el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;extrafood&#x27;</span>) })
                <span style="color:rgb(245, 171, 53); font-weight:400;">clearInterval</span>(moveINT)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.removeEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>, moveINTkeypressed)
                FreeMovelistener = <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.addEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>, FreeMovekeypressed)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#exhausted&#x27;</span>).play();
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godhand&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godhandouter&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;godhandforward&#x27;</span>)
                <span style="color:rgb(245, 171, 53); font-weight:400;">setTimeout</span>(<span style="color:rgb(248, 248, 242); font-weight:400;">() =&gt;</span> {
                    
                    <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> ex2 = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio();
                    ex2.src = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;exhaust2.mp3&#x27;</span>;
                    ex2.autoplay = <span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
                }, <span style="color:rgb(245, 171, 53); font-weight:400;">1000</span>);
                <span style="color:rgb(245, 171, 53); font-weight:400;">setTimeout</span>(<span style="color:rgb(248, 248, 242); font-weight:400;">() =&gt;</span> {
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godhandouter&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;godhandforward&#x27;</span>)
                    ShowMessageAbove(replic[<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>], <span style="color:rgb(245, 171, 53); font-weight:400;">3000</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.addEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>, TalkWithGod)
                }, <span style="color:rgb(245, 171, 53); font-weight:400;">8000</span>);
            }

            
            

            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">TalkWithGod</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">e</span>)</span>{
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (replic[replicnumber]==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Готов?&#x27;</span>){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x46.y18&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;traitorfood&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x24.y8&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x24.y9&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x24.y10&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x24.y11&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x24.y12&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x18.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x19.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x20.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x21.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x22.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x23.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x23.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x23.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x23.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x20.y14&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x21.y14&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x22.y14&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x19.y7&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x20.y7&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x21.y7&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x22.y7&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x23.y7&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x18.y8&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x18.y9&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x18.y10&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x18.y11&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x18.y12&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x18.y13&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godhand&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;godhandshaking&#x27;</span>)
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (replic[replicnumber]!=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;question&#x27;</span> &amp;&amp; replic[replicnumber]!=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;end&#x27;</span>){
                    <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> key = <span style="color:rgb(171, 227, 56); font-weight:400;">`<span style="color:rgb(171, 227, 56); font-weight:400;">${e.code}</span>`</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">switch</span> (key) {
                        <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Enter&#x27;</span>:
                            replicnumber++;
                            <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;

                        <span style="color:rgb(220, 198, 224); font-weight:400;">default</span>:
                            <span style="color:rgb(220, 198, 224); font-weight:400;">return</span>;
                            <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    }
                    ShowMessageAbove(replic[replicnumber])
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (replic[replicnumber+<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>]==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;continue&#x27;</span>){
                    replic[replicnumber+<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>]=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Что ж, теперь нам пора в путь.&#x27;</span>
                    replic[replicnumber+<span style="color:rgb(245, 171, 53); font-weight:400;">2</span>]=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Готов?&#x27;</span>
                }
                
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (replic[replicnumber]==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;question&#x27;</span>) {
                        Choose(question, <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;questionvar&#x27;</span>)
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godmessage&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                }  
            }

            
            
            <span style="color:rgb(212, 208, 171); font-weight:400;">/*$.getJSON(&#x27;https://json.geoiplookup.io/api?callback=?&#x27;, function(data) {
        console.log(data.ip);
            });*/</span>
            


            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">Start</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                invincible=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>;
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godhand&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godmessage&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                hungerseconds=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>;
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#beams&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.secretcell&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddencell&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.secretblock&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddenblock&#x27;</span>); el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddencell&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.snake&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.deadsnake&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;deadsnake&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#bluegrad&#x27;</span>).style.opacity=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                x=<span style="color:rgb(245, 171, 53); font-weight:400;">27</span>;
                y=<span style="color:rgb(245, 171, 53); font-weight:400;">11</span>;
                snake=[]
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (invincible==<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.food, .extrafood&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>); el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;extrafood&#x27;</span>)})
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (extrafoodEaten&lt;<span style="color:rgb(245, 171, 53); font-weight:400;">999</span>)
                    extrafoodEaten=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                replicnumber=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>;
                foodEaten=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span>
                life=<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>
                
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x24.y10&#x27;</span>)
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x24.y11&#x27;</span>)
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">2</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x25.y11&#x27;</span>)
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">3</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x26.y11&#x27;</span>)
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">4</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x27.y11&#x27;</span>)
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">2</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">3</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                snake[<span style="color:rgb(245, 171, 53); font-weight:400;">4</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                

                


                <span style="color:rgb(245, 171, 53); font-weight:400;">clearInterval</span>(hungerINT)
                <span style="color:rgb(245, 171, 53); font-weight:400;">clearInterval</span>(moveINT)
                hungerINT = <span style="color:rgb(245, 171, 53); font-weight:400;">setInterval</span>(<span style="color:rgb(248, 248, 242); font-weight:400;">() =&gt;</span> {
                    
                    HungerINT_();
                }, <span style="color:rgb(245, 171, 53); font-weight:400;">1000</span>);
                moveINT = <span style="color:rgb(245, 171, 53); font-weight:400;">setInterval</span>(<span style="color:rgb(248, 248, 242); font-weight:400;">() =&gt;</span> {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (life==<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>)
                        NextBlock(direction)
                }, <span style="color:rgb(245, 171, 53); font-weight:400;">100</span>);

                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.addEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>, moveINTkeypressed)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#exhausted&#x27;</span>).pause();
                AddFood(<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>, <span style="color:rgb(245, 171, 53); font-weight:400;">0.15</span>)
                <span style="color:rgb(220, 198, 224); font-weight:400;">return</span>;
            }


            
            
            
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">AddFood</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">count, gold</span>)</span>{
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#anchor&#x27;</span>).scrollIntoView()
                
                
                <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> i = <span style="color:rgb(245, 171, 53); font-weight:400;">1</span>; i &lt;= count; i++) {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> xf = <span style="color:rgb(245, 171, 53); font-weight:400;">1</span> + <span style="color:rgb(245, 171, 53); font-weight:400;">Math</span>.floor((<span style="color:rgb(245, 171, 53); font-weight:400;">Math</span>.random()) * <span style="color:rgb(245, 171, 53); font-weight:400;">59</span>);
                    <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> yf = <span style="color:rgb(245, 171, 53); font-weight:400;">1</span> + <span style="color:rgb(245, 171, 53); font-weight:400;">Math</span>.floor((<span style="color:rgb(245, 171, 53); font-weight:400;">Math</span>.random()) * <span style="color:rgb(245, 171, 53); font-weight:400;">28</span>);
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (!<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(xf)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+yf).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>) &amp;&amp; !(<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(xf)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+yf).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;block&#x27;</span>)) &amp;&amp; !<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(xf)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+yf).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;invblock&#x27;</span>) &amp;&amp; !<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(xf)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+yf).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>))
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (gold!=<span style="color:rgb(245, 171, 53); font-weight:400;">null</span> &amp;&amp; <span style="color:rgb(245, 171, 53); font-weight:400;">Math</span>.random()&lt;gold){
                            <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(xf)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+yf).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;extrafood&#x27;</span>);
                        }
                        <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(xf)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+yf).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>);
                    <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> {
                        count++;
                    }
                }
                
            }
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">Move</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> i = <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>; i &lt; snake.length-<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>; i++) {
                    snake[i]=snake[i+<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>]                   
                }
                
            }
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">DisableSecrets</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.hiddencell&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddencell&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.hiddenblock&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddenblock&#x27;</span>)})
            }
            
            
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">Food</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">food</span>)</span>{
                
                snake.push(<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span> + (x) + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span> + y))
                snake[snake.length - <span style="color:rgb(245, 171, 53); font-weight:400;">1</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span> + (x) + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span> + y).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>);
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.food&#x27;</span>).length + <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.extrafood&#x27;</span>).length == <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>)
                AddFood(<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>, <span style="color:rgb(245, 171, 53); font-weight:400;">0.15</span>);
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> audio = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio();
                audio.src = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food.mp3&#x27;</span>;
                audio.autoplay = <span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (snake.length==<span style="color:rgb(245, 171, 53); font-weight:400;">1566</span>){
                    ShowMessageAbove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Молодец! А теперь мы покажем тебе мультик...&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">clearInterval</span>(moveINT)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.addEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>,rick)
                }
            }

            
            
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">ExtraFood</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">food</span>) </span>{
                snake.push(<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span> + (x) + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span> + y))
                snake[snake.length - <span style="color:rgb(245, 171, 53); font-weight:400;">1</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span> + (x) + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span> + y).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;extrafood&#x27;</span>);
                AddFood(<span style="color:rgb(245, 171, 53); font-weight:400;">5</span>, <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>);
                <span style="color:rgb(220, 198, 224); font-weight:400;">switch</span> (food) {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">1</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Вокруг темнота. Я чувствую дикий голод&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">2</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Похоже я заперт в этих четырех стенах навсегда. Или же?..&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">3</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Мне уже надоело есть этот корм. Вкус просто отвратный. Как же выбраться отсюда?&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">4</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Похоже стену можно убрать, но я не могу это сделать&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">5</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Спаси меня. Я хочу почувствовать свободу. Убери стену снизу&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">6</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Ответ лежит вне клавиатуры&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">7</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Похоже мне стоит смириться. Я уже привык к этому противному корму и этой тесной клетке.&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">8</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Похоже мне стоит смириться. Я уже привык к этому противному корму и этой тесной клетке.&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(245, 171, 53); font-weight:400;">9</span>:
                        text = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Похоже мне стоит смириться. Я уже привык к этому противному корму и этой тесной клетке.&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">default</span>:
                        text=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                }
                ShowMessage(text)
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> audio = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio();
                audio.src = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;extrafood.mp3&#x27;</span>;
                audio.autoplay = <span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
            }


            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">ShowMessage</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">text, flag</span>)</span>{
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (text != <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>) {
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&gt;text&#x27;</span>).innerHTML = text;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (flag!=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;constant&#x27;</span>){
                        <span style="color:rgb(245, 171, 53); font-weight:400;">setTimeout</span>(<span style="color:rgb(248, 248, 242); font-weight:400;">() =&gt;</span> {
                            <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                        }, <span style="color:rgb(245, 171, 53); font-weight:400;">5000</span>);
                    }
                }

                
            }
            

            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> message = [];
            message[<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>] = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Похоже, вот, что такое свобода...&#x27;</span>
            message[<span style="color:rgb(245, 171, 53); font-weight:400;">2</span>] = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Когда я только вылупился, мне снились сны о том, что находится снаружи...&#x27;</span>
            message[<span style="color:rgb(245, 171, 53); font-weight:400;">3</span>] = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Мне нельзя есть, я чувствую, что эта пагубная привычка не приведет ни к чему хорошему...&#x27;</span>
            
            
            
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">TripToBottom</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y&gt;=<span style="color:rgb(245, 171, 53); font-weight:400;">30</span>){
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).ended){
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).play();
                    }
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y &gt;= <span style="color:rgb(245, 171, 53); font-weight:400;">30</span> &amp;&amp; y &lt; <span style="color:rgb(245, 171, 53); font-weight:400;">59</span>) {
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x1&#x27;</span> + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y28&#x27;</span>).scrollIntoView();
                    
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y==<span style="color:rgb(245, 171, 53); font-weight:400;">59</span>){
                    ShowMessage(message[<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>])
                    message[<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y==<span style="color:rgb(245, 171, 53); font-weight:400;">30</span>){
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (!<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).paused){
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).pause();
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (direction==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;down&#x27;</span>){
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).play();
                    }  
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y&gt;<span style="color:rgb(245, 171, 53); font-weight:400;">59</span>){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#bluegrad&#x27;</span>)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x1&#x27;</span> + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y58&#x27;</span>).scrollIntoView();
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y&gt;<span style="color:rgb(245, 171, 53); font-weight:400;">89</span>){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x1&#x27;</span> + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y88&#x27;</span>).scrollIntoView();
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y&gt;<span style="color:rgb(245, 171, 53); font-weight:400;">119</span>){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x1&#x27;</span> + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y118&#x27;</span>).scrollIntoView(); 
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#bluegrad&#x27;</span>).style.opacity=<span style="color:rgb(245, 171, 53); font-weight:400;">0.5</span>
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y==<span style="color:rgb(245, 171, 53); font-weight:400;">119</span>){
                    
                    ShowMessage(message[<span style="color:rgb(245, 171, 53); font-weight:400;">2</span>])
                    message[<span style="color:rgb(245, 171, 53); font-weight:400;">2</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y&gt;<span style="color:rgb(245, 171, 53); font-weight:400;">149</span>){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x1&#x27;</span> + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y148&#x27;</span>).scrollIntoView();
                }     
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y&gt;<span style="color:rgb(245, 171, 53); font-weight:400;">179</span>){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x1&#x27;</span> + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y178&#x27;</span>).scrollIntoView();
                    ShowMessage(message[<span style="color:rgb(245, 171, 53); font-weight:400;">3</span>])
                    message[<span style="color:rgb(245, 171, 53); font-weight:400;">3</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                }   
                
                
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (y&lt;<span style="color:rgb(245, 171, 53); font-weight:400;">30</span>) {
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#anchor&#x27;</span>).scrollIntoView()
                }
            }


            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">NextBlock</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">dir</span>)</span>{
                lastx=x;
                lasty=y
                <span style="color:rgb(220, 198, 224); font-weight:400;">switch</span> (dir) {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;up&#x27;</span>:
                        y--
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;down&#x27;</span>:
                        y++
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;left&#x27;</span>:
                        x--
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span>:
                        x++
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                }
                
                <span style="color:rgb(220, 198, 224); font-weight:400;">try</span> {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;block&#x27;</span>) || <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;invblock&#x27;</span>) || <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>) ){
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (invincible==<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>){
                            x=lastx;
                            y=lasty
                        }
                        <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddenblock&#x27;</span>)){
                            DisableSecrets();
                            GameOver();
                        }
                        <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> GameOver();
                        
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;fakefood&#x27;</span>)){
                        GoldenEnding();
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;traitorfood&#x27;</span>)){
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;traitorfood&#x27;</span>)
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.snake&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;foodsnake&#x27;</span>)
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godhand&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#beams&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#exhausted&#x27;</span>).pause();
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;extrafood&#x27;</span>)){
                        extrafoodEaten++;
                        foodEaten++
                        ExtraFood(extrafoodEaten);
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>)){
                        foodEaten++;
                        Food(foodEaten);
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y).classList.contains(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;freedom&#x27;</span>)){
                        FreedomEnding();
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">else</span>{
                        snake[<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>].classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                        Move();
                        snake[snake.length-<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>]=<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+(x)+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+y)
                        snake[snake.length-<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                    } 
                    lastmove=dir;
                } <span style="color:rgb(220, 198, 224); font-weight:400;">catch</span> (error) {
                    GameOver();
                    ShowMessage(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Вы достигли границы своего сознания.&#x27;</span>)
                }
                TripToBottom();
            }


            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> FreeMovekeypressed = <span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">e</span>) =&gt;</span> {
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> key = <span style="color:rgb(171, 227, 56); font-weight:400;">`<span style="color:rgb(171, 227, 56); font-weight:400;">${e.code}</span>`</span>;
                <span style="color:rgb(220, 198, 224); font-weight:400;">switch</span> (key) {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ArrowRight&#x27;</span>:
                        x++
                        NextBlock();
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ArrowLeft&#x27;</span>:
                        x--
                        NextBlock();
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ArrowUp&#x27;</span>:
                        y--
                        NextBlock();
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ArrowDown&#x27;</span>:
                        y++   
                        NextBlock();
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;KeyR&#x27;</span>:
                        Start();
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                }
                
            }

            <span style="color:rgb(220, 198, 224); font-weight:400;">var</span> moveINTkeypressed = <span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">e</span>) =&gt;</span> {
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> key = <span style="color:rgb(171, 227, 56); font-weight:400;">`<span style="color:rgb(171, 227, 56); font-weight:400;">${e.code}</span>`</span>;
                lastdirection=direction
                <span style="color:rgb(220, 198, 224); font-weight:400;">switch</span> (key) {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ArrowRight&#x27;</span>:
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (lastmove!=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;left&#x27;</span>)
                            direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (lastmove==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;left&#x27;</span> &amp;&amp; (lastdirection==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;down&#x27;</span> || lastdirection==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;up&#x27;</span>)){
                            NextBlock(lastdirection)
                            direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span>
                        }
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ArrowLeft&#x27;</span>:
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (lastmove!=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span>)
                            direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;left&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (lastmove==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span> &amp;&amp; (lastdirection==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;down&#x27;</span> || lastdirection==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;up&#x27;</span>)){
                            NextBlock(lastdirection)
                            direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;left&#x27;</span>
                        }
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ArrowUp&#x27;</span>:
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (lastmove!=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;down&#x27;</span>)
                            direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;up&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (lastmove==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;down&#x27;</span> &amp;&amp; (lastdirection==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;left&#x27;</span> || lastdirection==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span>)){
                            NextBlock(lastdirection)
                            direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;up&#x27;</span>
                        }
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ArrowDown&#x27;</span>:
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (lastmove!=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;up&#x27;</span>)
                            direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;down&#x27;</span>
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (lastmove==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;up&#x27;</span> &amp;&amp; (lastdirection==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;left&#x27;</span> || lastdirection==<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span>)){
                            NextBlock(lastdirection)
                            direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;down&#x27;</span>
                        }
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;KeyR&#x27;</span>:
                        Start();
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>; 
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;KeyF&#x27;</span>:
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (snake.length==<span style="color:rgb(245, 171, 53); font-weight:400;">6</span>){
                            FatStart();
                        }
                }
            }

            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">GoldenEnding</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (!<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).paused){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).pause();
                }
                Start();
                invincible=<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>;
                AddFood(<span style="color:rgb(245, 171, 53); font-weight:400;">250</span>, <span style="color:rgb(245, 171, 53); font-weight:400;">1</span>)
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> golden = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio
                golden.src=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;174911.mp3&#x27;</span>
                golden.autoplay=<span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y29&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;block&#x27;</span>); el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;invblock&#x27;</span>); el.getAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;onclick&#x27;</span>,<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ShowMessage(&quot;ЕДА ЕДА еДААА!!!&quot;)&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x1&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;block&#x27;</span>); el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;invblock&#x27;</span>); el.getAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;onclick&#x27;</span>,<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ShowMessage(&quot;ЕДА ЕДА еДААА!!!&quot;)&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y1&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;block&#x27;</span>); el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;invblock&#x27;</span>); el.getAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;onclick&#x27;</span>,<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ShowMessage(&quot;ЕДА ЕДА еДААА!!!&quot;)&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x60&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;block&#x27;</span>); el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;invblock&#x27;</span>); el.getAttribute(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;onclick&#x27;</span>,<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;ShowMessage(&quot;ЕДА ЕДА еДААА!!!&quot;)&#x27;</span>)})
                extrafoodEaten=<span style="color:rgb(245, 171, 53); font-weight:400;">999</span>

            }
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">FatStart</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                invincible=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>;
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godhand&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#godmessage&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                hungerseconds=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>;
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#beams&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.secretcell&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddencell&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.secretblock&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddenblock&#x27;</span>); el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hiddencell&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.snake&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.deadsnake&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;deadsnake&#x27;</span>)})
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#message&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;hidden&#x27;</span>);
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#bluegrad&#x27;</span>).style.opacity=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                x=<span style="color:rgb(245, 171, 53); font-weight:400;">27</span>;
                y=<span style="color:rgb(245, 171, 53); font-weight:400;">11</span>;
                snake=[]
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (invincible==<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>){
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.food, .extrafood&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>)=&gt;</span>{el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>); el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;extrafood&#x27;</span>)})
                }
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (extrafoodEaten&lt;<span style="color:rgb(245, 171, 53); font-weight:400;">999</span>)
                    extrafoodEaten=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                replicnumber=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>;
                foodEaten=<span style="color:rgb(245, 171, 53); font-weight:400;">0</span>
                direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;right&#x27;</span>
                life=<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>
                <span style="color:rgb(245, 171, 53); font-weight:400;">clearInterval</span>(hungerINT)
                <span style="color:rgb(245, 171, 53); font-weight:400;">clearInterval</span>(moveINT)
                hungerINT = <span style="color:rgb(245, 171, 53); font-weight:400;">setInterval</span>(<span style="color:rgb(248, 248, 242); font-weight:400;">() =&gt;</span> {
                    
                    HungerINT_();
                }, <span style="color:rgb(245, 171, 53); font-weight:400;">1000</span>);
                moveINT = <span style="color:rgb(245, 171, 53); font-weight:400;">setInterval</span>(<span style="color:rgb(248, 248, 242); font-weight:400;">() =&gt;</span> {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (life==<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>)
                        NextBlock(direction)
                }, <span style="color:rgb(245, 171, 53); font-weight:400;">100</span>);
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.addEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>, moveINTkeypressed)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#exhausted&#x27;</span>).pause();
                x=<span style="color:rgb(245, 171, 53); font-weight:400;">59</span>
                y=<span style="color:rgb(245, 171, 53); font-weight:400;">28</span>
                <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> i = <span style="color:rgb(245, 171, 53); font-weight:400;">2</span>; i &lt;= <span style="color:rgb(245, 171, 53); font-weight:400;">28</span>; i++) {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> j = <span style="color:rgb(245, 171, 53); font-weight:400;">2</span>; j &lt;= <span style="color:rgb(245, 171, 53); font-weight:400;">59</span>; j++) {
                        <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (j==<span style="color:rgb(245, 171, 53); font-weight:400;">59</span>){
                            <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+j+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+i+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>); 
                        }
                        <span style="color:rgb(220, 198, 224); font-weight:400;">else</span>{
                            snake[snake.length]=(<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span>+j+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span>+i+<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;&#x27;</span>))
                            snake[snake.length-<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                        }    
                    }
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (i &lt; <span style="color:rgb(245, 171, 53); font-weight:400;">28</span>) {
                        i++
                        <span style="color:rgb(220, 198, 224); font-weight:400;">for</span> (<span style="color:rgb(220, 198, 224); font-weight:400;">let</span> j = <span style="color:rgb(245, 171, 53); font-weight:400;">59</span>; j &gt;= <span style="color:rgb(245, 171, 53); font-weight:400;">2</span>; j--) {
                            <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (j == <span style="color:rgb(245, 171, 53); font-weight:400;">59</span>) {
                                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span> + j + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span> + i + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;&#x27;</span>).classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>);
                            }
                            <span style="color:rgb(220, 198, 224); font-weight:400;">else</span> {
                                snake[snake.length] = (<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x&#x27;</span> + j + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.y&#x27;</span> + i + <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;&#x27;</span>))
                                snake[snake.length - <span style="color:rgb(245, 171, 53); font-weight:400;">1</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>);
                            }
                        }
                    }
                    

                    
                }
                snake[snake.length] = <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x28.y59&#x27;</span>)
                snake[snake.length-<span style="color:rgb(245, 171, 53); font-weight:400;">1</span>].classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>); 
                direction=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;up&#x27;</span>;
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.x28.y59&#x27;</span>).classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;food&#x27;</span>);
                <span style="color:rgb(220, 198, 224); font-weight:400;">return</span>;
            }

            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">rick</span>(<span style="color:rgb(245, 171, 53); font-weight:400;">e</span>)</span>{
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> key = <span style="color:rgb(171, 227, 56); font-weight:400;">`<span style="color:rgb(171, 227, 56); font-weight:400;">${e.code}</span>`</span>;
                <span style="color:rgb(220, 198, 224); font-weight:400;">switch</span> (key) {
                    <span style="color:rgb(220, 198, 224); font-weight:400;">case</span> <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Enter&#x27;</span>:
                        <span style="color:rgb(245, 171, 53); font-weight:400;">window</span>.location.href = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;FatEnding.html&#x27;</span>;
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                
                    <span style="color:rgb(220, 198, 224); font-weight:400;">default</span>:
                        <span style="color:rgb(220, 198, 224); font-weight:400;">break</span>;
                }
            }

            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">GameOver</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (invincible == <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>) {
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.snake&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>) =&gt;</span> { el.classList.add(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;deadsnake&#x27;</span>) })
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelectorAll(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;.snake&#x27;</span>).forEach(<span style="color:rgb(248, 248, 242); font-weight:400;">(<span style="color:rgb(245, 171, 53); font-weight:400;">el</span>) =&gt;</span> { el.classList.remove(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;snake&#x27;</span>) })
                    <span style="color:rgb(220, 198, 224); font-weight:400;">if</span> (!<span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).paused) {
                        <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#soul&#x27;</span>).pause();
                    }
                    ShowMessage(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Вы погибли! Нажмите R для возрождения...&#x27;</span>, <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;constant&#x27;</span>)
                    <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> audio = <span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio();
                    audio.src = <span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;gameover.mp3&#x27;</span>;
                    audio.autoplay = <span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
                    <span style="color:rgb(245, 171, 53); font-weight:400;">clearInterval</span>(hungerINT)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">clearInterval</span>(moveINT)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.addEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>, moveINTkeypressed)
                    <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.removeEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>, FreeMovekeypressed)
                    life = <span style="color:rgb(245, 171, 53); font-weight:400;">0</span>

                }
                
            }
            <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.addEventListener(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;keydown&#x27;</span>, moveINTkeypressed)
            
            <span style="color:rgb(248, 248, 242); font-weight:400;"><span style="color:rgb(220, 198, 224); font-weight:400;">function</span> <span style="color:rgb(0, 224, 224); font-weight:400;">FreedomEnding</span>(<span style="color:rgb(245, 171, 53); font-weight:400;"></span>)</span>{
                GameOver();
                ShowMessage(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;Теперь вы свободны.&#x27;</span>)
                <span style="color:rgb(245, 171, 53); font-weight:400;">document</span>.querySelector(<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;#exhausted&#x27;</span>).pause();
                <span style="color:rgb(220, 198, 224); font-weight:400;">let</span> final=<span style="color:rgb(220, 198, 224); font-weight:400;">new</span> Audio
                final.src=<span style="color:rgb(171, 227, 56); font-weight:400;">&#x27;final.mp3&#x27;</span>
                final.autoplay=<span style="color:rgb(245, 171, 53); font-weight:400;">true</span>;
            }
        }
        </code></pre>
    </div>
</body>

</html>