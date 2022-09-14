var base = document.getElementById("base");
var height = document.getElementById("height");
var output = document.getElementById("output");

function hypotenusefinder(){
    if(base.value =="" || height.value==""){
        output.innerText = "Please enter base and height";
        return;
    }
    if(parseInt(base.value)<=0 || parseInt(height.value)<=0 ){
        output.innerText = "Invalid inputs";
    }
    else{
        var hyp = Math.sqrt((parseInt(base.value) * parseInt(base.value))+(parseInt(height.value) * parseInt(height.value)));
        output.innerText = `The triangle's hypotenuse is ${hyp.toFixed(2)}`;
    }
}
