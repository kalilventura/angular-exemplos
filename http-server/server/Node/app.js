const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const product = require('./product');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect('mongodb://localhost:27017/http_client', { useNewUrlParser: true });

var myLogger = function (req, res, next) {
    console.log(req.body);
    next();
}

app.use(myLogger);

app.get('/products', function (req, res) {
    product.find().lean().exec(
        (error, prods) => {
            if (error)
                res.status(500).send(error);
            else
                res.status(200).send(prods);
        });
});

app.get('/productserror', function (req, res) {
    setTimeout(
        () => {
            res.status(500).send({
                msg: 'Error message from the server'
            });
        }, 2000);
});

app.get('/productsdelay', function (req, res) {
    setTimeout(
        () => {
            product.find().lean().exec(
                (error, prods) => {
                    if (error)
                        res.status(500).send(error);
                    else
                        res.status(200).send(prods);
                })
        }
        , 2000);
});

app.get('/productsid', function (req, res) {
    product.find().lean().exec(
        (error, prods) => {
            if (error)
                res.status(500).send(error);
            else
                res.status(200).send(prods.map(p => p._id));
        });
});
// // Retorna um objeto inteiro
// app.get('/products/name/:id', function (req, res) {
//     const id = req.params.id;
//     product.findById(id,
//         (error, prod) => {
//             if (error)
//                 res.status(500).send(error);
//             else if (!prod)
//                 res.status(404).send({});
//             else
//                 res.status(200).send(prod);
//         });
// });

app.get('/products/name/:id', function (req, res) {
    const id = req.params.id;
    product.findById(id,
        (error, prod) => {
            if (error)
                res.status(500).send(error);
            else if (!prod)
                res.status(404).send({});
            else
                res.status(200).send(prod.name);
        });
});

app.post('/products', function (req, res) {
    p = new product({
        name: req.body.name,
        price: req.body.price,
        department: req.body.department
    });
    p.save((err, prod) => {
        if(err)
            return res.status(500).send(err)
        else
            return res.status(201).send(prod);
    })
})

app.delete('/products/:id', function (req, res) {
    const id = req.params.id;
    product.deleteOne({_id: id}),
    (err) => {
        if(err) {
            res.status(500).send(err);
        }else {
            res.status(200).send({});
        }
    }
})

app.listen(3000);