const express = require('express');
const Restaurant = require('../models/restaurantModel');

const router = express.Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Restaurant(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/getall', (req, res) => {
    Restaurant.find()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/getbyid/:id', (req, res) => {
    Restaurant.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get('/getbycuisine/:cuisine', (req, res) => {
    Restaurant.find({ cuisineType: req.params.cuisine })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.put('/update/:id', (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.delete('/delete/:id', (req, res) => {
    Restaurant.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;
