const express = require('express'),
      bodyParser = require('body-parser'),
      characterRouter = require('./character/character.routes'),
      app = express(),
      port = process.env.PORT || 8080;



app.use(bodyParser.json());

app.use('/character', characterRouter);

app.get('/', (req, res) => {
    res.send('hello from destiny app!');
});

app.listen(port, res => {
    console.log('destiny api is up and running on port: ' + port);
});
