function myFunction(){
    let today = new Date();
    alert(today.toLocaleDateString());
}

function colorIt(el, color){
    el.style.color = color;
}

function changeText(id, text){
    document.getElementById(id).innerHTML = text;
}

function hoverIt(id, color){
    document.getElementById(id).style.backgroundColor = color;
}
