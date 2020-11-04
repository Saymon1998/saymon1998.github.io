let score = 0;
let q = 0;
let i= 0;
let answer ='';
let pytania = [
    ['W którym roku odbyła się bitwa pod Grunwaldem?','1410'],
    ['Kto jest kompozytorem utworu "Marsz Żałobny?','Fryderyk Chopin'],
    ['Który kompozytor konkurował z Amadeuszem Mozartem?','Antonio Salieri'],
    ['Kto jest autorem dzieł "4 pory roku"?','Antonio Vivaldi'],
    ['Kto jest twórcą ołtarza Mariackiego w Kragowie?','Wit Stwosz'],
    ['Jak się nazywał jedyny w historii państwa Polskiego naczelnik RP?','Józef Piłsudzki']
];
document.getElementById("pytanie").innerHTML=pytania[q][0];
function next()
{
    testPytania(pytania[q][1]);
        q++;
        function testPytania(pytanie) 
        {
            answer = document.getElementById("answer").value;
            if (answer == pytanie) 
            {
                score++;
            }
            else
            document.getElementById("odpowiedz").innerHTML=pytania[q][1];
        }
        if(q==6)
        {
            document.getElementById("wynik").innerHTML="Koniec pytań!<br>Twój wynik to: "+score;
            
        }
        else
        {
            document.getElementById("pytanie").innerHTML=pytania[q][0];
        }
    
}




    



