const express = require('express'),
      app = express(),
      PORT = 3000;

app.set('view engine', 'ejs');

const homeRouter = require('./routes/home');
app.use('/', homeRouter);

const booksRouter = require('./routes/books');
app.use('/', booksRouter);

const authorsRouter = require('./routes/authors');
app.use('/', authorsRouter);

app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});