var angle1 = document.getElementById("angle1");
var angle2 = document.getElementById("angle2");
var angle3 = document.getElementById("angle3");
var output = document.getElementById("output");

function trianglechecker(){
    if(((angle1.value)=="" || (angle2.value)=="" ||(angle3.value)=="")){
        output.innerText = "Please enter all the angles";
        return;
    }

    if((parseInt(angle1.value)<=0 || parseInt(angle2.value)<=0 ||parseInt(angle3.value)<=0)){
        output.innerText = "Invalid angles";
        return;
    }
   
    else{
        if(//condition
            (parseInt(angle1.value)+parseInt(angle2.value)+parseInt(angle3.value))!=180
            ){
        output.innerText = "Not a triangle";
        return;
        }
        else{
        output.innerText = "These angles form a triangle";
        return;
    }
    }
}
