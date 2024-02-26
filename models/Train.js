// models/Train.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
  dialect: 'postgres',
  host: process.env.PG_HOST,
});

const Train = sequelize.define('Train', {
  train_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  train_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  arrival_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

module.exports = Train;
