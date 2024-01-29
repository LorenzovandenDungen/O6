<?php
$bytes = random_bytes(32); // Genereer 32 willekeurige bytes (256 bits)

$secretKey = bin2hex($bytes); // Converteer de bytes naar een hexadecimale string

echo "Secret Key: " . $secretKey;
?>
