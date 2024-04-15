const express = require('express');
const mysql = require('mysql2');
const cors=require('cors')

const app = express();

const mysql_config = require('./mysql_config');
const functions = require('./functions')

app.listen(3000, () => {
    console.log("ligastes")
})
// app.use(cors());
const connection = mysql.createConnection(mysql_config);

app.get('/', (req,res) => {
    connection.query('SELECT * FROM tasks', (err,results) => {
        if (err) {
            res.json(functions.response('se fodél', "ERRO: " + err.message))
        } else {
            res.json(functions.response('Deu Boa', 'Tasks listados com sucesso: ',results))
        }
    })
})