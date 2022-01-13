var counter=0;

function like(){
    counter++;
    var t = document.getElementById("count");
    t.innerText = counter;
}
function dislike(){
    counter--;
    var t = document.getElementById("count");
    t.innerText = counter;
}