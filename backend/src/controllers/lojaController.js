const LojaService = require('../services/lojaServices');
const LojaRepository = require('../repositories/lojaRepository');
const express = require('express');

class LojaController {

    constructor() {
        
        this.router = express.Router();
        this.lojaRepository = new LojaRepository();
        this.lojaService = new LojaService(this.lojaRepository);
        this.initRoutes();
        
    }

    initRoutes() {
        this.router.post('/save', this.save.bind(this));
        this.router.put('/update', this.update.bind(this));
        this.router.delete('/delete', this.delete.bind(this));
        this.router.get('/find/:id', this.findById.bind(this));
        this.router.get('/findAll', this.findAll.bind(this));
        this.router.get('/findCarros/:loja', this.findCarros.bind(this));
    }

    async save(req, res) {
        try {
            const lojaData = req.body;
            const newLoja = await this.lojaService.save(lojaData);

            res.status(201).json(newLoja);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const loja = req.body;
            const updatedLoja = await this.lojaService.update(loja);

            res.status(200).json(updatedLoja);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const loja = req.body;
            await this.lojaService.delete(loja);

            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const loja = await this.lojaService.findById(id);

            res.status(200).json(loja);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const lojas = await this.lojaService.findAll();

            res.status(200).json(lojas);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findCarros(req, res) {
        try {
            const { loja } = req.params;
            const carros = await this.lojaService.findCarros(loja);

            res.status(200).json(carros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = LojaController;