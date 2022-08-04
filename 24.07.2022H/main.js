const books = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        path: 'images/don_quixote'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        path: 'images/lord_of_the_rings'
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        path: 'images/harry_potter'
    },
    {
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        path: 'images/alice_adventures_in_wonderland'
    },
    {
        title: 'Twenty Thousand Leagues Under the Sea',
        author: 'Jules Verne',
        path: 'images/twenty_thousand_leagues_under_the_sea'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        path: 'images/moby_dick'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        path: 'images/the_picture_of_dorian_gray'
    }
]
document.write(`<table>
<tr>
    <th>Image</th>
    <th>Title</th>
    <th>Author</th>
</tr>
    `)
for (let i = 0; i < books.length; i++) {
    document.write(`
    <tr>
        <td><img src = '${books[i].path + '.jpeg'}'></td>
        <td>${books[i].title}</td>
        <td>${books[i].author}</td>
    </tr>
        `)
}
document.write(`</table>`)