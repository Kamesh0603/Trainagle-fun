var side1 = document.getElementById("side1");
        var side2 = document.getElementById("side2");
        var side3 = document.getElementById("side3");
        var output = document.getElementById("output");

        function areagetter(){
            var s1 = parseInt(side1.value);
            var s2 = parseInt(side2.value);
            var s3 = parseInt(side3.value);

            if(s1<=0 ||s2<=0 ||s3<=0){
                console.log(s1,s2,s3);
                output.innerText = "Invalid side lengths";
            }
            else{
                var s = (s1+s2+s3)/2;
                var area = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
                output.innerText = "Area of triangle is: " + area.toFixed(2);
            }
        }