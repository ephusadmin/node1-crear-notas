const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Helloworld'));

app.listen(4000);
console.log('Server on port', 4000);