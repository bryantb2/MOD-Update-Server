var express = require('express');
var router = express.Router();

router.get('/updates', (req, res) => {
  const testUpdates = {
    "win32-x64-prod": {
      "readme": "Test release",
      "update": "https://github.com/djdarkbeat/modapi-react/releases/download/win32-x64-prod-v1.0.1",
      "install": "https://github.com/djdarkbeat/modapi-react/releases/tag/win32-x64-prod-v1.0.1/ModLEDControl-Setup.exe",
      "version": "1.0.1"
    }
  };
  res.json(testUpdates);
});

module.exports = router;
