<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    require_once("../config/database.php");

    $database = new Database();

    $conn = $database->getConnection();

    if($conn !== null):?>
            <h1>Connection à la BDD réussie!</h1>
<?php endif; ?>
</body>
</html>