function funcBlur()
    {
    var x = document.getElementById("i_n");
    var y = document.getElementById("em");
    var z = document.getElementById("p_t");
    x.addEventListener("blur", funcBlur, true);
    y.addEventListener("blur", funcBlur, true);
    z.addEventListener("blur", funcBlur, true);

        if(x.value=="")
        {
            document.getElementById("i_n").style.backgroundColor = "red";
            document.getElementById("error1").innerHTML="Wypelnij to pole!";
        }
        else if(x.value!="")
        {
            document.getElementById("i_n").style.backgroundColor = "";
            document.getElementById("error1").innerHTML="";
        }
        else if(y.value=="")
        {
            document.getElementById("em").style.backgroundColor = "red";
            document.getElementById("error2").innerHTML="Wypelnij to pole!";
        }
        else if(y.value!="")
        {
            document.getElementById("em").style.backgroundColor = "";
            document.getElementById("em").style.backgroundColorinnerHTML = "";
        }
        else if(z.value=="")
        {
           document.getElementById("p_t").style.backgroundColor = "red";
           document.getElementById("p_t").style.backgroundColorinnerHTML = "Wypelnij to pole!";
        }
        else
        {
            document.getElementById("p_t").style.backgroundColor = "";
            document.getElementById("p_t").style.backgroundColorinnerHTML = "";
        }

    }
