const express = require('express');
const mongoose = require('mongoose');
const user = require ('../models/usermodel')

const router = express.Router();

//// create user
router.post('/',async(req ,res)=>{
    const {name,email , age} = req.body
    
    
    try {
        const userdata = await user.create({
            name:name,
            email:email,
            age:age,
        })
        res.status(201).json(userdata);
    }
    catch (error){
        res.status(400).json ({error:error.message});
    }
    });
    
///get 
router.get('/',async(req ,res)=>{
    try {
        const showAll = await user.find({
           
        })
        res.status(200).json(showAll);
    }
    catch (error){
        console.log(error);
        res.status(500).json ({error:error.message});
    }
    });

    /// single user through id 
    router.get('/:id',async(req ,res)=>{
        const { id } = req.params;
        try {
            const singleUser = await user.findById(id);
            res.status(200).json(singleUser);
        }
        catch (error){
            console.log(error);
            res.status(500).json ({error:error.message});
        }
        });

        router.put('/:id',async(req ,res)=>{
            const { id } = req.params;
            const {name , email ,age }= req.body;
            try {
                const updateUser = await user.findByIdAndUpdate(id , req.body ,{new: true,});
                res.status(200).json(updateUser);
                
            }
            catch (error){
                console.log(error);
                res.status(500).json ({error:error.message});
            }
            });


    // delete user 
    router.delete('/:id',async(req ,res)=>{
        const { id } = req.params;
        try {
            const deleteUser = await user.findByIdAndDelete(id);
            res.status(200).json(deleteUser);
            
        }
        catch (error){
            console.log(error);
            res.status(500).json ({error:error.message});
        }
        });
        
        
    

    module.exports = router;