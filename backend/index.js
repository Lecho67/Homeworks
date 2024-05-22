console.log('Hello, World!');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
app.use(express.static('public'));
app.use('/api/auth',require('./routes/auth'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

     