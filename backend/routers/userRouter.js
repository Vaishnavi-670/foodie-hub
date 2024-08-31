const express = require('express');
const Model = require('../models/userModel');

const {  } = require('mongoose');
const router = express.Router();

router.get('/add',(req, res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
       res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err);
    });
    
});

router.get('/getall',(req, res)=>{
    Model.find()
    .then((result) => {
       res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/getbyid/:id',(req, res)=>{
    Model.findById(req.params.id)
    .then((result) => {
       res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.getbyemail('/getbyemail/:email',(req, res)=>{
    Model.findByEmail(req.params.email)
    .then((result) => {
       res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err);
    });
});
router.get('/update/:id',(req, res)=>{
    Model.findByIdAndUpdate(req.params.id, req.body,  {new:true}) 
    .then((result) => {
       res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/delete/:id',(req, res)=>{
    Model.findByIdAndDelete(req.body.id)
    .then((result) => {
       res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err);
    });
});

module.exports = router;