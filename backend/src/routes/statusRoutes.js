const express = require('express');
const StatusController = require('../controllers/statusController');

const statusController = new StatusController();

const router = express.Router();

router.use('/status', statusController.router);

module.exports = router;