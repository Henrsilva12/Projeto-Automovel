const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const EmailService = require('./emailServices');
require('dotenv').config();

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
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        const cliente = await this.clienteRepository.findById(loginData.cliente_id);

        return { cliente, token };
    }


    async requirePasswordRecoveryLink(email) {
        

        if (!email) {
            throw new Error('Email não informado');
        }

        const cliente = await this.clienteRepository.findByEmail(email);
        if (!cliente) {
            throw new Error('Cliente não encontrado');
        }
        
        const token = jwt.sign(
            { email: cliente.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        const link = `${process.env.FRONT_END_URL}/recover_password?token=${token}`;
        const response = EmailService.sendEmail({
            reciever: email,
            subject: 'Recuperação de senha',
            text: `            
            <h1>Recuperação de senha</h1>
            <p>Clique no link abaixo para recuperar sua senha</p>
            <a href="${link}" style: width: 100px; height: 50px; background-color: blue; color: white;>Recuperar senha</a>
            `
        });

        return { response };
    }

    async passwordReset( token, newPassword) {
        

        if (!token) {
            throw new Error('Token não informado');
        }

        if (!newPassword) {
            throw new Error('Nova senha não informada');
        }

        let email = '';

        await this.validateToken(token) ? email = this.validateToken(token).decoded.email : null;

        if (!email || email === '' || email === undefined || email === null) {
            throw new Error('Email não encontrado no token');
        }

        const cliente = await this.clienteRepository.findByEmail(email);
        if (!cliente) {
            throw new Error('Cliente não encontrado');
        }

        const response = await this.update(
            { cliente_id: cliente.cliente_id },
            { senha: newPassword },
            {}
        );

        return { 
            response
         };
    }

    async validateToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return { isValid: true, decoded };
        }
        catch (error) {
            return { isValid: false, error };
        }
    }

}

module.exports = ClienteService;