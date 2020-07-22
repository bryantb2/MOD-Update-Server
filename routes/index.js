var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/release/:fileName', (req, res) => {
  const fileToSend = req.fileName;
  res.sendFile(`public/release/${fileToSend}`,{
    root: path.resolve()
  });
});

module.exports = router;
