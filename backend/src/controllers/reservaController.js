const express = require('express');
const ReservaServices = require('../services/reservaServices');
const ReservaRepository = require('../repositories/reservaRepository');
const CarroRepository = require('../repositories/carroRepository');
const ClienteRepository = require('../repositories/clienteRepository');
const StatusRepository = require('../repositories/statusRepository');

class ReservaController {

    //reservaRepository, carroRepository, clienteRepository, statusRepository
    constructor() {
        this.router = express.Router();
        this.reservaServices = new ReservaServices(new ReservaRepository(), new CarroRepository(), new ClienteRepository(), new StatusRepository());
        this.initRoutes();
    }

    initRoutes() {
        this.router.post('/makeReservation', this.makeReservation.bind(this));
        this.router.get('/findReservasByCliente/:cliente', this.findReservasByCliente.bind(this));
        this.router.put('/update', this.update.bind(this));
        this.router.delete('/delete', this.delete.bind(this));
    }

    async makeReservation(req, res) {
        try {
            const reservaData = req.body;

            console.log(reservaData);
            const newReserva = await this.reservaServices.makeReservation(reservaData);
            res.status(200).json(newReserva);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findReservasByCliente(req, res) {
        try {
            const { cliente_id } = req.body;
            const reservas = await this.reservaServices.findReservasByCliente(cliente_id);
            res.status(200).json(reservas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const { reserva } = req.body;
            const updatedReserva = await this.reservaServices.update(reserva);
            res.status(200).json(updatedReserva);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { reserva } = req.body;
            await this.reservaServices.delete(reserva);
            res.status(200).json({ message: 'Reserva deletada com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ReservaController;
