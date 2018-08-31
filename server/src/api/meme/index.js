const { Router } = require('express');

const request = require('request');

const router = Router();

router.get('/memes', (req, res) => {
  request('https://api.imgflip.com/get_memes').pipe(res);
});

module.exports = router;
