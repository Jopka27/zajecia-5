const express = require('express'),
      router = express.Router();

const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
];

router.get('/list', (req, res) => {
    res.render('books', { books });
});

module.exports = router;