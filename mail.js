const nodemailer = require("nodemailer");
const { sendgrid_user, sendgrid_key, from_mail, to_mail } = require('./config');

module.exports = async function sendMail() {
    const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: sendgrid_user,
            pass: sendgrid_key
        }
    });

    const message = await transporter.sendMail({
        from: from_mail,
        to: to_mail,
        subject: 'Statistiques hebdomadaires',
        text: 'Stats',
        html: '<p>Stats</p>',
        attachments: [
            {   // file on disk as an attachment
                path: './stats/sellers.csv' // stream this file
            },
            {
                path: './stats/sellers_reviews.csv'
            },
            {
                path: './stats/orders.csv'
            },
            {
                path: './stats/order_lines.csv'
            },
            {
                path: './stats/products.csv'
            },
            {
                path: './stats/products_reviews.csv'
            },
            {
                path: './stats/tickets.csv'
            },
            {   
                path: './stats/reports.csv'
            },
            {   
                path: './stats/customers.csv'
            }
        ]
    });

    console.log(`Message sent: ${message.messageId}`);
}