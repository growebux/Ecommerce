// server.js
console.log('May Node be with you');

const express = require('express');
const app = express();

app.listen(3001, function() {
    console.log('listening on 3000')
  })


app.get('/', (req, res) => {
    res.send('Test')
  })

app.get('/test', (req, res) => {
    res.sendFile('index.html', {root: __dirname}); 

})