require('dotenv').config();

module.exports = {
    mongo: {
        host: process.env.MONGO_HOST,
    },
    port: process.env.PORT,
};