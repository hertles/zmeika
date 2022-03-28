<?php
include_once('includes.php');
include_once('check.php');
?>
<!DOCTYPE html>
<html lang='ru'>

<head>
    <title>Snaken</title>
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="visual/endings/1.png">
    <meta charset="UTF-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <style>
        .hidden {
            display: hidden;
        }

        #black {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #000;
            z-index: 999;
        }
    </style>
    <script src="Profile.js"></script>
    <script>
        function Black() {
            setTimeout(() => {
                document.querySelector("#black").classList.add("hidden")

            }, 1000);
        }
        window.onload = function FatEnding() {
            
            Achieve = function(number, text) {
                let username = document.querySelector('.nameOuter').innerHTML
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
                    url: 'add_new_ending.php',
                    method: 'POST',
                    data: {
                        number: number,
                        username: username
                    },
                    success: function() {
                        document.querySelector('#ending' + number).setAttribute('src', 'visual/endings/' + number + '.png')
                    },
                    error: function(event) {
                        console.log(event);
                    }

                })
            }
            setTimeout(() => {
                Achieve(1, 'Fat Ending')
            }, 2000);
        }
    </script>
</head>

<body>
    <div id="black"></div>
    <div id='achievement' class='hidden'><img src="visual/endings/1.png" alt="">
        <at>
            <atf>
                <ah>Открыта новая концовка!<ab>1. Fat Ending</ab>
            </atf>
        </at>
    </div>
    <div style='pointer-events: none;'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1&enablejsapi=1?showinfo=0" title="YouTube video player" frameborder="0" style='position: absolute; top:0; left: 0; z-index:5;' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; controls;" onload='Black()' allowfullscreen></iframe>
    </div>
    <?php
    include_once('Profile.php');
    ?>
</body>

</html>