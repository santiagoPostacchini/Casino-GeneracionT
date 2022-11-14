var express = require('express');
const { usuarios } = require('../models');
var router = express.Router();
const db = require("../models");
const Usuarios = db.usuarios;

/* GET general de todos los usuarios */

router.get('/',async function(req, res, next) {
    let resultados = await Usuarios.findAll();
    res.send({
      status : true,
      response : resultados
    });
});

/* GET especifico por usuario (Usado para perfiles) */

router.get('/:nombre',async function(req, res, next) {
    let usuarioEncontrado = await Usuarios.findOne({
        where: {
            Nombre: req.params.nombre
        }
    });
    res.send({
      status : true,
      response : usuarioEncontrado
    });
});

/* POST para añadir usuarios */

router.post('/',async function(req, res, next) {

    let usuarios = req.body;
  
    let usuarioCreado = await Usuarios.create(usuarios, {});
    
    let resultados = await Usuarios.findOne({
      where: {
          Nombre: req.body.Nombre
      } 
    });

    res.send({
      status : true,
      response : resultados
    });
});

/* DELETE para borrar usuarios */

router.delete('/:nombre', async function(req, res, next) {
    let usuarioEncontrado = await Usuarios.findOne({
        where: {
            Nombre : req.params.nombre
        }
    });

    await usuarioEncontrado.destroy();
    
    res.send({
      status : true,
      response : usuarios
    });
});

/* PUT para actualizar usuarios individualmente */

router.put('/', async function(req, res, next) {

    console.log(req.body);
  
    let usuarioEncontrado = await Usuarios.findOne({
      where : {
        nombre : req.body.Nombre
      },
    });
    if(!usuarioEncontrado){
      res.send({
        status : false,
        response : {error : "NO SE ENCONTRO EL USUARIO"}
      });
      return;
    }
    usuarioEncontrado.update({
      Mail: req.body.Mail,
      Pass: req.body.Pass
    })
  
    await usuarioEncontrado.save();

    let respuesta = await Usuarios.findOne({
      where : {
        nombre : req.body.Nombre
      },
    });
    res.send({
      status : true,
      response : respuesta
    });
});

module.exports = router;