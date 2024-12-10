const dotenv = require('dotenv').config();

module.exports = {
    HOST_DB : process.env.HOST_DB || "localhost",
    USER_DB: process.env.USER || "root",
    PASSWORD: process.env.PASSWORD || "", 
    DATABASE: process.env.DATABASE || "database",
    PORT_DB: process.env.PORT_DB || 3306
}

