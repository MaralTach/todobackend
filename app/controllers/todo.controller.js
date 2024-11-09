"use strict";

const Todo = require('../models/todo.model')

module.exports={

    list: async (req,res)=>{
        //    const data = await Todo.findAll()
    
        //datalarin kayit sayisinida verir findAndCountAll()
           const data = await Todo.findAndCountAll()
    
    
           res.status(200).send({
            error: false,
            result: data
        })
    },

    create:async (req,res)=>{

   const data = await Todo.create(req.body)
        // console.log(data)
    
        res.status(201).send({
            error: false,
            result: data.dataValues
        })
    
    },

    read: async(req,res)=>{
    
        //findByPk ilede id okuyabiliriz 
        const data = await Todo.findByPk(req.params.id)
    
        res.status(200).send({
            error:false,
            result: data
        })
    },

    update:async (req, res)=>{

        
    
        const data = await Todo.update(req.body,{where: {id: req.params.id} })
        // console.log(data)
    
        res.status(202).send({
            error:false,
            result:data,
            message:(data[0]>=1 ? 'Updated' : 'Can not updated'),
            //guncellendikten sonra yeni halini gormek icin:
            new: await Todo.findByPk(req.params.id) // guncellenmis kaydini goster
    
        })
    },

    delete: async (req,res)=>{
     
        const data = await Todo.destroy({where: {id: req.params.id}})
        // console.log(data)
 
        if (data >=1){
            //deleted
    
          //sadece status code ciktisi icin
              res.sendStatus(204)
           
        }else{
        
            res.errorStatusCode = 404
            throw new Error('Can not Deleted,maybe already deleted?')
        }
    }

}