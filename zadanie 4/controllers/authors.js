const express = require('express');
const router = express.Router();

const authors = [
    { id: 1, name: 'Author 1' },
    { id: 2, name: 'Author 2' },
];

router.get('/list', (req, res) => {
    res.render('authors', { authors });
});

module.exports = router;