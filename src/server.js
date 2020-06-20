const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.send('listado de usuarios')
})






app.listen(3000, () => console.log('server is running'))