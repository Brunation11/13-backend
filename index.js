const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();

const db = require('./db');

const apiPort = 8000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyparser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => (
	res.send('Hello World!')
));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
