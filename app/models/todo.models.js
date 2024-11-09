"use strict"

//! SEQUELIZE

const {Sequelize, DataTypes, Error} = require('sequelize')

const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

const Todo = sequelize.define('todos', {
    title:{
        type:DataTypes.STRING(256), //arka planda varchar(256)
        allowNull:false
    },

    description:DataTypes.TEXT, //ShortHand

    priority:{
        type:DataTypes.TINYINT,
        allowNull:false,
        defaultValue: 0 
    },

    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
})

//* Connet to DB: veritabanina baglanmak then catch ()=>
    sequelize.authenticate()
.then(()=> console.log('* DB connect *'))
.catch(()=> console.log('* DB not connect *'))

