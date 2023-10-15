const nodemailer = require('nodemailer')

const sendMail = async (data) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'practiceapplications0@gmail.com',
            pass: process.env.pass,
        },
    });

    const mailOptions = {
        from: 'Remitente <practiceapplications0@gmail.com>',
        to: 'marianotorres699@gmail.com',
        subject: `Contacto Por Trabajo`,
        html: `
            <html>
                <body>
                <p><strong>Nombre: ${data.name + ' ' + data.lastname}</strong></p>
                <p><strong>Correo Electronico:</strong> ${data.email}</p>
                <p><strong>Asunto:</strong> ${data.asunto}</p>
                </body>
            </html>`


    };

    const info = await transporter.sendMail(mailOptions);

    return info.response
}

module.exports = {
    sendMail
}