let panstwa = ['Lizbona',
            'Polska',
            'Słowacja',
            'Rosja',
            'Litwa'];
document.write('<p>Pierwszy element to <strong>');
document.write(panstwa[0]+'</strong></p>');
document.write('<p>Przedostatni element to:<strong>'+panstwa[panstwa.length-1]+'</strong></p>');
panstwa.unshift('Bułgaria');
document.write('<p>Nowy pierwszy element:<strong>'+panstwa[0]+'</strong></p>');

