const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo');


mongoose.connection.once('open', function () {
    console.log("connection made");
}).on('error', function (error) {
    console.log('connection error', error);
});
