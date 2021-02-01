const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport( {
        host: process.env.MAIL_HOST,
        port: 587,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }

})


exports.handler = async (event, context) => {

    const info = await transporter.sendMail({
        from: "The Toasted Tart <ttt@example.com>",
        to: "orders@example.com",
        subject: "Contact TTT",
        html: `<p> Contact us here</p>`,
    })

    return {
        statusCode: 200,
        body: JSON.stringify(info)
    }
    
}