<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Snaken</title>
    <style>
        body{
            background-color: #000;
        }
        #flex{
            display:flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            width: 100%;
            height: 100%;
            top:0;
            left:0;
        }
        #authorize{
            border-radius: 5px;
            width: 500px;
            height: 200px;
            background-color: rgb(88, 88, 88);
            border: 2px solid #444400;
            display: flex;
            justify-content: center;
        }
        #form{
            width: 500px;
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        input[type='text']{
            border-radius: 3px;
            background-color: rgb(66, 66, 66);
            border: 2px solid #444400;
            outline: none;
            width: 400px;
            height: 30px;
            font-size: 20px;
            font-family: 'Archive';
            color: white;
        }
        input[type='submit']{
            border-radius: 3px;
            background-color: rgb(77, 77, 77);
            border: 2px solid #444400;
            outline: none;
            width: 100px;
            height: 30px;
            font-size: 20px;
            font-family: 'Archive';
            cursor: pointer;
            color: white;
        }
        input[type='submit']:hover{
            transform: scale(0.95);
            background-color: rgb(55, 55, 55);
        }
        
    </style>
</head>
<body>
<div id="flex">
<div id="authorize">
    <form id='form' action="index.php" method='POST'>
        <div>Введите имя змейки</div>
        <div><input type="text" name="snake_name" autocomplete="off" id=""></div>
        <div><input type="submit" name='snake_ready' value="Начать"></div>
    </form>
</div>
</div>

</body>
</html>