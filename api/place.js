"use strict";
var express = require("express");
var place_1 = require("../models/place");
var router = express.Router();
router.get('/', function (req, res) {
    place_1.default.find().then(function (types) {
        res.json(types);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.get('/:id', function (req, res) {
    console.log(req.params["id"]);
    place_1.default.find({ type: req.params["id"] }).then(function (types) {
        res.json(types);
    }).catch(function (err) {
        res.status(500);
        console.error(err);
    });
});
router.post('/', function (req, res) {
    var place = new place_1.default();
    place.type = req.body.type;
    place.name = req.body.name;
    place.rating = req.body.rating;
    place.food = req.body.food;
    place.service = req.body.service;
    place.decor = req.body.decor;
    place.comment = req.body.comment;
    place.style = req.body.style;
    place.save().then(function (newType) {
        res.json(newType);
    }).catch(function (err) {
        res.status(400).json(err);
    });
});
router.post('/:id', function (req, res) {
    var typeId = req.params.id;
    place_1.default.findById(typeId).then(function (place) {
        place.type = req.body.type;
        place.name = req.body.name;
        place.rating = req.body.rating;
        place.food = req.body.food;
        place.service = req.body.service;
        place.decor = req.body.decor;
        place.comment = req.body.comment;
        place.style = req.body.style;
        place.save().then(function (updatedType) {
            res.json(updatedType);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    }).catch(function () {
        res.sendStatus(404);
    });
});
router.delete('/:id', function (req, res) {
    var typeId = req.params.id;
    place_1.default.remove({ _id: typeId }).then(function () {
        res.sendStatus(200);
    }).catch(function (err) {
        res.status(500);
        console.log(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
