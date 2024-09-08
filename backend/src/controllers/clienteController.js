const express = require('express');
const ClienteService = require('../services/clienteServices');
const ClienteRepository = require('../repositories/clienteRepository');

class ClienteController {

    constructor() {
        this.router = express.Router();
        this.clienteRepository = new ClienteRepository();
        this.clienteService = new ClienteService(
            this.clienteRepository
        );
    }

    async save(req, res) {
        const { clienteData, loginData, enderecoData } = req.body;
        const newCliente = await clienteService.save(clienteData, loginData, enderecoData);
        res.json(newCliente);
    }

    async update(req, res) {
        const { clienteData, loginData, enderecoData } = req.body;
        const updatedCliente = await clienteService.update(clienteData, loginData, enderecoData);
        res.json(updatedCliente);
    }

    async delete(req, res) {
        const { cliente } = req.body;
        const deletedCliente = await clienteService.delete(cliente);
        res.json(deletedCliente);
    }

    async findById(req, res) {
        const { id } = req.params;
        const cliente = await clienteService.findById(id);
        res.json(cliente);
    }

    async findAll(req, res) {
        const clientes = await clienteService.findAll();
        res.json(clientes);
    }

    async findByEmail(req, res) {
        const { email } = req.params;
        const cliente = await clienteService.findByEmail(email);
        res.json(cliente);
    }

    async login(req, res) {
        const { email, senha } = req.body;
        const cliente = await clienteService.login(email, senha);
        res.json(cliente);
    }
}

module.exports = ClienteController;