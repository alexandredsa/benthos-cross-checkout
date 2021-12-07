const express = require('express');
const app = express();


const generateRandomValue = (min, max) => {
    return parseFloat((Math.random() * (max - min + 1) + min).toFixed(2));
}

app.get('/currencies/from/brl', (req, res, next) => {

    console.log("processing request...");
    const response = {
        "BRL": 1,
        "EUR": generateRandomValue(5.5, 7),
        "USD": generateRandomValue(4.5, 6)
    }
    res.json(response);
});

app.use(express.json());
app.listen(4444);