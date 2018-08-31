const { Router } = require('express');
const memeRouter = require('./meme');

const router = Router();

router.use('/', memeRouter);

module.exports = router;
