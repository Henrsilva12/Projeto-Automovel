const AppDataSource = require('../config/data-source');
const Reserva = require('../entity/Reserva');
const Cliente = require('../entity/Cliente');
const Carro = require('../entity/Carro');
const Status = require('../entity/Status');
const Loja = require('../entity/Loja');

class ReservaRepository {

    async makeReservation(reservaData) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            const reserva = await queryRunner.manager.save(Reserva, reservaData);

            await queryRunner.commitTransaction();

            return reserva;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async verifyCarAvailability(carro_id, data_inicio, data_fim) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            
            const carro = await queryRunner.manager.findOne(Carro, carro_id);

            if (!carro) {
                throw new Error('Carro não encontrado');
            }

            const reservas = await queryRunner.manager.find(Reserva, {
                where: {
                    carro: carro,
                }
            });

            for (let i = 0; i < reservas.length; i++) {
                
                if (reservas[i].data_inicio <= data_inicio && reservas[i].data_fim >= data_fim) {
                    await queryRunner.commitTransaction();
                    return false;
                }
            
            }

            await queryRunner.commitTransaction();

            return true;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async findAll() {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();

        try {
            const reservas = await queryRunner.manager.find(Reserva);

            return reservas;
        } catch (error) {
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async findReservasByCliente(cliente) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();

        try {
            const reservas = await queryRunner.manager.find(Reserva, { where: { cliente: cliente } });

            return reservas;
        } catch (error) {
            throw error;
        } finally {
            await queryRunner.release();
        }
    }
}

module.exports = ReservaRepository;