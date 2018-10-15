const express = require('express'),
      router = express.Router();

router.get('/', async (req, res) => {
    res.send('getting character information!');
});

module.exports = router;