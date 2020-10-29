const express = require('express');

const app = express();

app.use(express.static('public'));

app.use('/', express.static('public'));
app.use('/home', express.static('public'));
app.use('/about', express.static('public'));
app.use('/careers', express.static('public'));
app.listen(process.env.PORT || '3000', () => {
    console.log("server started")
})