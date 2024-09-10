const express = require('express');
const LojaController = require('../controllers/lojaController');

const lojaController = new LojaController();

const router = express.Router();

router.use('/lojas', lojaController.router);

module.exports = router;