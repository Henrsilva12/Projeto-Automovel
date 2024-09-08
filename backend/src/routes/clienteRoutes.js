const express = require('express');
const ClienteController = require('../controllers/clienteController');

const clienteRoutes = express.Router();
const clienteController = new ClienteController();

clienteRoutes.post('/save', (req, res) => clienteController.save(req, res));
clienteRoutes.put('/update', (req, res) => clienteController.update(req, res));
clienteRoutes.delete('/delete', (req, res) => clienteController.delete(req, res));
clienteRoutes.get('/find/:id', (req, res) => clienteController.findById(req, res));
clienteRoutes.get('/findAll', (req, res) => clienteController.findAll(req, res));
clienteRoutes.get('/findByEmail/:email', (req, res) => clienteController.findByEmail(req, res));
clienteRoutes.post('/login', (req, res) => clienteController.login(req, res));

module.exports = clienteRoutes;
