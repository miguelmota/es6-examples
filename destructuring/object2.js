// untested

var authors = [
    {
       'name': 'Dav Pilkey',
       'books': [{
           'title': 'Captain Underpants',
           'date': 1997
        }]
   },
   {
       'name': 'Jeff Kinney',
       'books': [{
            'title': 'Diary of a Wimpy Kid',
            'date': 2007
       }]
    }
];

var [{'name': author, 'works': [,{title,date}]}] = authors;

var str = `"${title}", by ${author}, was published in ${date}.`

console.log(str); // '"Captain Underpants", by Dav Pilkey was published in 1997.'
