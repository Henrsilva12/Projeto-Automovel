const express = require('express');
const ClienteService = require('../services/clienteServices');
const ClienteRepository = require('../repositories/clienteRepository');

class ClienteController {

    constructor() {
        this.router = express.Router();
        this.clienteService = new ClienteService(new ClienteRepository());
        this.initRoutes(); // Inicializa as rotas
    }

    initRoutes() {
        this.router.post('/save', this.save.bind(this));
        this.router.put('/update', this.update.bind(this));
        this.router.delete('/delete', this.delete.bind(this));
        this.router.get('/find/:id', this.findById.bind(this));
        this.router.get('/findAll', this.findAll.bind(this));
        this.router.get('/findByEmail/:email', this.findByEmail.bind(this));
        this.router.post('/login', this.login.bind(this));
        this.router.post('/passwordRecovery', this.requirePasswordRecoveryLink.bind(this));
        this.router.post('/passwordReset', this.passwordReset.bind(this));
    }

    async save(req, res) {
        try {
            const { clienteData, loginData, enderecoData } = req.body;
            const newCliente = await this.clienteService.save(clienteData, loginData, enderecoData);
            res.status(200).json(newCliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { clienteData, loginData, enderecoData } = req.body;
            const updatedCliente = await this.clienteService.update(clienteData, loginData, enderecoData);
            res.status(200).json(updatedCliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { cliente } = req.body;
            const deletedCliente = await this.clienteService.delete(cliente);
            res.status(200).json(deletedCliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const cliente = await this.clienteService.findById(id);
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const clientes = await this.clienteService.findAll();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findByEmail(req, res) {
        try {
            const { email } = req.params;
            const cliente = await this.clienteService.findByEmail(email);
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, senha } = req.body;

            const { cliente, token } = await this.clienteService.login(email, senha);

            res.status(200).json({ cliente, token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async requirePasswordRecoveryLink(req, res) {
        try {
            const { email } = req.body;
            const response = await this.clienteService.requirePasswordRecoveryLink(email);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async passwordReset(req, res) {
        try {
            const { token, newPassword } = req.body;
            const response = await this.clienteService.passwordReset(token, newPassword);
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


}

module.exports = ClienteController;
