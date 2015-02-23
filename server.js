var express = require('express');
var app = express();
var public_folder = '';

// Default folder is the public sub-folder.
var cfg = {
    port: 4080
};

app.use(express.static(__dirname + '/static' + public_folder));

app.listen(cfg.port);

console.log('Started on http://localhost:' + cfg.port);