const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const KEY_SECRET = 'simetria2019.';

exports.createUser = (req, res, next) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }

    User.create(newUser, (err, user) => {
        if (err && err.code === 11000) return res.status(409).send('Este correo ya existe, porfavor usa uno diferente.');
        if (err) return res.status(500).send('Ocurrio un error en el servidor');
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: user.id },
            KEY_SECRET, {
            expiresIn: expiresIn
        });
        const dataUser = {
            name: user.name,
            email: user.email,
            accessToken: accessToken,
            expiresIn: expiresIn
        }
        res.send({ dataUser }); //response del method
    });
}

exports.loginUser = (req, res, next) => {
    const userData = {
        email: req.body.email,
        password: req.body.password,
    }

    User.findOne({ email: userData.email }, (err, user) => {
        if (err) return res.status(500).send('Ocurrio un error en el servidor lo estamos solucionando...');
        if (!user) {
            //Invalidad User
            res.status(409).send({ message: 'No existe este un usuario' })
        } else {
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
            if (resultPassword) {
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({ id: user.id }, KEY_SECRET, { expiresIn: expiresIn });
                const dataUser = {
                    name: user.name,
                    email: user.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                  }
                  res.send({ dataUser });
            } else {
                //Invalidad password
                res.status(409).send({ message: 'No existe este un usuario' })
            }
        }
    })
}