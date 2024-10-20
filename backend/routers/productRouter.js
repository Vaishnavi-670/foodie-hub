const express = require('express');
const Model = require('../models/productModel');

const {} = require('mongoose');
const router = express.Router();

router.get('/add',(req, res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
       res.status(200).send.json(result); 
    }).catch((err) => {
    res.status(500).send.json(err); 
    });

});

router.get('/getall',(req, res)=>{
    Model.find()
    .then((result) => {
        res.status(200).send.json(result);
    }).catch((err) => {
        res.status(500).send.json(err);
    });
});
router.get('/getbyid/:id',(req, res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).send.json(result);
    }).catch((err) => {
        res.status(500).send.json(err);
    });
});
router.get('/getbycategory/category',(req, res) => {
    Model.findByCategory(req.params.category)
    .then((result) => {
        res.status(200).send.json(result);
    }).catch((err) => {
        res.status(500).send.json(err);
    });
}) 
router.get('/update/:id',(req, res)=>{
    Model.findByIdAndUpdate(req.params.id , req.body , {new:true})
    .then((result) => {
        res.status(200).send.json(result);
    }).catch((err) => {
        res.status(500).send.json(err);
    });
});

//delete

router.get('/delete/:id',(req, res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).send.json(result);
    }).catch((err) => {
        res.status(500).send.json(err);
    });
});

module.exports = router;