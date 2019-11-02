const mongoose = require('mongoose');
const dbURL = require('./properties').DB;


module.exports = () => {
    mongoose.connect(dbURL, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true })
        .then(() =>
            console.log(`Conectado a base de datos mongo con: ${dbURL}`))
        .catch(err => console.log(`Error al conectarse a la base de datos: ${err}`))

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(`Desconectado de BD`);
            process.exit(0)
        });
    });
}