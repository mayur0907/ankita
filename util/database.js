const Sequelize = require('sequelize');

const sequelize = new Sequelize('expence', 'root', 'mayur@123', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
