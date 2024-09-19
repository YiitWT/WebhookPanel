const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/err', (req, res) => {
    res.sendFile(__dirname + '/pages/err.html');
});


app.post('/post/webhook', (req, res) => {
    res.redirect('/');
     axios.post(req.body.url, {
         content: req.body.content,
         username: req.body.name,
         avatar_url: req.body.avatar
     }).then(response => {
         console.log(response);
     }).catch(error => {
        res.redirect('/err');
         
    });
});

app.get('/discord', (req, res) => {
    res.redirect('https://yiitwt.com/discord');
});



app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});