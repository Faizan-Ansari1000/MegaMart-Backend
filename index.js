const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const authRoute = require('./routes/authRoute');
const product = require('./routes/productRoute');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome Backend')
})

app.use('/auth', authRoute);
app.use('/product', product);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => { console.log(`DB Connected & Server running on port ${PORT}`) });
    })
    .catch((err) => {
        console.log(err, 'DB Connection Error');
    });

module.exports = app;

