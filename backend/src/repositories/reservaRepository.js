const AppDataSource = require('../config/data-source');
const Reserva = require('../entity/Reserva');
const Cliente = require('../entity/Cliente');
const Carro = require('../entity/Carro');
const Status = require('../entity/Status');
const Loja = require('../entity/Loja');

class ReservaRepository {

    async makeReservation(reservaData) {

        const carro_id = reservaData.carro_id;
        const cliente_id = reservaData.cliente_id;
        const retirada = reservaData.retirada;
        const devolucao = reservaData.devolucao;
        const impostos = reservaData.impostos;
        const custo = reservaData.custo;

        console.log("vou fazer a query");
        console.log(devolucao);
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            const reserva = await queryRunner.query(
                `INSERT INTO reserva (carro_id, cliente_id, retirada, devolucao, impostos, custo)
                 VALUES ($1, $2, $3, $4, $5, $6)
                 RETURNING *`,
                [carro_id, cliente_id, retirada, devolucao, impostos, custo]
            );

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

    async findReservasByCliente(cliente_id) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();

        try {

            //preciso de um join com a tabela carro para trazer todos os carros que o cliente tem reservado
            const reservas = await queryRunner.query(
                `SELECT * FROM reserva
                inner join carro on reserva.carro_id = carro.carro_id 
                WHERE cliente_id = $1
                 `,

                [cliente_id]
            );

            return reservas;
        } catch (error) {
            throw error;
        } finally {
            await queryRunner.release();
        }
    }
}

module.exports = ReservaRepository;