const AppDataSource = require('../config/data-source');
const Carro = require('../entity/Carro');
const Loja = require('../entity/Loja');

class CarroRepository {
    
    async save(carroData) {
        const queryRunner = AppDataSource.createQueryRunner();
    
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        try {
            const carro = await queryRunner.manager.save(Carro, carroData);
    
            await queryRunner.commitTransaction();
    
            return { carro, loja };
        } catch (error) {
            // Rollback transaction in case of error
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async update(carro) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const updatedCarro = await queryRunner.manager.save(Carro, carro);

            await queryRunner.commitTransaction();

            return updatedCarro;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async delete(carro) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            await queryRunner.manager.delete(Carro, carro);

            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async findById(id) {
        const carro = await AppDataSource.getManager().findOne(Carro, id);
        return carro;
    }

    async findAll() {
        const carros = await AppDataSource.getManager().find(Carro);
        return carros;
    }

    async findByLoja(loja) {
        const carros = await AppDataSource.getManager().find(Carro, { where: { loja: loja } });
        return carros;
    }

    async findByModelo(modelo) {
        const carros = await AppDataSource.getManager().find(Carro, { where: { modelo: modelo } });
        return carros;
    }

    async findByAno(ano) {
        const carros = await AppDataSource.getManager().find(Carro, { where: { ano: ano } });
        return carros;
    }

    async findByMarca(marca) {
        const carros = await AppDataSource.getManager().find(Carro, { where: { marca: marca } });
        return carros;
    }

    async findByStatus(status) {
        const carros = await AppDataSource.getManager().find(Carro, { where: { status: status } });
        return carros;
    }

    async findByPlaca(placa) {
        const carro = await AppDataSource.getManager().findOne(Carro, { where: { placa: placa } });
        return carro;
    }
}

module.exports = CarroRepository;