const AppDataSource = require('../config/data-source');
const Loja = require('../entity/Loja');
const Carro = require('../entity/Carro');

class LojaRepository {

    async save(lojaData) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const loja = await queryRunner.manager.save(Loja, lojaData);

            await queryRunner.commitTransaction();

            return loja;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async update(loja) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const updatedLoja = await queryRunner.manager.save(Loja, loja);

            await queryRunner.commitTransaction();

            return updatedLoja;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async delete(loja) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            await queryRunner.manager.delete(Loja, loja);

            await queryRunner.commitTransaction();
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
            const lojas = await queryRunner.manager.find(Loja);

            return lojas;
        } catch (error) {
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async findById(id) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();

        try {
            const loja = await queryRunner.manager.findOne(Loja, id);

            return loja;
        } catch (error) {
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async findCarros(loja) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();

        try {
            const carros = await queryRunner.manager.find(Carro, { where: { loja: loja } });

            return carros;
        } catch (error) {
            throw error;
        } finally {
            await queryRunner.release();
        }
    }
}

module.exports = LojaRepository;