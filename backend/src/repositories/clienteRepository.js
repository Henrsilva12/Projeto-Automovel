const Cliente = require('../entity/Cliente');
const Login = require('../entity/Login');
const Endereco = require('../entity/Endereco');
const AppDataSource = require('../config/data-source');

class ClienteRepository {

    async save(clienteData, loginData, enderecoData) {

        const connection = await AppDataSource.getConnection();
        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            const endereco = await queryRunner.manager.save(Endereco, enderecoData);

            clienteData.endereco = endereco;

            const cliente = await queryRunner.manager.save(Cliente, clienteData);

            loginData.cliente = cliente;

            const login = await queryRunner.manager.save(Login, loginData);


            await queryRunner.commitTransaction();

            return { cliente, login, endereco };
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }

    }

    async update(cliente, login, endereco) {

        const connection = await AppDataSource.getConnection();
        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            const updatedEndereco = await queryRunner.manager.save(Endereco, endereco);

            cliente.endereco = updatedEndereco;

            const updatedCliente = await queryRunner.manager.save(Cliente, cliente);

            login.cliente = updatedCliente;

            const updatedLogin = await queryRunner.manager.save(Login, login);

            await queryRunner.commitTransaction();

            return { updatedCliente, updatedLogin, updatedEndereco };
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async delete(cliente) {
        const connection = await AppDataSource.getConnection();
        const queryRunner = connection.createQueryRunner();

        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {

            const login = await queryRunner.manager.findOne(Login, { cliente: cliente });

            if (login) {
                await queryRunner.manager.delete(Login, login);
            }

            await queryRunner.manager.delete(Cliente, cliente);

            await queryRunner.commitTransaction();

            return true;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        } finally {
            await queryRunner.release();
        }
    }

    async findById(id) {
        const cliente = await AppDataSource.getRepository(Cliente).findOne(id, { relations: ['endereco', 'login'] });
        return cliente;
    }

    async findAll() {
        const clientes = await AppDataSource.getRepository(Cliente).find({ relations: ['endereco', 'login'] });
        return clientes;
    }

    async findByEmail(email) {
        const login = await AppDataSource.getRepository(Login).findOne({ email: email }, { relations: ['cliente'] });
        return login.cliente;
    }
}

module.exports = ClienteRepository;