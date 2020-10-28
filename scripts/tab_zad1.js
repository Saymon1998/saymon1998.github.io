let piwo = ['Argus',
            'Warka',
            'Lech',
            'Specjal',
            'Żubr'];
piwo[5] = 'Dodany slot';
//tab.push('...','...') dodawanie wielu elementow na koniec tablicy
//tab.unshift('...','...') dodawanie elementow na poczatek tablicy
//tab.pop usuwanie elementow z poczatku tablicy
//tab.shift usuwanie elementow z konca tablicy
/* np.  let p = [0,1,2,3];
        let removedItem = p.pop();
        //removedItem bedzie miec wartosc 3
        */
//alert(piwo[1]);
piwo[piwo.length-1] = 'Leżajsk';
document.write(' '+piwo[1]+' ');
document.write(piwo[piwo.length-1]);

let p = [0,1,2,3];
let totalItems = p.push(4,5);
let removedItem = p.pop();
document.write(' Usuniety element z tablicy '+removedItem);