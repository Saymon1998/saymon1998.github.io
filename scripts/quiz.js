function funkcja()
{
let suma = 0;
let tab = [];
/* */
let q1 = document.getElementById("q1").value;
if(q1==1410)
{
    suma = suma+1;
}
else
{
    tab.push('1)Dobra odpowiedz to 1410 \n');
}


let q2 = document.getElementById("q2").value;
if(q2=='Fryderyk Chopin')
{
    
    suma = suma+1;
}
else
{
    tab.push('2)Dobra odpowiedz to Fryderyk Chopin \n');
}
let q3 = document.getElementById("q3").value;
if(q3=='Antonio Salieri')
{
    
    suma = suma+1;
}
else
{
    tab.push('3)Dobra odpowiedz to 1410 \n');
}
let q4 = document.getElementById("q4").value;
if(q4=='Antonio Vivaldi')
{
    
    suma = suma+1;
}
else
{
    tab.push('4)Dobra odpowiedz to Antonio Vivaldi \n');
}
let q5 = document.getElementById("q5").value;
if(q5=='Wit Stwosz')
{
    suma = suma+1;
}
else
{
    tab.push('5)Dobra odpowiedz to Wit Stwosz \n');
}
let q6 = document.getElementById("q6").value;
if(q6 =='Józef Piłsudzki')
{
    suma = suma+1;
}
else
{
    tab.push('6)Dobra odpowiedz to Józef Piłsudzki \n');
}
document.write("Podsumowanie:");
for (let i = 0; i < tab.length; i++) 
{  
    document.write(tab[i]);
}
alert('Uzyskałeś '+suma+' /6 punktow');


}

