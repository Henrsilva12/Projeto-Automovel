const express = require('express');
const CarroController = require('../controllers/carroController');

const carroController = new CarroController();

const router = express.Router();

router.use('/carro', carroController.router);

module.exports = router;