const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');


const app = express();
const port = 5001;

app.use(cors({
  origin:'*', // default value for cors origin 
}))
app.use(express.json());
app.use('/user', userRouter);
app.use('/product', ProductRouter);

app.get('/ ', (req, res) => {
    res.send('Welcome to Foodie Hub');
});
app.get('/add', (req, res) => {
    res.send('Add a new product');
});

app.listen(port, () => {
  console.log('Server is running ');
});