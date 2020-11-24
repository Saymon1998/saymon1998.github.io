$(document).ready(function()
{
    $('span.pq').each(function()//kolekcja wybranych znacznikow
    {
        let quote = $(this).clone();
        quote.removeClass('pq');
        quote.addClass('pullquote');
        $(this).before(quote);
    });
});