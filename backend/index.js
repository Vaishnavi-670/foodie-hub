const express = require('express');
const ProductRouter = require('./routers/productRouter');


const app = express();
const port = 5001;

app.use('/user', ProductRouter);

app.get('/ ', (req, res) => {
    res.send('Welcome to Foodie Hub');
});
app.get('/add', (req, res) => {
    res.send('Add a new product');
});

app.listen(port, () => {
  console.log('Server is running ');
});