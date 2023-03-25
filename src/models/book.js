const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

class Book extends Model {}
Book.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pages: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  current_page: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Selesai dibaca', 'Sedang dibaca'),
    allowNull: false,
    defaultValue: 'Sedang dibaca',
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Book',
  timestamps: false,
});

module.exports = Book;