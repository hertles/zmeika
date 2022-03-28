<?php
    $name=$_SESSION['name'];
    $cell=mysqli_fetch_row(mysqli_query($conn, "SELECT `record` FROM `snake` WHERE `name`='".$name."'"))[0];
    for ($i=1; $i <= 11; $i++) { 
        $ending[$i]=mysqli_fetch_row(mysqli_query($conn, "SELECT `ending".$i."` FROM `snake` WHERE `name`='".$name."'"))[0];
    }

    echo "<div class='Profile hidden'><div class='nameOuter'><greybg>".$name."</greybg></div><div class='endingsOuter'><div class='endingsInner'>";
    for ($i=1; $i <= 11; $i++) { 
        if ($ending[$i]==1){
            echo "<img class='endingcard' id='ending".$i."' src='visual/endings/".$i.".png'>";
        }
        if ($ending[$i]==0){
            echo "<img class='endingcard' id='ending".$i."' src='visual/closed/".$i.".png'>";
        }
    }
    echo "</div></div>";
    echo "<div class='recordOuter'>рекорд: <greybg><span>".$cell."</span><bluespan></bluespan></greybg></div>";
    echo "<greybg id='exit' onclick='Exit()'>Выйти</greybg>";
    echo "</div>";
?>