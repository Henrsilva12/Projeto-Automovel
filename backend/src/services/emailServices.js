//puxar variaveis do .env
require('dotenv').config();
const nodemailer = require('nodemailer');

class EmailService {
    
    constructor() {
        
    }

    static async sendEmail(email) {
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email.reciever,
            subject: email.subject,
            text: email.text
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                throw new Error('Erro ao enviar email: ' + error);
            } else {
                return ('Email enviado: ' + info.response);
            }
        });


        transporter.close();
    }

}

module.exports = EmailService;