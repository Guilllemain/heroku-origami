const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    base_uri: process.env.BASE_URI,
    access_token: process.env.ACCESS_TOKEN,
    grant_type: process.env.GRANT_TYPE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    sendgrid_user: process.env.SENDGRID_USER,
    sendgrid_key: process.env.SENDGRID_KEY,
    from_mail: process.env.FROM_MAIL,
    to_mail: process.env.TO_MAIL
};