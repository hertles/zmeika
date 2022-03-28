<?php
session_start();
include_once('includes.php');
mysqli_query($conn,"UPDATE `snake` SET `ending".$_POST['number']."` = '1' WHERE `snake`.`name` = '".$_SESSION['name']."';");

?>