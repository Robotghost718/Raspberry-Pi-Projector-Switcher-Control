<?php
$command=escapeshellcmd("sudo python Mic_25.py");
$output=shell_exec($command);
//echo $output;
header("Location: ../projector.html");
die();
?>