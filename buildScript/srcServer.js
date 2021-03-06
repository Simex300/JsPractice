// Requiring express
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

// Adding port
const port = 3300;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

// Adding routes
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
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
