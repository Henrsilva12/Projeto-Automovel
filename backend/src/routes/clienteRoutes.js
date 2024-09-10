const express = require('express');
const ClienteController = require('../controllers/clienteController');

const clienteController = new ClienteController();

const router = express.Router();

router.use('/cliente', clienteController.router);

module.exports = router;