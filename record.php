<?php
session_start();
include_once('includes.php');
include_once('check.php');
mysqli_query($conn,"UPDATE `snake` SET `record` = '".$_POST['record']."' WHERE `snake`.`name` = '".$_SESSION['name']."'");

?>