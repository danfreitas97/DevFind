const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

app.listen(3000, () => console.log('Server On - Port 3000'))