let mongoose = require('mongoose');
let Estatal = require('../models/Estatal');

let estatalController = {};

/*LISTAR*/
estatalController.list = (req, res)=>{
    Estatal.find({})
        .limit(20)
        .skip(0)
        .exec((err, estatal)=>{
            if (err){
                console.log('Error:',err);
            }
            console.log('Datos obtenidos');
            console.log(estatal);
            res.render('../views/estatal/index',{
                estatales: estatal,
                title: "Nadie leyo piedadddd",
                year: new Date().getFullYear()
            });
        })
};

module.exports = estatalController;