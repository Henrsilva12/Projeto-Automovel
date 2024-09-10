const StatusServices = require('../services/statusServices');
const StatusRepository = require('../repositories/statusRepository');
const express = require('express');

class StatusController {

    constructor() {
        this.router = express.Router();
        this.statusServices = new StatusServices(new StatusRepository());
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/save', this.save.bind(this));
        this.router.put('/update', this.update.bind(this));
        this.router.delete('/delete', this.delete.bind(this));
        this.router.get('/find/:id', this.findById.bind(this));
        this.router.get('/findAll', this.findAll.bind(this));
    }
    
    async save(req, res) {
        try {
            const statusData = req.body;
            const newStatus = await this.statusServices.save(statusData);

            res.status(201).json(newStatus);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const status = req.body;
            const updatedStatus = await this.statusServices.update(status);

            res.status(200).json(updatedStatus);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const status = req.body;
            await this.statusServices.delete(status);

            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const status = await this.statusServices.findById(id);

            res.status(200).json(status);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const status = await this.statusServices.findAll();

            res.status(200).json(status);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = StatusController;