const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));  // static assets


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.use((req, res, next) => {
	res.redirect('/');
})


app.listen(3000, () => console.log('Connection open'));
