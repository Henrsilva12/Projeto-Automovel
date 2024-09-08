const express = require('express');
const ReservaController = require('../controllers/reservaController');

const reservaController = new ReservaController();

const router = express.Router();

router.use('/reserva', reservaController.router);

module.exports = router;