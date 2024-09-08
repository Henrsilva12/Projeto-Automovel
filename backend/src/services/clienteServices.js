const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class ClienteService {
    
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    async save(clienteData, loginData, enderecoData) {

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(loginData.senha, saltRounds);
        loginData.senha = hashedPassword;


        const newCliente = await this.clienteRepository.save(clienteData, loginData, enderecoData);
        return newCliente;
    }

    async update(clienteData, loginData, enderecoData) {

        if (loginData.senha) {
            const saltRounds = 10;
            loginData.senha = await bcrypt.hash(loginData.senha, saltRounds);
        }

        const updatedCliente = await this.clienteRepository.update(clienteData, loginData, enderecoData);
        return updatedCliente;
    }

    async delete(cliente) {
        const deletedCliente = await this.clienteRepository.delete(cliente);
        return deletedCliente;
    }

    async findById(id) {
        const cliente = await this.clienteRepository.findById(id);
        return cliente;
    }

    async findAll() {
        const clientes = await this.clienteRepository.findAll();
        return clientes;
    }

    async findByEmail(email) {
        const cliente = await this.clienteRepository.findByEmail(email);
        return cliente;
    }

    async login(email, senha) {
        
        const login = await this.clienteRepository.findByEmail(email);
        
        if (!login) {
            throw new Error('Cliente não encontrado');
        }

        const loginData = {... login};

        const isMatch = await bcrypt.compare(senha, loginData.senha);
        if (!isMatch) {
            throw new Error('Senha inválida');
        }

        const token = jwt.sign(
            { email: loginData.email },
            'your-secret-key',
            { expiresIn: '1h' }
        );

        const cliente = await this.clienteRepository.findById(loginData.cliente_id);

        return { cliente, token };
    }
}

module.exports = ClienteService;