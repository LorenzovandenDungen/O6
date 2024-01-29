<?php

function begroeting($naam) {
    $uur = date("H"); // Haalt het huidige uur op.

    if ($uur < 12) {
        return "Goedemorgen " . $naam;
    } else if ($uur >= 12 && $uur < 18) {
        return "Goedemiddag " . $naam;
    } else {
        return "Goedenavond " . $naam;
    }
}

// Voorbeeld van gebruik:
echo begroeting("Vasco") . "<br>";
echo begroeting("Jesse") . "<br>";
echo begroeting("Nadir") . "<br>";

// Om te testen kun je de waarde van $uur handmatig instellen.
// Bijvoorbeeld:
// $uur = 16; // Voor een namiddag begroeting.
// $uur = 11; // Voor een ochtend begroeting.
?>
