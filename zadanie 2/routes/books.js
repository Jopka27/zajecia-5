const express = require('express'),
      router = express.Router();

router.get('/book/list', (req, res) => {
    const books = [
        { id: 1, title: 'Book 1' },
        { id: 2, title: 'Book 2' },
    ];
    res.render('books', { books });
});

module.exports = router;