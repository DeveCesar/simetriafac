const express = require('express');
const apiRoutes = express.Router();

//Traemos el modelo
const c_clientes = require('./api.model');

apiRoutes.route('/add-clientes').post(function (req, res) {
    let cliente = new c_clientes(req.body);
    cliente.save()
        .then(cliente => {
            res.status(200).json({ 'c_clientes': 'Cliente agregado correctamente' });
        })
        .catch(err => {
            res.status(400).send("No se pudo realizar el proceso");
        });
});


apiRoutes.route('/').get(function (req, res) {
    c_clientes.find(function (err, products) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(products);
        }
    });
});

apiRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    c_clientes.findById(id, function (err, cliente) {
        res.json(cliente);
    });
});

//  Metodo para actualizar un cliente
apiRoutes.route('/update/:id').post(function (req, res) {
    c_clientes.findById(req.params.id, function (err, cliente) {
        if (!cliente)
            res.status(404).send("Error 404");
        else {
            cliente.cliente = req.body.cliente;


            cliente.save().then(cliente => {
                res.json('Actualizacion completa', cliente);
            })
                .catch(err => {
                    res.status(400).send("Error al actualizar", err);
                });
        }
    });
});

// Eliminar
apiRoutes.route('/delete/:id').get(function (req, res) {
    c_clientes.findByIdAndRemove({ _id: req.params.id }, function (err, cliente) {
        if (err) res.json(err);
        else res.json('Eliminado correctamente');
    });
});


module.exports = apiRoutes;
