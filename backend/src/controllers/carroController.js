/**
 * class CarroServices {

    constructor(carroRepository) {
        this.carroRepository = carroRepository;
    }

    async save(carroData) {
        const newCarro = await this.carroRepository.save(carroData);
        return newCarro;
    }

    async update(carro) {
        const updatedCarro = await this.carroRepository.update(carro);
        return updatedCarro;
    }

    async delete(carro) {
        const deletedCarro = await this.carroRepository.delete(carro);
        return deletedCarro;
    }

    async findById(id) {
        const carro = await this.carroRepository.findById(id);
        return carro;
    }

    async findAll() {
        const carros = await this.carroRepository.findAll();
        return carros;
    }

    async findByModelo(modelo) {
        const carro = await this.carroRepository.findByModelo(modelo);
        return carro;
    }

    async findByLoja(loja) {
        const carros = await this.carroRepository.findByLoja(loja);
        return carros;
    }

    async findByAno(ano) {
        const carros = await this.carroRepository.findByAno(ano);
        return carros;
    }

    async findByPlaca(placa) {
        const carro = await this.carroRepository.findByPlaca(placa);
        return carro;
    }
}

module.exports = CarroServices;
 */

const CarroServices = require('../services/carroServices');
const CarroRepository = require('../repositories/carroRepository');
const express = require('express');

class CarroController {

    constructor() {

        this.router = express.Router();
        this.carroRepository = new CarroRepository();
        this.carroServices = new CarroServices(this.carroRepository);
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/pegarTodos', this.findAll.bind(this));
        this.router.get('/pegarPorId/:id', this.findById.bind(this));
        this.router.post('/criar', this.save.bind(this));
        this.router.put('/atualizar', this.update.bind(this));
        this.router.delete('/deletar/:id', this.delete.bind(this));
    }

    async findAll(req, res) {
        try {
            const carros = await this.carroServices.findAll();
            res.status(200).json(carros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const carro = await this.carroServices.findById(id);
            res.status(200).json(carro);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async save(req, res) {
        try {
            const carroData = req.body;
            const newCarro = await this.carroServices.save(carroData);
            res.status(201).json(newCarro);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const carro = req.body;
            const updatedCarro = await this.carroServices.update(carro);
            res.status(200).json(updatedCarro);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await this.carroServices.delete(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = CarroController;