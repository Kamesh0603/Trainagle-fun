var count = 0;
var output = document.getElementById("output");
function scoreupdate(){
    count++;
}
function result(){
    output.innerText = `Your score is ${count}`;
}