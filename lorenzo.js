//klik op de tab HTML om de HTML code te zien en eventueel aan te passen!

function myFunction(){
  //laat de datum van vandaag op het scherm zien met een alert box 
  var today = new Date();
  alert("Vandaag is het: " + today.toDateString());
}

function colorIt(el){
  //verander de tekstkleur van el
  el.style.color = "blue";
}

function changeText(id, text){
 //verander de tekst met de id: info in jouw naam, gebruik voor de id en je naam de gegevens die je aan de functie hebt meegegeven, check ik de tab HTML of alles klopt...
  document.getElementById(id).innerHTML = text;
}

function hoverIt(){
  //verander de achtergrond kleur van het blokje met de id: blokje, naar een willekeurige kleur
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("blokje").style.backgroundColor = randomColor;
}
