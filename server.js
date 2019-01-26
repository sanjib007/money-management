const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const userRouter = require('./routes/userRoute');
app.use('/api', userRouter);




app.get('/', (req, res) =>{
    res.json({
        message : "welcome to our application."
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () =>{
    console.log('server is runing on port ', PORT);
    mongoose.connect('mongodb://localhost:27017/money-management-app', {useNewUrlParser: true}, ()=>{
        console.log('database connected....');
    });
})
