const express = require('express');
const holamundo = express();

holamundo.get('/', (req, res) =>{
    res.send("hola mundo");
});

module.exports = holamundo;
