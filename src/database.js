const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ephusadmin:Ghariel.2017@cluster0-kqy3v.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB is connected'))
    .catch(e => console.log(e));