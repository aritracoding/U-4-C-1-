const express = require('express');

const app = express();

app.get('/books', (req, res) => {
    console.log("books");

    return res.send({route: '/books'});
})

app.get('/libraries', (req, res) => {
    console.log("libraries");

    return res.send({route: '/libraries'});
})

app.get('/authors', (req, res) => {
    console.log("authors");

    return res.send({route: '/authors'});
})

app.listen(3000, () => {
    console.log("listening");
})