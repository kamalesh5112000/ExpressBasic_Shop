const Sequelize =require('sequelize');

const sequelize=require('../database/database');

const Product = sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false
  },
  quantity:{
    type:Sequelize.INTEGER,
    allowNull:false
  },
  description:{
    type:Sequelize.STRING,
    allowNull:false
  }
});

module.exports=Product;