// Requiring express
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

// Adding port
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

// Adding routes
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
    res.json([
        {"id":1, "firstName":"Jose", "lastName":"Perarta", "email":"jose@gmail.com"},
        {"id":2, "firstName":"Carmen", "lastName":"Garcia", "email":"carmen@gmail.com"},
        {"id":3, "firstName":"Gabriel", "lastName":"Acebedo", "email":"gabriel@gmail.com"}
    ]);
});

// Open server
app.listen(port, function(err){
    if(err){
        console.error(err);
    }
    else{
        open('http://localhost:' + port);
    }
});
