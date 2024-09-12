class ReservaServices {

    constructor(reservaRepository, carroRepository, clienteRepository, statusRepository) {
        this.reservaRepository = reservaRepository;
        this.carroRepository = carroRepository;
        this.clienteRepository = clienteRepository;
        this.statusRepository = statusRepository;
    }

    async makeReservation(reservaData) {

        const carro_id = reservaData.reservaData.carro_id;
        const cliente_id = reservaData.reservaData.cliente_id;
        const retirada = reservaData.reservaData.retirada;
        const devolucao = reservaData.reservaData.devolucao;
        const impostos = reservaData.reservaData.impostos;
        const custo = reservaData.reservaData.custo;


        if (carro_id ==null || cliente_id==null || !retirada || !devolucao || custo==null) {
            throw new Error('Dados insuficientes para fazer a reserva');
        }

        const carroFromDb = await this.carroRepository.findById(carro_id);

        if (!carroFromDb) {
            throw new Error('Carro não encontrado');
        }

        const clienteFromDb = await this.clienteRepository.findById(cliente_id);

        if (!clienteFromDb) {
            throw new Error('Cliente não encontrado');
        }

        console.log('vou fazer a query');
        if (await this.findReservasByCliente(cliente_id).length > 0) {
            throw new Error('Cliente já possui uma reserva ativa');
        }

        const newReserva = await this.reservaRepository.makeReservation(reservaData.reservaData);

        const status = await this.statusRepository.findAll();
        const idStatusReservado = status.find(status => status.nome === 'Reservado').status_id;

        await this.carroRepository.update({ ...carroFromDb, status: idStatusReservado });


        return newReserva;
    }

    async findReservasByCliente(cliente) {

        if (!cliente) {
            throw new Error('Cliente não informado');
        }

        const reservas = await this.reservaRepository.findReservasByCliente(cliente);
        return reservas;
    }

    async update(reserva) {
        const updatedReserva = await this.reservaRepository.update(reserva);
        return updatedReserva;
    }

    async delete(reserva) {
        const deletedReserva = await this.reservaRepository.delete(reserva);
        return deletedReserva;
    }

    async findById(id) {
        const reserva = await this.reservaRepository.findById(id);
        return reserva;
    }

    async findAll() {
        const reservas = await this.reservaRepository.findAll();
        return reservas;
    }

    async findByData(data) {
        const reservas = await this.reservaRepository.findByData(data);
        return reservas;
    }

    async findByCarro(carro) {
        const reservas = await this.reservaRepository.findByCarro(carro);
        return reservas;
    }

}

module.exports = ReservaServices;