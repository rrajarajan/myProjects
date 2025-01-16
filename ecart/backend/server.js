// const express = require('express');
// const products = require('./data/products');
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';

const port = process.env.PORT || 5001;

const app = express();

app.get('/', (req, res) =>
    res.send('API RUNNING ......')
  );

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product);
});

app.listen(port, () =>  console.log(`Server is RUNNING on port ${port}`));


// console.log('HELLO WORLD');