const app = require('express')();
const home = require('../routes/home');
const profile = require('../routes/profile');
const review = require('../routes/reviews');
const product = require('../routes/product');
const messages = require('../routes/messages');
const upload = require('../routes/uploads');
const rent = require('../routes/rent');
const buy = require('../routes/buy');


app.use('/', home);

app.use('/profile', profile);

app.use('/review', review );

app.use('/product', product);

app.use('/messages', messages);

app.use('/upload', upload);

app.use('/rent', rent);

app.use('/buy', buy);



module.exports = app;