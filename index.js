const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ ur: 'a bitch' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);