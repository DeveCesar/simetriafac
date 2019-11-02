'use strict';
const cors = require('cors');
/*Ruta para autenticacion de usuarios sis y consumir datos*/
const authRoutes = require('./auth/auth.routes');
const apiRoutes = require('./funciones/api.route');
const express = require('express');
const path = require('path');
const properties = require('./config/properties');
const DB = require('./config/db');
DB();
const app = express();
const router = express.Router();
const bodyparser = require('body-parser');
const bodyparserJSON = bodyparser.json();
const bodyparserurlencode = bodyparser.urlencoded({ extended: true });

app.use(bodyparserJSON);
app.use(bodyparserurlencode);
app.use(cors());
app.use('/api', router);
app.use('/clientes', apiRoutes);
app.use(express.static(__dirname + '/dist'));
/*Iniciamos rutas*/
authRoutes(router);


router.get('/', (req, res) => {
    console.log("get hello")
})


app.use(router);
app.listen(properties.PORT, () => {
    console.log(`Servidor reportes en puerto: ${properties.PORT}`)
});
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

