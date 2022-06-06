const express = require('express');
const { myName, routes } = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

const showServerRunning = () => {
    console.log("Server running " + myName);
}

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Learning NodeJs')
}) // In this case, this is not necessary, due to the fact the routes is already covering this

app.listen(port, showServerRunning)