let express = require('express');
let router = express.Router();
let Department = require('./department');

router.post('/', function (req, res) {
    console.log(req.body);
    let dep = new Department({ name: req.body.name });
    dep.save((err, d) => {
        if (err)
            req.status(500).send(err)
        else
            res.status(201).send(d)
    })
});

router.get('/', function (req, res) {
    Department.find().exec((err, deps) => {
        if (err)
            res.status(500).send(err)
        else
            res.status(200).send(deps)

    })
});