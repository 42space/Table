<?php
$clearCache = time();
?>
<!DOCTYPE html>
<html lang="pt_us">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/table.css?v=<?echo $clearCache; ?>">
    <title>Dynamic Table</title>
</head>
<body>

    <div id="tableHead" class="table-head">
    </div>
    <div id="tableBody" class="table-body">
    </div>

<script src="../js/table.js?v=<? echo $clearCache; ?>"></script>
<script src="config.js?v=<? echo $clearCache; ?>"></script>
</body>
</html>

