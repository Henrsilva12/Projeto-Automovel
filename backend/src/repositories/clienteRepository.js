const Cliente = require('../entity/Cliente');
const Login = require('../entity/Login');
const Endereco = require('../entity/Endereco');
const AppDataSource = require('../config/data-source');

class ClienteRepository {

    async save(clienteData, loginData, enderecoData) {
        const queryRunner = AppDataSource.createQueryRunner();
    
        await queryRunner.connect();
        await queryRunner.startTransaction();
    
        try {
            // Salvar Cliente
            const cliente = await queryRunner.manager.save(Cliente, clienteData);
    
            // Salvar Endereco com cliente_id
            enderecoData.cliente_id = cliente.cliente_id;
            const endereco = await queryRunner.manager.save(Endereco, enderecoData);
    
            // Salvar Login com cliente_id
            loginData.cliente_id = cliente.cliente_id;
            const login = await queryRunner.manager.save(Login, loginData);
    
            // Commit transaction
            await queryRunner.commitTransaction();
    
            return { cliente, login, endereco };
        } catch (error) {
            // Rollback transaction in case of error
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            // Release queryRunner
            await queryRunner.release();
        }
    }
    

    async update(cliente, login, endereco) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            // Update Endereco
            const updatedEndereco = await queryRunner.manager.save(Endereco, endereco);

            // Update Cliente
            cliente.endereco = updatedEndereco;
            const updatedCliente = await queryRunner.manager.save(Cliente, cliente);

            // Update Login
            login.cliente = updatedCliente;
            const updatedLogin = await queryRunner.manager.save(Login, login);

            // Commit transaction
            await queryRunner.commitTransaction();

            return { updatedCliente, updatedLogin, updatedEndereco };
        } catch (error) {
            // Rollback transaction in case of error
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            // Release queryRunner
            await queryRunner.release();
        }
    }

    async delete(cliente) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            // Find and delete Login
            const login = await queryRunner.manager.findOne(Login, { where: { cliente: cliente } });
            if (login) {
                await queryRunner.manager.delete(Login, login);
            }

            // Delete Cliente
            await queryRunner.manager.delete(Cliente, cliente);

            // Commit transaction
            await queryRunner.commitTransaction();

            return true;
        } catch (error) {
            // Rollback transaction in case of error
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            // Release queryRunner
            await queryRunner.release();
        }
    }

    async findById(id) {
        const queryRunner = AppDataSource.createQueryRunner();

        await queryRunner.connect();
        const cliente = await queryRunner.query(`
            SELECT * FROM cliente
            WHERE cliente_id = ${id}`
        );
        return cliente;
    }

    async findAll() {
        const clientes = await AppDataSource.getRepository(Cliente).find();
        return clientes;
    }

    async findByEmail(email) {
        const login = await AppDataSource.getRepository(Login).findOne({
            where: { email: email },
        });
        return login ? login : null;
    }
}

module.exports = ClienteRepository;
