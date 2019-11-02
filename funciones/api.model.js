const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apiSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true
    },
    cliente: {
        type: String,
        required: true,
        trim: true
    },
    nit: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    tel: {
        type: Number,
        required: true,
        trim: true
    },
    dir: {
        type: String,
        required: true,
        trim: true
    },
    numero: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    fechaInicio: {
        type: String,
        required: true,
        trim: true
    },
    fechaFin: {
        type: String,
        required: true,
        trim: true
    },
    detalles: [{
        descripcion: {
            type: String,
            required: true,
            trim: true
        },
        titulo: {
            type: String,
            required: true,
            trim: true
        },
        cuerpo: {
            type: String,
            required: true,
            trim: true
        },
        unidad: {
            type: String,
            required: true,
            trim: true
        },
        cantidad: {
            type: String,
            required: true,
            trim: true
        }
    }],
    desc: {
        type: String,
        required: true,
        trim: true
    }
},{
    collection: 'c_clientes',
    timestamps: true
})

module.exports = mongoose.model('c_clientes', apiSchema);