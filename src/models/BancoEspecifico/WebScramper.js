'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Produtos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    };
    Produtos.init({
        id: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        preco: DataTypes.DECIMAL,
        quantidade: DataTypes.INTEGER,
        categoria: DataTypes.STRING,
        imagem: DataTypes.STRING,
        ordem: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Produtos',
    });
    return Produtos;
    };
