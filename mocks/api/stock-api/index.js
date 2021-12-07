const express = require('express');
const app = express();


const availableProducts = [
    '234d617f-9d77-4931-aea1-0e5c62ff4801',
    '3ab1d7fb-0780-4702-a01e-13b7014c4d57',
    'f9bf06c2-8407-4284-88ed-7f2dd2d84371',
    '7949afc1-96d2-475b-a9b4-2eaca71f3d1f',
    '8cbd6851-5ad0-4b2b-bb85-176f8469e20e',
    'b2bdbc85-0fff-4618-8abc-7db80fce3258'
];
app.get('/products/:product_id', (req, res, next) => {
    const productID = req.params.product_id;

    console.log(`executing request for ${productID}`);

    let response = {
        status: 'outofstock'
    };

    if (availableProducts.includes(productID)) {
        response.status = 'instock';
    }

    res.json(response);
});

app.use(express.json());
app.listen(3333);