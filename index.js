const express = require('express');
const path = require('path')
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.send(path.join(__dirname, 'public'))
});

app.get("/image", (req, res) => {
    res.sendFile("./public/bmw.jpg");
})

const port = 4000;
app.listen(port, () => {`Listening on port ${port}`});